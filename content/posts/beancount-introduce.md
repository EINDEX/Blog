---
title: "复式记账工具 Beancount"
date: 2019-11-30T00:00:00+08:00
draft: false
categories: "投资"
tags: [Beancount]
---

本文简单介绍一下复式记账和 Beancount 的使用方法。

<!--more-->

## 为什么要记账
记账是理财的第一步，熟话说得好：”你不理财，才不理你。“

记账可以明确自己每一笔钱花在哪去了，这个月最大的开销是什么，以及对自己的冲动消费、不必要消费能有一个反思。

我曾使用过很多记账软件如：挖财、随手记、网易有钱、MoneyWiz、MOZE 等，其实记账最大的问题在于很难坚持下来，因为短期来看记账的收益并不高，而从长远来看，账本也能体现经济的健康状况。

## 复式记账是什么
复式记账（Double Entry Bookkeeping）是以资产与权益平衡关系作为记账基础，对每一笔账单，都要以相等的金额在两个相互联系的账户中进行记录。

原理：
`资产 = 负债 + 所有者权益`

复式记账的优点是：
- 账户对应关系清楚，可以鲜明的表示各种经济活动的来龙去脉。
- 有借必有贷，借贷必相等的记账方式，对于检查账单是否记对非常有帮助。

## 何为 Beancount

Beancount 是一个用 Python 实现的开源复式记账软件。

数据文件基于纯文本，所以不用担心程序出问题，数据没法看懂。

Beancount（fava）的界面大概是这个样子。
![-w2638](media/15676038764861/15676114899083.jpg)
![-w1319](media/15676038764861/15676115071325.jpg)


Beancount 的优点：
1. 开源，可以自己写功能。
2. 数据基于纯文本，自己掌握所有数据，不担心隐私泄露。
3. 支持各种图标，支持SQL查询生成报表。
4. 支持预算（fava）。
5. 支持无限账本、无限账户、无限币种。
6. 可以导入各种账单文件（有些需要写代码支持）。
7. 可以用 Git、iCloud 等工具来管理账本。

不仅如此，Beancount 还可以量化年假，产假等等非标准金融标的。

例如讲公司年假记为一笔收入，从公司账户转入到个人账户，成为资产。使用掉年假，则把年假从个人资产转出到消费即可。这样就相当于把年假消费掉了。而年假的货币单位可以设置成 Day。

写在 Beancount 里大概是这个样子。

```beancount
2019-04-24 * "CompanyName" "请假一天休息"
  Assets:Leave                              -1.00 DAY
  Expenses:Health

2019-04-01 * "CompanyName" "年假-初始化"
  Income:Job:CompanyName:Leave
  Assets:Leave                                 +7.00 DAY
```


## 基本语法


### 基本格式

```
YYYY-MM-DD <directive> <arguments...>
```

### 创建货币

```
option "operating_currency" "CNY"
```


### 账户相关

创建账户
```
1970-01-01 open Assets:Bank:ABC CNY
```

备注账户
```
1970-01-01 note Assets:Bank:ABC "农行卡"
```

关闭帐户，账户关闭后就可以在现实界面上过滤掉已经关闭的账户。
```
1970-01-02 close Assets:Bank:ABC
```


### 交易

这是单笔简单交易的写法，表示我去美食风暴用微信支付吃了个盒饭。
```
2019-08-02 * "美食风暴" "盒饭"
  Assets:Wechat:EINDEX                                  -18 CNY
  Expenses:Food:Restaurant:Lunch       
```


### 设置价格

可以这是各种“货币”之间的价格转换。如果用上程序员思维，我们就可以实现股票价格跟踪、汇率跟踪等等。来提高账本的准确度。
```
2019-10-01 price USD 7 CNY
```


### 余额自动设置

这是一个偷懒必备功能，下面的 `pad`，我农行卡自动平账使用`Equity:Opening-Balances`，明天的 `balance` 表示在 2019年10月02日时这张卡的余额为4000CNY，如果旧的账单不平就会从`Equity:Opening-Balances`自动平账。

```
2019-10-01 pad Assets:Bank:ABC Equity:Opening-Balances

2019-10-02 balance Assets:Bank:ABC 4000 CNY
```

如果未来要在这个账户过去的账目上做删改，2019年10月1日的余额也会是4000元不变。

## 使用 Beancount

首先需要安装 Python 3，然后安装 beancount、fava。

```
pip install beancount fava
```

`fava` 是 beancount 的一个 WebUI 实现，可以可视化的看见自己的账本。


### Example

官方提供了一个 Beancount 的使用用例。
```
bean-example > example.bean
fava example.bean
```
然后打开 `localhost:5000` 就可以在本地体验 Beancount 与 fava 了。

![-w1315](media/15676038764861/15676114399432.jpg)

