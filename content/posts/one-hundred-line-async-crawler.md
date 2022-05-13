---
title: "一百行代码实现异步爬虫"
date: 2019-09-07T12:17:25+08:00
draft: false
tags: [Python, Crawler, Async]
categories: "代码"
---

一个优雅的爬虫需要一下这些东西：

- 请求器
- 页面解析器
- 链接生成器
- 调度器

<!--more-->

## 请求器
负责发送请求。

## 页面解析器
负责从页面上解析出继续爬的链接。

## 链接生成器
负责处理继续爬虫的链接并放入队列。

## 调度器
决定链接是否应该被爬去的核心部件。

## 异步
同时有多个请求在发送，即时异步爬虫。

## 代码

相关代码已上传到 [Github\[https://github.com/EINDEX/100-line-async-spider\]](https://github.com/EINDEX/100-line-async-spider)。
```python
import aiohttp, asyncio, aiofiles, lxml, pathlib, sys, re, lxml.html
from urllib.parse import urlparse
from pathlib import Path
from hashlib import md5

MAX_GET, MAX_QUEUE_SIZE, MAX_WORKER = 10000, 100, 20
spider_url_set, spider_content_set = set(), set()
status = {"success": 0, "all": 0, "same": 0, "same_content":0}

async def fetch(url):
    global MAX_GET
    if MAX_GET < 0:
        return
    async with aiohttp.ClientSession(connector=aiohttp.TCPConnector(ssl=False), timeout=aiohttp.ClientTimeout(total=1)) as session:
        async with session.get(url) as response:
            return await response.text()

async def savefile(path, data):
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)
    async with aiofiles.open(path, mode='w') as f:
        await f.write(data)

def data_analysis(data):
    try:
        html = lxml.html.fromstring(data)
        return html.xpath('//a/@href')
    except:
        return []

def url_analysis(endpoint, urls):
    for url in urls:
        if not url or url == '#' or 'javascript' in url:
            continue
        elif url.startswith('/'):
            if endpoint.endswith('/'):
                endpoint = endpoint[:-1]
            yield endpoint + url
        elif url.endswith('.html') or url.endswith('.htm') or url.endswith('.shtml') or url.endswith('/') or '?' in url:
            yield url

def path_gene(endpoint):
    result = urlparse(endpoint)
    return f'data/{"/".join(list(filter(lambda x:x, result.hostname.split(".")))[::-1])}{result.path+"/index.html" if result.path!="/" else "/index.html"}{result.query.replace("/","")}'

async def pushurl(url_iter, queue):
    global MAX_GET
    try:
        for url in url_iter:
            if MAX_GET > 0:
                await queue.put(url)
    except Exception as e:
        pass
    
async def spider(name,queue):
    global MAX_GET, spider_content_set, spider_url_set
    while MAX_GET > 0:
        try:
            endpoint = await queue.get()
            data = await fetch(endpoint)
            md5data = md5(data.encode()).hexdigest()
            if md5data in spider_content_set:
                status['same_content'] += 1
                continue
            MAX_GET -= 1
            status['all'] += 1
            spider_content_set.add(md5data)
            await savefile(path_gene(endpoint), data)
            asyncio.gather(asyncio.create_task(pushurl(url_analysis(endpoint, data_analysis(data)), queue)), return_exceptions=False)
            status['success'] += 1
        except Exception as e:
            pass

def exit():
    print('exit')
    for task in asyncio.Task.all_tasks():
        task.cancel()
    sys.exit(0)

async def main(first_endpoint):
    queue = asyncio.Queue(MAX_QUEUE_SIZE)
    await queue.put(first_endpoint)
    asyncio.gather(*[asyncio.create_task(spider(spider_id,queue)) for spider_id in range(MAX_WORKER)], return_exceptions=False)
    try:
        while True:
            await asyncio.sleep(1)
            print(queue.qsize(), MAX_GET, status)
            if MAX_GET <= 0 or not queue.qsize():
                exit()
    except:
        exit()

if __name__ == "__main__":
    asyncio.run(main('https://eindex.me/'))
    asyncio.get_event_loop().close()
```