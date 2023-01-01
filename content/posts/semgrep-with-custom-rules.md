---
<<<<<<< HEAD:content/posts/semgrep-with-custom-rules.md
title: Improving Code Review with Semgrep Custom Rules
=======
title: How to use Semgrep in code review process
>>>>>>> parent of 4d9cece (write: release semgrep custom rules):content/posts/semgrep-in-workflow.md
date: 2022-12-14T14:14:56+08:00
description: "This post share some actual usecases for Semgrep in code review process"
draft: true
template: posts/page.html
taxonomies:
    tags: ["Semgrep"]
    series: ["security"]
extra:
    posse: 
        twitter: true
        mastodon: true
---

This post about how Semgrep actually work with your workflow, If you don't know about Semgrep, please check another blog, which talk about what is semgrep and why you should starting using it, [Improving Your Code Review Process With Semgrep](@/posts/improving-your-code-review-process-with-semgrep.md)

<!-- more -->

## Codereview and Semgrep

在大多数情况下，开发团队都会有一个代码交付的生命周期，在这个生命周期是由设计、开发、测试、上线的四个主要流程来组成的。

在开发结束准备开始测试之前，在敏捷开发背景下我们会做一定程度上的代码审查，不同的公司，不同的团队做代码审查的侧重点都是不同的，所以这并没有一个统一的标准。

但 Semgrep 是一个很神奇的工具，就我前文所提到，这个工具可以为 Code review 节省时间与精力。

这个文章会介绍几个不同的使用 Semgrep 加速 code review 过程的等级, 等级的创建一句是依照 BSIMM 所提出的 Code Review 成熟度。
https://www.bsimm.com/framework/software-security-development-lifecycle/code-review.html

## Level 1: Beginning to use Semgrep

[CR1.4: 107] Use automated review tools.

在level1， 团队可能刚刚开始使用semgrep 工具，接触并熟悉这个工具


## Level 2: Integrate with Workflow


## Level 3: Starting to create and mantance Custom rules.
[CR2.6: 28] Use custom rules with automated code review tools.


## Level 4: Evevy one intergate tool in localy and running it as pre-commit checker.
[CR3.3: 8] Create capability to eradicate bugs.