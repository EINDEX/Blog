---
title: "My HomeLab"
date: 2022-05-15T23:39:46+08:00
updated: 2023-01-03T17:40:23+08:00
draft: false
latex: false
taxonomies:
    tags: [K3S, Proxmox VE, Self-Hosted, Docker]
---

这篇文章将会介绍一下我的 HomeLab。

为什么会建设 HomeLab，它给我带来了什么价值？以及为什么是现在的结构，解决了什么问题。

## Update in 2022

今年接触了DevOps、Kubernetes、Terrafrom 和 Pulumi。

所以在空闲时间把HomeLab的架构迁移了好几轮，从 Helm3 到 Pulumi，最终觉得实在是在折腾了，回到了 docker-compose + terrafrom 的模式。

顺便开源了一下 [Homelab infra](https://github.com/EINDEX/homelab-infra)。

同时也调整了一下维护的服务:

- **Dev** 从 Tekton 换回了 Drone CI, 去掉了 SonarQube 改用 Semgrep，去掉了PVE, Tekton 和 Keel，为了省电改回了 Docker 所有 K8s 相关的服务都可以拿掉了。
- **Media** 增加了 NASTool 和 Tautulli 为影片数据护航，去掉了Jackett。
- **Application** 去掉了 RocketChat, Syncthings。 增加了 Fava 和 Memos。
- **Other** docker 镜像的自动更新改为使用 watchtower。


![2022 Authentik Page](https://img.eindex.me/img/cad20937c8d2b0d3259d0602761a88fc.png)

<!-- more -->

## 结缘

在 2017 年末，我遇到一个艰难的问题，我有很多设备，小米手机，iPad，MacBook Pro，之前用的 Resilio Sync(原 BTSync)，也需要翻墙才能同步文件。 Google Photos 在墙内的使用体验也日渐下降。

机缘巧合之下，Synology 出现在我的面前。一拍脑袋，搞了一个 Synology 218+。

单纯的我当时只是想同步一下文件，给 MacBook 加上 Time Machine，并没想道这是我和 HomeLab 缘分的开始。

## 时间线

### 早期

主要是使用一些 Synology 原生功能，如 Moments，Video，Drive，Note 等，然后在 Docker 里跑了一两个简单的服务。单纯就用来备份照片，数据，剪裁网页啥的。

维护成本也很低。直到某一天我发现 [Synology Community](https://synocommunity.com/)，这里面有很多奇奇怪怪的 package，稍微研究了一下，就打开了新世界的大门。

这里面有各种各样的 Self-hosted 服务，多媒体自动化，下载的，书籍管理，文件同步，RSS 和一些 DSM 并不自带的系统命令。

迫于追剧的需求，我当在群晖里增加了多媒体自动化没，当时用的 Jackett，Sonarr，Radarr，Emby 一套，用来自动下载，刮削，看视频，看电影。同时将服务管理到 docker-compose 里。

### 更多需求

由于换到新公司，工作压力没有之前那么大。有更多的时间去折腾 HomeLab，先是用了个电脑搭建了 OMV，直到某天 U 盘系统崩了，于是心一横买了稳定且性能更强的 Synology 920+。

这个阶段开始使用 Traefik 做为 Ingress，所有服务有一个中心化的入口，再也不用背各种端口号了。

还引入了一些新服务，Organizr 当作 application dashboard，Home Assistant 作为家庭自动化中枢，Bitwarden 作为密码管理器，qBittorrent 用来下载，Bazarr 用来寻找字幕，Miniflux 作为 RSS 阅读器。

### 虚拟化 与 K3S

在折腾的过程中，服务越来越多，可维护性与可见性快速下降，同时性能也快接触到 D920+ 的瓶颈。

为了一口气解决这些问题，我希望找到一种把程序和数据分开，计算和控制分开，写的配置最好是可以方便的代码化，可以快速恢复。

在一些调研之后，采用 K3S in Proxmox VE 的模式去运行。即是在 PVE 里运行一个或多个 K3S 的虚拟机。组成一个 K3S 集群。这个方案其实很接近 `TrueNAS SCALE` 想法，奈何我想让我可以在 PVE 里可以快速的启动一个 X86-64 的 linux lxc 环境，进行快速的测试，而那是 TrueNAS SCALE 还在测试阶段，唉～

## HomeLab 的 现状

现在所有的服务都 PVE 服务器的 K3S 里，数据通过 nfs 存放在群晖中。

现在运行了更多的服务，媒体自动化方面增加了 Overseerr，Servrr 新出的 Prowlarr，EMBY 替换成了 Plex；阅读方面增加了 Rsshub，Miniflux 替换成了 FreshRSS。

关于可见性方面，增加了 Graylog 作为日志中心（有点重，还在寻找替代品或者给服务器增加点性能），HealthChecks 用来查看定时任务的更新情况。

可维护性方面，增加了 Keel 自动化更新服务，增加了 RocketChat 作为 ChatOps 的入口。

安全方面 Authentik 做了集中的认证中心，虽然各个服务对 SSO 的支持并不完善，如果不支持 SSO 会在放在 SSO 后面要求再次登录。

增加了开发相关的服务 Gitea + Drone CI + SonarQube，做了一套简单的 DevSecOps 工具链。

整了一个新的工控机做为软路由。

下面是现在的简单截图。

![Authentik Screenshot](https://img.eindex.me/img/5cc645f8387d4a78c9645191f9292d58.png)

当然还有一些服务是在命令行中运行的，就没有在此展示了。

### 未来

设备方面，想采购一个更加正规的设备如 HPE MicroServer Gen10 Plus 或其他小型的服务器，来提供更多的性能，满足我对安静且占地小的需求。增加一些 AP，提高上网体验。

服务方面，现在正在研究如何合理的托管 Beancount 的 webui Fava，如果不知道啥事 Beancount 可以看这篇[《复式记账工具 Beancount》](@/posts/beancount-introduce.cn.md)。
考虑增加一个 n8n,来做服务建的桥梁，减少自己写代码实现的工作量。还期望弄个 code-server，可以随时随地有个可用的开发环境。
增加一个 Clash 服务在 HomeLab 中，能快速的调整整个局域网中的上网规则。

## HomeLab 对我的价值

### Well

HomeLab 的存在首先是解决了我数据存储方面的问题，现在可用的存储空间大约有 8 ～ 10TB 左右，用来存储我的照片，追剧，电影，备份，代码库等，还是有一些余量的。在购买数码产品的时候，可以放心大胆的使用最小的存储空间。

其次，如果我需要写代码，我可以在自己家里运行 CI/CD，反正设备已经是花了电费了，就不需要花时间研究如何白嫖，Github Action 或者是 Circle CI 了。~~当然现在还嫖着。~~

再是可以进行快速的实验，可以用来实践 Kubernetes，terraform 等 CNCF 相关服务，对我考 CKA 应该也是有所帮助的。

最后是节约了时间，在有很多自动化服务的加持之下，我可以集中更多时间和精力去做自己想做的事情。

### Less Well

性能拉胯，毕竟是在家跑服务，也做不到网上那些大佬，动不动整个机柜啥的，所以为了省电，性能优点拉胯。好在可以靠时间来拉平。

搭建 HomeLab 里的各种服务，还是挺花时间的，好不容易节约的那些时间，都投入回去了 🥹。

## 结语

这个东西真的很有趣，如果对 Self-Hosted 服务或者家庭实验室有兴趣，非常推荐整一个玩玩，当然最好是迭代着来，也许可以从树莓派开始？

如果有对本文内容相关问题，欢迎在评论区与我探讨。
