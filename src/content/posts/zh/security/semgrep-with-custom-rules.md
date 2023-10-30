---
title: 使用 Semgrep 自定义规则进行代码审查
date: 2022-12-14T14:14:56+08:00
description: 使用 Semgrep 改进代码审查：强制执行标准，检测漏洞，提高代码质量。在发布代码之前集成 Semgrep 以识别和解决问题。
draft: false
tags:
  - code-review
  - semgrep
  - code-quality
  - coding-standards
  - security
  - vulnerability-detection
  - software-quality
  - sdlc
  - best-practices
series: infosec
---
在本文中，我们将讨论如何将 Semgrep 集成到您的代码审查流程中。如果您对 Semgrep 不熟悉，我们建议您查看我们关于该主题的先前文章，标题为“[使用 Semgrep 改善代码审查流程](/zh/posts/improving-your-code-review-process-with-semgrep/)”。

## 代码审查和 Semgrep

代码审查是软件开发工作流程中的关键步骤，它允许团队成员对彼此的代码进行审查和批评。

然而，代码审查有时可能引发争议，例如关于代码风格的争论或团队编码标准的不一致。

此外，团队可能缺乏领域专业知识，导致代码中存在漏洞。Semgrep 可以通过促进一致的编码实践和识别潜在漏洞来解决这些问题。

让我们更详细地了解如何在代码审查流程中使用 Semgrep。

## 案例

在本节中，我们将探讨三个案例，其中 Semgrep 自定义规则可以用于提高代码质量。

案例 1：禁止在 Java 中使用 `System.out`。团队成员常常会使用 `System.out` 进行日志记录或调试。然而，这种做法可能会引发问题。以下自定义规则可以帮助解决此问题：

```yaml
rules:
  - id: logging-via-system-out
    pattern: System.out.$PRINT($ARG);
    message: 使用 System.out 作为日志记录方法。
    languages: [java]
    severity: WARNING
```

如果您的团队已经建立了日志记录标准，可以使用 `fix` 函数自动替换 `System.out` 的实例为首选的日志记录方法。例如：

```yaml
rules:
  - id: logging-via-system-out
    pattern: System.out.$PRINT($ARG);
    message: 使用 System.out 作为日志记录方法。
    fix: log.info($ALG)
    languages: [java]
    severity: WARNING
```

案例 2：禁止系统调用。在某些情况下，禁止系统命令可能是有益的，以保护用户设备或云主机。以下自定义规则可用于检测和防止执行系统命令：

```yaml
rules:
  - id: java-rec-checker
    patterns:
      - pattern-inside: $FUN(...,$ARG,...){...}
      - pattern-either:
          - pattern: Runtime.getRuntime().exec(..., $ARG, ...);
          - patterns:
              - pattern: Process $PROCESS = Runtime.getRuntime();
              - pattern: $PROCESS.exec(..., $ARG, ...);
    message: 用户输入导致远程命令执行（RCE）风险。
    languages: [java]
    severity: ERROR
```

案例 3：确保所有请求映射都进行了身份验证检查。确保所有请求映射都有适当的权限检查非常重要。以下自定义规则可用于识别缺少这些检查的情况：

```yaml
rules:
  - id: vaild-permission-check-on-all-request-mapping
    patterns:
      - pattern-inside: |
          @$CONTROLLER_ANNOTATION
          public class $CONTROLLER {
            ...
          }
      - pattern: |
          @$MAPPING_ANNOTATION(...)
          public $RET $METHOD(...){...}
      - pattern-not: |
          @$MAPPING_ANNOTATION(...)
          @$PERMISSION_ANNOTATION(...)
          public $RET $METHOD(...){...}
      - metavariable-regex:
          metavariable: $CONTROLLER_ANNOTATION
          regex: (.*Controller$)
      - metavariable-regex:
          metavariable: $MAPPING_ANNOTATION
          regex: (.*Mapping$)
      - metavariable-regex:
          metavariable: $PERMISSION_ANNOTATION
          regex: (.*Permission$)
    message: 所有请求映射应进行用户权限检查。
    languages: [java]
    severity: WARNING
```

## 总结

本文讨论了如何将 Semgrep 集成到代码审查流程中，以提高代码质量和一致性。

通过使用自定义规则，Semgrep 可以强制执行团队编码标准并检测代码中的潜在漏洞。

通过将 Semgrep 纳入代码审查工作流程，团队可以更有效地在代码发布到生产环境之前识别和解决问题。