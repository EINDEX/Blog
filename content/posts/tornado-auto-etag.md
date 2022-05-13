---
title: "Tornado Auto Etag 机制"
date: 2019-04-24T14:20:03+08:00
draft: false
tags: ["Python", "Cache", "ETag"]
categories: "代码"
---


为了研究缓存看了 tornado `web.py` 里的 `finish` 函数

<!--more-->
代码如下
```python
    def finish(self, chunk: Union[str, bytes, dict] = None) -> "Future[None]":
        """Finishes this response, ending the HTTP request.

        Passing a ``chunk`` to ``finish()`` is equivalent to passing that
        chunk to ``write()`` and then calling ``finish()`` with no arguments.

        Returns a `.Future` which may optionally be awaited to track the sending
        of the response to the client. This `.Future` resolves when all the response
        data has been sent, and raises an error if the connection is closed before all
        data can be sent.

        .. versionchanged:: 5.1

           Now returns a `.Future` instead of ``None``.
        """
        if self._finished:
            raise RuntimeError("finish() called twice")

        if chunk is not None:
            self.write(chunk)

        # Automatically support ETags and add the Content-Length header if
        # we have not flushed any content yet.
        if not self._headers_written:
            if (
                self._status_code == 200
                and self.request.method in ("GET", "HEAD")
                and "Etag" not in self._headers
            ):
                self.set_etag_header()
                if self.check_etag_header():
                    self._write_buffer = []
                    self.set_status(304)
            if self._status_code in (204, 304) or (
                self._status_code >= 100 and self._status_code < 200
            ):
                assert not self._write_buffer, (
                    "Cannot send body with %s" % self._status_code
                )
                self._clear_headers_for_304()
            elif "Content-Length" not in self._headers:
                content_length = sum(len(part) for part in self._write_buffer)
                self.set_header("Content-Length", content_length)

        assert self.request.connection is not None
        # Now that the request is finished, clear the callback we
        # set on the HTTPConnection (which would otherwise prevent the
        # garbage collection of the RequestHandler when there
        # are keepalive connections)
        self.request.connection.set_close_callback(None)  # type: ignore

        future = self.flush(include_footers=True)
        self.request.connection.finish()
        self._log()
        self._finished = True
        self.on_finish()
        self._break_cycles()
        return future
```

从代码中可以看出, 满足下面条件的请求:

- `self._headers_written` 为不为`True` 
-  http status 为 `200` 的 `GET`、 `HEAD` 请求
- 同时没有 `Etag` 在 `response header` 的情况下

tornado 会自动计算返回结果的 sha1, 并设置 Etag 若客户端支持 Etag 机制, 正确返回 `If-None-Match`, 就能节约一波流量, 美滋滋.

