---
title: "加入 Webmentions 社区: 新手指导"
date: 2022-11-06T17:44:50+08:00
updated: 2022-12-05T23:48:50+08:00
description: "了解如何加入 Webmentions 社区，提高你的博客与其他网站及其用户的互动性和参与度。"
taxonomies:
  tags:
    [
      "webmentions",
      "community",
      "beginner's guide",
      "indie web",
      "microformats2",
      "engagement",
      "connectivity",
      "Github actions",
      "JavaScript",
    ]
  series:
    - blog-enhance-plan
---

> 本文通过 DeepL 翻译自 [Joining the Webmentions Community: A Beginner's Guide](@/posts/webmentions.md)

最近我看到了[Now, I'm in IndieWeb?](https://www.owenyoung.com/en/blog/indieweb/)，了解到了 Webmentions。我发现这个概念非常有趣，于是决定加入我的博客的 Webmentions 社区。

<!-- more -->

## 什么是 Webmentions

Webmentions 是一种网站相互交流的方式，当它们链接到对方的内容时，可以通知对方。这使得网络社区的互动性更强，联系更紧密，网站可以与对方和用户实时互动。

## 我如何加入 Webmentions 社区？

要加入 Webmentions 社区，并开始接收其他网站链接到你的内容时的通知，你需要采取以下步骤。

1. 在 Webmentions 服务中注册你的网站，比如 webmention.io。这将使你的网站能够接收来自其他网站的网络提示，也使你能够在链接到其他网站时向它们发送网络提示。要做到这一点，你可以在你的网站上添加以下 HTML 代码。

   ```HTML
   <link rel="webmention" href="https://webmention.io/eindex.me/webmention" />
   <link rel="pingback" href="https://webmention.io/eindex.me/xmlrpc" />
   ```

2. 确保你的网站遵循[microformats2](https://microformats.org/)标准。这可能需要一些努力，但这对于确保你的网站能够正确地发送和接收 Webmentions 是很重要的。你可以使用[IndieWebify.Me](https://indiewebify.me/)这样的工具来检查你的网站是否正确使用 microformats2。你也可以使用像`ngrok`或`cloudflare tunnel`这样的工具，在本地调试你的网站，这样可以节省时间。

3. 开始在你的网站上发送和接收 Webmentions。一旦你的网站在 Webmentions 服务中注册，并且你已经测试了你的实施，你就可以开始在你的网站上使用 Webmentions 来通知他们你的链接。而每当别人链接到你的网站时，你可以收到 webmention 通知，并在你的网站上显示该链接。

4. 考虑使用 Github 行动和 JavaScript 脚本等工具来自动发送和接收 Webmentions 的过程。这对静态网站特别有用。例如，你可以在 Github 上的`webmentions`分支中存储你的 Webmentions，并使用像这样的工作流文件来获取 Webmentions 和发送你的 Webmentions，你也可以查看我的[实现](https://github.com/EINDEX/blog/blob/main/.github/workflows/fetch-webmentions.yaml)这个博客的。

   ```yaml
   name: Fetch Webmentions
   on:
   schedule:
       - cron: "0 0 * * *"
   jobs:
   fetch_webmentions:
       runs-on: ubuntu-latest
       steps:
       - uses: actions/checkout@v2
           with:
           ref: webmentions
       - name: Fetch Webmentions
           run: node pipeline/webmentions.js
       - name: Send Webmetnions
           run: node pipeline/send-webmentions.js
   ```

按照这些步骤，你可以加入 Webmentions 社区，并开始享受与其他网站及其用户进行更多互动和参与性交流的好处。

## 为什么要加入 Webmentions 社区？

加入 Webmentions 社区并在您的网站上实施 Webmentions 有许多潜在的好处。一些潜在的好处包括。

- 增加与其他网站及其用户的接触和联系。通过在其他网站链接到你的内容时收到通知，并在你链接到其他网站时能够通知其他网站，你可以培养一个更加互动和连接的在线社区。这可以带来更多的流量，甚至有可能带来更多的合作和参与机会。

- 改善与其他网站的沟通和协作。 Webmentions 允许网站之间进行实时沟通，这对协调工作和保持 Webmentions 社区的最新发展很有帮助。

- 参与不断发展的网络生态系统的能力。 Webmentions 是 "Web 3.0 "的一种形式，与过去相比，网站之间的相互联系和互动更多。通过加入 Webmentions 社区，你可以成为这个不断发展的网络生态系统的一部分，并有可能从出现的新机会和联系中受益。

当然，加入 Webmentions 社区确实需要一些努力和资源，所以它不一定是每个人的正确决定。但对许多网站所有者来说，加入 Webmentions 社区的潜在好处可能会超过挑战，使其成为一项值得的投资。

## 总结

在这个初学者指南中，我们已经介绍了加入 Webmentions 社区和在网站上实施 Webmentions 的步骤。按照这些步骤，你可以加入 Webmentions 社区，并开始享受与其他网站及其用户进行更多互动和参与性交流的好处。虽然加入 Webmentions 社区需要一些挑战和资源，但对许多网站所有者来说，潜在的好处可能超过了挑战。
