---
title: "KMP 算法"
date: 2018-05-11T14:32:26+08:00
draft: false
tags: [KMP,Python]
categories: "算法"
---

> 在计算机科学中，Knuth-Morris-Pratt字符串查找算法（简称为KMP算法）可在一个主文本字符串S内查找一个词W的出现位置。此算法通过运用对这个词在不匹配时本身就包含足够的信息来确定下一个匹配将在哪里开始的发现，从而避免重新检查先前匹配的字符。

<!--more-->

> 这个算法是由高德纳（Donald Ervin Knuth）和沃恩·普拉特在1974年构思，同年詹姆斯·H·莫里斯也独立地设计出该算法，最终由三人于1977年联合发表。
## 原理
将待匹配字符串命名为 m 源字符串命名为 S 。
本算法对待匹配字符串做处理之后，找到他的真前缀和真后缀。并通过真前缀与后缀重合的数量的值，这个值是在匹配状态中发生矢配时，位于原始字符串上 S 的指针移动的方向与距离。

简单的说就是匹配失败时。通过之前的真前缀和后缀表，直接移动在匹配字符串上的指针，达到减少无用匹配的效果。

## 优点
节约时间，相比于朴素的匹配方式，新的匹配算法只需要 O(m + n)的时间复杂度 和 额外 O(m)的空间，这个空间是用来保存真前缀和真后缀的结果的。

## 实现
KMP 匹配的关键在于初始化匹配字符串。

```python
def partial_table(pattern:str):
    """
    当字符串长度为1的时候，不需要进行查表，直接循环匹配时间复杂度就是 O(n)
    """
    front = [pattern[:x+1] for x in range(len(pattern))]

    def cal_table_val(sub_pattern):
        return max([0]+[len(front[:i]) for i in range(len(sub_pattern)) if sub_pattern[-i:] in front[:i]])

    return [cal_table_val(pattern[:i + 1]) for i in range(len(pattern))]


def kmp(pattern, string, first=True):
    if not pattern or not string:
        return -1
    
    res = []
    # 匹配字符串长度为1 不需要建表
    if len(pattern) == 1:
        for i, k in enumerate(string):
            if k == pattern:
                if first:
                    return i
                res.append(i)
        return res

    pt = partial_table(pattern)
    i, j = 0, 0
    lp, ls = len(pattern), len(string)
    compile_flag = False
    while j - i < ls - lp:
        if string[j] == pattern[i]:
            i += 1
            j += 1          
            compile_flag = True
            if i == len(pattern):
                if first:
                    return j - i
                res.append(j - i)
                i = 0
        elif string[j] != pattern[i] and compile_flag:
            # 之前为匹配状态 需要移动匹配数组指针
            compile_flag = False
            i -= i - pt[i-1]
        elif string[j] != pattern[i] and not compile_flag:
            # 之前为不匹配状态 匹配指针归 0 
            i = 0
            j += 1

    return res

partial_table('ABCDABD') # [0, 0, 0, 0, 1, 2, 0]
kmp('ABCDABD','BBC ABCDAB ABCDABCDABDE') # 15


```


