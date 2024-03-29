---
title: "Joining the Webmentions Community: A Beginner's Guide"
date: 2022-11-06T17:44:50+08:00
updated: 2022-12-05T23:48:50+08:00
description: " A protocol to notify webpages about links, likes, or comments. Enables better communication on the internet."
tags:
  - webmentions
  - beginner-guide
  - indie-web
  - microformats2
  - github-actions
  - javascript
series: blog-enhance-plan
draft: false
---

Recently I came across [Now, I'm in IndieWeb?](https://www.owenyoung.com/en/blog/indieweb/) and learned about webmentions. I found the concept very interesting and decided to join the webmentions community for my blog.

## What are webmentions

Webmentions are a way for websites to communicate with each other and notify each other when they link to each other's content. This allows for a more interactive and connected online community, where websites can engage with each other and their users in real-time.

## How do I join the webmentions community?

To join the webmentions community and start receiving notifications when other websites link to your content, you need to take the following steps:

1. Register your website with a webmention service, such as webmention.io. This will allow your website to receive webmentions from other sites and also enable you to send webmentions to other sites when you link to them. To do this, you can add the following HTML code to your website:

   ```html
   <link rel="webmention" href="https://webmention.io/eindex.me/webmention" />
   <link rel="pingback" href="https://webmention.io/eindex.me/xmlrpc" />
   ```

2. Make sure your website follows the [microformats2](https://microformats.org/) standard. This may require some effort, but it is important for ensuring that your website can properly send and receive webmentions. You can use a tool like [IndieWebify.Me](https://indiewebify.me/) to check if your website is using microformats2 correctly. You may also want to use a tool like `ngrok` or `cloudflare tunnel` to debug your website locally, which can save you time.

3. Start sending and receiving webmentions on your website. Once your website is registered with a webmention service and you have tested your implementation, you can start using webmentions on your site. Whenever you link to another website, you can send a webmention to notify them of your link. And whenever someone else links to your website, you can receive a webmention notification and display that link on your site.

4. Consider using tools like Github actions and JavaScript scripts to automate the process of sending and receiving webmentions. This is particularly useful for static websites. For example, you can store your webmentions in a `webmentions` branch on Github, and use a workflow file like this to fetch webmentions and send your webmentions, you also can check my [implement](https://github.com/EINDEX/blog/blob/main/.github/workflows/fetch-webmentions.yaml) for this blog:

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

By following these steps, you can join the webmentions community and start enjoying the benefits of more interactive and engaging communication with other websites and their users.
e
## Why join the webmentions community?

There are many potential benefits to joining the webmentions community and implementing webmentions on your website. Some of the potential benefits include:

- Increased engagement and connectivity with other websites and theirusers. By receiving notifications when other websites link to your content and being able to notify other websites when you link to them, you can foster a more interactive and connected online community. This can lead to increased traffic and potentially even more opportunities for collaboration and engagement.

- Improved communication and collaboration with other websites. Webmentions allow for real-time communication between websites, which can be helpful for coordinating efforts and staying up-to-date with the latest developments in the webmentions community.

- The ability to participate in the evolving web ecosystem. Webmentions are a form of "web 3.0" where websites are more interconnected and interactive than in the past. By joining the webmention community, you can be part of this evolving web ecosystem and potentially benefit from new opportunities and connections that arise.

Of course, joining the webmention community does require some effort and resources, so it may not be the right decision for everyone. But for many website owners, the potential benefits of joining the webmention community may outweigh the challenges, making it a worthwhile investment.

## Conclusion

In this beginner's guide, we've covered the steps involved in joining the webmentions community and implementing webmentions on your website. By following these steps, you can join the webmentions community and start enjoying the benefits of more interactive and engaging communication with other websites and their users. While there are some challenges and resources required to join the webmention community, the potential benefits may outweigh the challenges for many website owners.
