---
title: "Pipenv + Autoenv 更友善的工作环境"
date: 2018-09-05T14:22:34+08:00
draft: false
tags: [Python, Environment, Pipenv, Autoenv]
categories: "代码"
---

Python 包管理一直都是一个问题，如今 3.6 推荐采用 Pipenv 出自 Requests 的大牛做所。配合上他写的 Autoenv 切换环境再也不是问题。

<!--more-->

## 安装

### MacOS

``` bash
brew install pipenv
brew install autoenv
```
其他平台自行 Google。

## Pipenv
pipenv 在安装之后会在当前目录上生成一个 Pipfile ，这个文件不在是像 requestments.txt 那样的纯粹的文本结构，加入了一些配置内容。

比如说可以配置使用的 pipy 源，Python 版本号，以及包管理。
Pipenv 的包管理比其他的有点在于可以直接在配置文件中指定 正式运行 packages 和 开发环境中的 packages，管理一个文件比管理多个版本文件的好处不言而喻。

同时 pip 加入了 pip install -p Pipfile 来支持 Pipenv，官方都支持了，我们还等什么，用用用。

具体内容详见官方 [Github](https://github.com/pypa/pipenv)。

## Autoenv
既然 Pipenv 都这么强大了，自然会导致虚拟环境满天飞，不方便进入虚拟环境的时候怎么办。
这个时候就需要 Autoenv 登场了。

### 配置(MacOS)

```bash
echo "source $(brew --prefix autoenv)/activate.sh" >> ~/.bash_profile
```

他能在进入一个文件目录的时候自动进入虚拟环境，当然前提是你需要将虚拟环境路径加入`.env`文件，并将这个文件放在项目根目录下，这样在进入目录时会自动切入到环境中。

节约时间与生命，Python 大法好！

