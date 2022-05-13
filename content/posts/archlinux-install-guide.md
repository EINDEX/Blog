---
title: "小白也能上手的 ArchLinux 安装教程"
date: 2017-10-05T14:24:21+08:00
draft: false
categories: "教程"
tags: [ArchLinux]
---
ArchLinux 是一个非常符合我个人哲学的操作系统，深得与我一样的大部分 Pythonista 之心(不好意思代表你们了)。

<!--more-->
## 什么是 ArchLinux
> ## 原则
>以下核心原则构成了我们通常所指的 Arch 之道，或者说 Arch 的哲学，或许最好的结词是 Keep It Simple, Stupid（对应中文为“保持简单，且一目了然”）。
>### 简洁
>Arch Linux 将简洁定义为：**避免任何不必要的添加、修改和复杂增加**。它提供的软件都来自原始开发者([上游](https://en.wikipedia.org/wiki/Upstream_(software_development) "wikipedia:Upstream (software development)"))，仅进行和发行版(下游)相关的最小修改。
> - 不包含上游不愿意接受的补丁。绝大部分 Arch 下游补丁都已经被上游接受，下一个正式版本里会包含。
> - 配置文件也是来自上游，仅包含发行版必须的调整，比如特殊的文件系统路径变动。Arch 不会在安装一个软件包后就自动启动服务。
> - 软件包通常都和一个上游项目直接对应。仅在极少数情况下才会拆分软件包。
> - 官方不支持图形化配置界面，建议用户使用命令行或文本编辑器修改设置。
> ### 现代
> Arch尽全力保持软件处于最新的稳定版本，只要不出现系统软件包破损，都尽量用最新版本。Arch采用[滚动升级](https://en.wikipedia.org/wiki/Rolling_release "wikipedia:Rolling release")策略，安装之后可以持续升级。
> Arch向GNU/Linux用户提供了许多新特性，包括[systemd](https://wiki.archlinux.org/index.php/Systemd_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87) "Systemd (简体中文)")初始化系统、现代的[文件系统](https://wiki.archlinux.org/index.php/File_systems "File systems")、LVM2/EVMS、软件磁盘阵列（软RAID）、udev支持、initcpio（附带mkinitcpio）以及最新的内核。
> ### 实用
> Arch 注重实用性，避免意识形态之争。最终的设计决策都是由开发者的共识决定。开发者依赖基于事实的技术分析和讨论，避免政治因素，不会被流行观点左右。
> Arch Linux 的仓库中包含大量的软件包和编译脚本。用户可以按照需要进行自由选择。仓库中既提供了开源、自由的软件，也提供了闭源软件。**实用性大于意识形态**.
> ### 以用户为中心
> 许多 Linux 发行版都试图变得更“用户友好”，Arch Linux 则一直是，永远会是“以用户为中心”。此发行版是为了满足贡献者的需求，而不是为了吸引尽可能多的用户。Arch 适用于乐于自己动手的用户，他们愿意花时间阅读文档，解决自己的问题。
> 报告问题、完善 Wiki 社区文档、为其它用户提供技术支持。[Arch 用户仓库](https://wiki.archlinux.org/index.php/Arch_User_Repository_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87) "Arch User Repository (简体中文)") 收集用户贡献的软件包。Arch 开发者都是志愿者，活跃的贡献者很快就能称为开发人员。
> Arch 鼓励每一个用户 [参与](https://wiki.archlinux.org/index.php/Getting_involved "Getting involved") 和贡献，报告和帮助修复 [bugs](https://bugs.archlinux.org/)，提供软件包补丁和参加核心 [项目](https://projects.archlinux.org/)：Arch 开发者都是志愿者，通过持续的贡献成为团队的一员。*Archers* 可以自行贡献软件包到 [Arch User Repository](https://wiki.archlinux.org/index.php/Arch_User_Repository "Arch User Repository"), 提升 [ArchWiki 文档质量](https://wiki.archlinux.org/index.php/Main_page "Main page"), 在 [论坛](https://bbs.archlinux.org/), [邮件列表](https://mailman.archlinux.org/mailman/listinfo/), [IRC](https://wiki.archlinux.org/index.php/IRC_channels "IRC channels") 中给其它用户提供技术支持. Arch Linux 是全球很多用户的选择，已经有很多 [国际社区](https://wiki.archlinux.org/index.php/International_communities "International communities")提供帮助和文档翻译。
> —— 以上内容来自 [《 ArchWiki 简介》](https://wiki.archlinux.org/index.php/Arch_Linux_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87))

## 安装
### 目的
在 VMware 的环境下安装 ArchLinux，以及 GUI。
### 准备阶段
在开始安装系统之前，我们需要准备这么几样东西。
- Vmware
- [ArchLinux 镜像](https://mirror.tuna.tsinghua.edu.cn/archlinux/iso/)
- [官方安装向导](https://wiki.archlinux.org/index.php/Installation_guide_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87))
- (可选) 安装小视频 [Bilibili](https://www.bilibili.com/video/av12933746/) 
### 创建虚拟机
创建一个 Linux 虚拟机，选择其他 Linux x64 3.6内核，分配至少 1G 内存以及 8G 存储空间。
将刚才下好的镜像添加到光驱中。
### 网络
等待系统进入命令行后，首先检测网络。
```shell
ping www.baidu.com
# 可以换为你自己所在地区稳定链接的网站
```
然后更新系统时间。
```shell 
timedatectl set-ntp true
```
### 分区
通常 Linux 系统需要一个引导 Boot 分区，一个主分区，一个 Swap 分区，一个 home (用户)分区，(可选) var 分区。
顺便讲讲各个分区的作用:

- 引导分区：用于引导系统启动，加载内核能操作，独立分区可以方便多系统引导等。
- 主分区：系统文件主要存放的地方，一般操作都需要 root 权限。
- Swap 分区：类似于虚拟内存，如果个人电脑内存足够大 8G 以上，不需要虚拟内存，如果多于 4G 小于 8G ，和内存保持 1 比 1 ，如果小于 4G ，和内存保持 1 比 2 较好。当然也可以不使用此分区。
- home 分区：通常用于存储个人数据，单独分出来主要是为了。
    1. 系统重装或崩溃后，不会影响该分区的数据。
    2. 长时间使用必然会有很多零碎文件产生，可能导致 ArchLinux 无法滚动更新等等。
    3. 分区单独加密。
- var 分区：用于存放系统日志，各种应用的日志，当你系统 boom 了之后，还可以通过查看日志来分析 boom 原因，又或者日志填满了 var 分区，也不会影响主分区的空间。
- - - - -
本次由于是安装在 Vmware 中，分一个主分区就好了。
```shell
fdisk /dev/sdX # 将 X 更换为你的磁盘
```
使用 fdisk ([教程](https://wiki.archlinux.org/index.php/Fdisk_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)))一顿操作，最终得到你想要的分区结果。
那么怎么查看是不是真的操作对了呢。
```bash
lsblk # 可以查看磁盘分区以及挂载信息
```
接下来格式化分区就好了
```bash
mkfs.ext4 /dev/sdX1 #通常除了 Boot 分区和 Swap 分区需要特殊处理，其他分区都使用 ext4 文件系统。
```
## 安装
### 更换镜像
修改文件 `/etc/pacman.d/mirrorlist`
```shell
# 这行代码可以快速选出所有中国镜像
awk '/^## China$/ {f=1} f==0 {next} /^$/ {exit} {print substr($0, 2)}' \
    /etc/pacman.d/mirrorlist.pacnew
```
### 挂载磁盘
```bash 
mount /dev/sdX1 /mnt
```
### 安装系统
```bash
pacstrap /mnt base base-devel vim zsh git # 顺便安装一些常用工具
```
## 配置
### Fstab
Fstab 定义了存储设备和分区整合系统的方式。详情可见 [Wiki](https://en.wikipedia.org/wiki/Fstab)
```bash
genfstab -L /mnt >> /met/etc/fstab
```
### Chroot
```shell
arch-chroot /mnt # 使用 Arch Chroot 进入刚安装的白板系统
```
### 时区
```bash 
ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime # 设置时区为上海
hwclock --systohc --utc # 同步时钟
```
### 本地化
只使用英文 tty 避免报错的时候全是方块或者不能识别的的奇妙符号。
```bash
echo 'en_US.UTF-8 UTF-8' >> /etc/locale.gen
echo 'zh_CN.UTF-8 UTF-8' >> /etc/locale.gen
locale-gen
echo LANG=en_US.UTF-8 > /etc/locale.conf
```
### Hostname
设置主机名称
要设置 `hostname`，将其添加 到 `/etc/hostname`,`myhostname` 是需要的主机名
```bash
echo myhostname > /etc/hostname
```
### Dhcp 服务
这个关系到装好之后能否**上网**，由于 Vmware 不需要无限  WiFi 什么的所以这里只有有限安装。
WiFi 驱动安装见这里
```bash
ip link # 查看你的网卡
systemctl enable dhcpd@ens33 # ens33 通常是你非 lo 的另外一个，可能与我的不一样。
```
### 设置密码
```bash
passwd
```
### 添加用户
```bash 
useradd -m username # 创建用户的同时创建 Home 目录
passwd username # 设置用户密码
```
### 重启
```bash
exit
umount -R /mnt
reboot
```
- - - - -
那么系统安装就告一段落了，如果还是不理解可以看下面的这段视频。（配音很尴尬。。）
<embed height="415" width="544" quality="high" allowfullscreen="true" type="application/x-shockwave-flash" src="//static.hdslb.com/miniloader.swf" flashvars="aid=12933746&page=1" pluginspage="//www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash"></embed>
## 未完待续
下次将会更新 ArchLinux 安装的 GUI 部分
