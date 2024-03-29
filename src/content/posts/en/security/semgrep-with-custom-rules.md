---
title: Code Review with Semgrep Custom Rules
date: 2022-12-14T14:14:56+08:00
description: "Improve code reviews with Semgrep: enforce standards, detect vulnerabilities, and enhance code quality. Integrate Semgrep for better code before release."
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

In this post, we will discuss how Semgrep can be integrated into your code review process. If you are unfamiliar with Semgrep, we recommend checking out our previous article on the topic, titled "[Improving Your Code Review Process With Semgrep](/en/posts/improving-your-code-review-process-with-semgrep)".

## Codereview and Semgrep

Code review is a crucial step in the software development workflow, as it allows team members to review and critique each other's code.

However, code review can sometimes be a source of contention, with debates over code style or disagreements over team coding standards.

Additionally, there may be cases where the team lacks domain expertise, leading to the inclusion of vulnerabilities in the code. Semgrep can help address these issues by promoting consistent coding practices and identifying potential vulnerabilities.

Let's take a closer look at how Semgrep can be utilized in the code review process.

## Cases

In this section, we will examine three cases where Semgrep custom rules can be utilized to improve code quality.

Case 1: Preventing the use of `System.out` in Java. It is not uncommon for team members to use `System.out` for logging or debugging purposes. However, this practice can be problematic. The following custom rule can help address this issue:

```yaml
rules:
  - id: logging-via-system-out
    pattern: System.out.$PRINT($ARG);
    message: Using system out as logging method.
    languages: [java]
    severity: WARNING
```

If your team has established logging standards, the `fix` function can be used to automatically replace instances of `System.out` with a preferred logging method. For example:

```yaml
rules:
  - id: logging-via-system-out
    pattern: System.out.$PRINT($ARG);
    message: Using system out as logging method.
    fix: log.info($ALG)
    languages: [java]
    severity: WARNING
```

Case 2: Disallowing system calls. In some situations, it may be desirable to prohibit system commands in order to protect the user's device or cloud machine. The following custom rule can be used to detect and prevent the execution of system commands:

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
    message: RCE risk from user input.
    languages: [java]
    severity: ERROR
```

Case 3: Ensuring that all request mappings have authentication checks. It is important to ensure that all request mappings have proper permission checks in place. The following custom rule can be used to identify instances where these checks are missing:

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
    message: Should check user permission on all request mapping
    languages: [java]
    severity: WARNING
```

## Summarize

This article has discussed how Semgrep can be integrated into the code review process to improve code quality and consistency.

By using custom rules, Semgrep can enforce team coding standards and detect potential vulnerabilities in the code.

By incorporating Semgrep into the code review workflow, teams can more effectively identify and address issues before code is released to production.
