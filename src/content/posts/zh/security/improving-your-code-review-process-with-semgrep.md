---
title: 用 Semgrep 改进你的代码审查流程
date: 2022-12-13T20:55:03+08:00
description: 用于自动执行代码分析和实施安全最佳实践的工具，帮助开发人员更快地编写更好的代码。
draft: false
cover: https://img.eindex.me/img/0ec861d94c82a9e7fe57880e0f25a2dd.png
tags:
  - semgrep
  - sast
  - best-practices
  - static-analysis
  - security
  - devops
  - devsecops
  - ci
  - code-review
  - build-security-in
series: infosec
---

在这篇文章中，我将向你展示如何为你的项目设置 Semgrep，给出它能检测到的常见代码问题的例子，并提供在代码审查中使用 Semgrep 的最佳实践。到最后，你会对 Semgrep 如何改善你的代码审查过程，使你的代码更加安全、可靠和可维护有更好的了解。

## 介绍 Semgrep 以及为什么它对代码审查有用

代码审查是 SDLC (软件开发生命周期)的一个重要组成部分。它有助于确保代码的正确性、可维护性、安全性，并遵循约定的标准和惯例。然而，手动代码审查可能很耗时，而且容易出错，特别是对于有许多贡献者或长时间历史的大型代码库。

![Semgrep compare with AST and regex](https://img.eindex.me/img/e23bd0bbaf9d2513d3d26042b1aa702b.png)

Semgrep，是一个静态分析代码和检测常见问题的工具。Semgrep 在分析友好的 IR(中间语言)上运行大部分语言无关的分析，并通过 AST(抽象语法树)树进行翻译。这个过程不会像 CodeQL 那样通过你的编译项目产生 AST 树。所以 semgrep 可以快速而简单地运行，创建规则来发现和修复你的代码中的常见问题，如安全漏洞、逻辑错误和样式违规。

## 为你的项目设置 Semgrep

要使用 Semgrep，你需要在你的系统中安装 semgrep 命令行工具。安装过程因你的操作系统和软件包管理器而异，但一般来说，你可以使用以下命令。

```bash
pip install semgrep
```

一旦你安装了 Semgrep，你可以用它来扫描你的代码库，寻找特定的模式。例如，下面的命令将搜索 strcpy 函数的实例，它被认为是不安全的，不应该被使用。

```bash
semgrep --config p/python --pattern 'strcpy(x, y)' path/to/code
```

`--config`选项指定了用于扫描的配置，而`--pattern`选项指定了要匹配的规则。在本例中，我使用`p/python`配置，其中包括检测 Python 代码中常见问题的规则，我正在寻找 strcpy 函数的出现。

你也可以在 Semgrep 注册表上找到更多的规则，Semgrep 社区提供了很多开源的规则，[链接到注册表](https://semgrep.dev/explore)。

一旦你设置了 Semgrep 并运行了扫描，你就可以利用扫描结果来识别和修复你的代码中的潜在问题。这可以在代码审查过程中节省时间和精力，因为它允许你在团队审查之前自动检测和解决常见的问题。

## Semgrep 可以检测的常见代码问题的例子

Semgrep 可以检测到各种各样的代码问题，这取决于你使用的配置和规则。下面是一些 Semgrep 可以帮助你发现和修复的常见代码问题的例子。

- 安全漏洞，如[SQL 注入](https://semgrep.dev/p/sql-injection)和[跨站脚本(XSS)](https://semgrep.dev/p/xss)漏洞，或者你可以使用[OWASP Top 10](https://semgrep.dev/p/owasp-top-ten)规则集来处理常见的网络安全漏洞。
- 废弃的或不安全的 API 使用，如 C 语言中 strcpy 的使用或 JavaScript 中 eval 的使用。
- 错误配置，如[dockerfile](https://semgrep.dev/p/dockerfile)、[docker-compose](https://semgrep.dev/p/docker-compose) 设置。
- 硬编码的秘密，如[secret](https://semgrep.dev/p/secrets)规则集。
- 违反风格，如不一致的缩进，未使用的变量，捕捉默认问题和过于复杂的表达式
- 权限问题，如忘记添加权限检查。需要编写自定义规则。

通过使用 Semgrep 来检测这些问题，你可以防止代码中的错误和安全风险，提高其整体质量。这可以节省代码审查时的时间和精力，因为它可以让你专注于更高层次的设计和架构问题，而不是捕捉低级错误。

在下一节中，我将分享我在代码审查中使用 Semgrep 时的一些最佳实践。

或者创建你自己的配置和规则来为你的项目定制 Semgrep。欲了解更多信息，请参阅 Semgrep 文档，[链接到文档](https://semgrep.dev/docs/writing-rules/overview/)。

## 在代码审查中使用 Semgrep 的最佳实践

为了在代码审查中最大限度地发挥 Semgrep 的作用，你应该遵循这些最佳实践：

### 如何将 Semgrep 集成到你的代码审查工作流程中去

- 将 Semgrep 设置为持续集成（CI）管道的一部分，使其自动运行于每一个代码变更。这可以帮助你及早发现潜在的问题，防止它们被合并到主代码库中。
- 将 Semgrep 的输出作为代码审查工具的输入，如 GitHub Pull Requests 或 Gerrit。这可以帮助你快速识别和解决 Semgrep 所检测到的问题。
- 使用 Semgrep 作为你的团队的代码审查标准和指导方针的一部分。这可以帮助你的团队成员了解对代码质量的期望，避免常见的陷阱。
- 开始为你的项目编写成本管理规则。这将为你的代码库建立团队知识库，新的团队成员可以很容易和快速地知道原因，并避免问题。

### 如何编写有效的 Semgrep 规则

- 保持你的规则简单而专注：避免使用复杂的正则表达式或过于广泛的匹配模式。
- 使用具体的例子来说明规则应该匹配的代码和不应该匹配的代码。这可以帮助你和其他人理解规则，避免假阳性或假阴性。
- 在代码审查中使用你的规则之前，先在你的代码库的代表性样本上测试你的规则。这可以帮助你对规则进行微调，并确保它们按预期工作。
- 如果可以的话，提供修复建议或直接使用规则中的修复字段来节省时间。
- 记录你的规则并与你的团队分享。这可以帮助其他人理解规则背后的理由，并提高你的代码库的一致性。

通过遵循这些最佳实践，你可以使 Semgrep 成为你的代码审查过程的一个组成部分，并提高你的代码的整体质量。在下一节中，我将讨论一些提示和技巧，以获得 Semgrep 的最大效益。

## 使用 Semgrep 的技巧和窍门

为了充分利用 Semgrep，这里有一些你可以使用的技巧和窍门。

- 使用`--severity`选项，根据 Semgrep 检测到的问题的严重程度过滤输出。这可以帮助你首先专注于最重要或最关键的问题。
- 使用`--metrics off`或设置环境变量`SEMGREP_SEND_METRICS=off`，如果你不想向 Semgrep 服务器发送任何信息，避免信息暴露。
- 使用`--json`、`--junit-xml`或`--sarif`作为输出，可以很容易地整合你的工作流程。
- 使用`--autofix`与简单的代码风格规则集作为 lint，在你的团队成员的 pre-commit hook 中运行它。

通过使用这些技巧和窍门，你可以定制 Semgrep 以适应你的特定需求和工作流程，并从中获得更多的价值。在下一节也就是最后一节，我将讨论用 Semgrep 改进你的代码审查过程的结论和下一步措施。

## 结论和下一步措施

在这篇文章中，我已经向你展示了如何使用 Semgrep 来改善你的代码审查过程。我讨论了使用 Semgrep 的好处，设置它的步骤，它可以检测的代码问题的类型，以及在代码审查中使用它的最佳实践。我还提供了一些使用 Semgrep 的技巧和窍门，使其发挥最大作用。

通过在你的代码审查过程中使用 Semgrep，你可以节省时间和精力，提高代码的质量，并防止错误和安全风险。如果你想了解更多关于 Semgrep 以及它如何帮助你，这里有一些你可以采取的下一步措施。

- 阅读 Semgrep 文档，了解更多关于 Semgrep 的特点和功能，[链接到文档](https://semgrep.dev/docs/)。
- 在你自己的代码库中试用 Semgrep，看看它是如何工作的，能找到什么。
- 在正式的教程中学习如何编写 Semgrep 规则，[链接到学习中心](https://semgrep.dev/learn)。
- 加入 Semgrep 社区，提出问题，分享经验，并为 Semgrep 的发展做出贡献，[Slack](https://r2c.dev/slack)，[Twitter](https://twitter.com/r2cdev)。

我希望这篇文章对你有所帮助，并希望你能考虑在你的代码审查过程中使用 Semgrep。
祝您编码愉快！
