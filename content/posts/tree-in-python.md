---
title: "Tree in Python"
date: 2018-04-08T14:30:44+08:00
draft: false
tags: [Python]
categories: "算法"
---

树是计算机科学中常用的数据结构之一,常见的地方有，Java 的继承树等。
还有一些基于树的特殊数据结构，比如二叉树，B 树，等等。

本篇会讲述一些关于简单关于树的操作。

<!--more-->

## 树的定义
> 树（英语：tree）是一种抽象数据类型（ADT）或是实作这种抽象数据类型的数据结构，用来模拟具有树状结构性质的数据集合。它是由n（n>0）个有限节点组成一个具有层次关系的集合。把它叫做“树”是因为它看起来像一棵倒挂的树，也就是说它是根朝上，而叶朝下的。它具有以下的特点：

> - 每个节点有零个或多个子节点
> - 没有父节点的节点称为根节点
> - 每一个非根节点有且只有一个父节点
> - 除了根节点外，每个子节点可以分为多个不相交的子树

节选自 [树(数据结构)](https://zh.wikipedia.org/wiki/%E6%A0%91_(%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84))

## 定义数据结构
```python
class TreeNode(object):
    """
    一个树节点
    """

    def __init__(self, value, children: list = None):
        """

        :param value: 节点的值
        :param children: 节点的子节点，一个 TreeNode 的列表
        """

        self.value = value

        if not children:
            self.children = []
        elif not self.value:
            self.children = []
        else:
            self.children = children

class Tree(object):
    """
    树：基本树的数据结构
    """

    def __init__(self, root: TreeNode or None):
        """
        传入根节点
        :param root: 如果为 TreeNode 为根节点， 如果为 None 为空书
        """
        if not (root is None or isinstance(root, TreeNode)):
            raise AttributeError('illegal root')
        self.root = root
```

## 前序遍历
先遍历根节点。在遍历孩子节点。
![前序遍历](media/15231560956719/%E5%89%8D%E5%BA%8F%E9%81%8D%E5%8E%86.jpg)

### 循环版
```python
    def preorder_traversal_while(self):
        """
        树的前序遍历
        :return: list of tree node value
        """
        res = []
        if not self.root:
            return res
        stack = [self.root]

        while len(stack):
            node = stack.pop()
            if not node.value:
                continue
            for sub_node in node.children[::-1]:
                stack.append(sub_node)
            res.append(node.value)

        return res
```
### 递归版

```python
def preorder_traversal_recursion(self):
        """
        树的前序遍历
        :return: list of tree node value
        """
        res = []
        if not self.root:
            return res

        def _inner(root):
            inner_res = []
            if root.value:
                inner_res.append(root.value)
                for sub_node in root.children:
                    inner_res += _inner(sub_node)
            return inner_res
        return _inner(self.root)
```
## 后序遍历
先遍历孩子节点，最后遍历根节点。

![后序遍历](media/15231560956719/%E5%90%8E%E5%BA%8F%E9%81%8D%E5%8E%86.jpg)

### 循环版
```python
def postorder_traversal_while(self):
        """
        树的后序遍历
        :return: list of tree node value
        """
        res = []

        if not self.root:
            return res

        stack = [self.root]

        while len(stack):
            node = stack.pop()
            if not node.value:
                continue
            for sub_node in node.children:
                stack.append(sub_node)
            res.append(node.value)

        return res[::-1]
```
### 递归版
```python
   def postorder_traversal_recursion(self):
        """
        树的后序遍历
        :return: list of tree node value
        """
        res = []
        if not self.root:
            return res

        def _inner(root):
            inner_res = []
            if root.value:
                for sub_node in root.children:
                    inner_res += _inner(sub_node)
                inner_res.append(root.value)
            return inner_res

        return _inner(self.root)

```
## 层次遍历
按层遍历节点。
![层序遍历](media/15231560956719/%E5%B1%82%E5%BA%8F%E9%81%8D%E5%8E%86.jpg)

### 循环版
```python
def layer_while(self):
        """
        树的层序遍历
        :return: list of tree node value
        """
        res = []
        if not self.root:
            return res

        queue = Queue()
        queue.put(self.root)

        while queue.qsize():
            node = queue.get()
            if not node.value:
                continue
            res.append(node.value)
            for sub_node in node.children:
                queue.put(sub_node)
        return res
```
## 求树的深度
计算树的最大深度。

```python
 def depth_recursion(self):

        def _inner(root, depth=1):
            if not root.children:
                return depth
            return max([_inner(sub_node, depth+1) for sub_node in root.children])

        return _inner(self.root)
```
## 求树的结点数
计算树一共有多少节点。

```python
 def node_count(self):
        def _inner(root):
            if not root.children:
                return 1
            return 1 + sum([_inner(sub_node) for sub_node in root.children])
        return _inner(self.root)
```
## 求树的叶子数
计算书中有多少没有孩子的节点。

```python 
def leaf_count(self):
        def _inner(root):
            if not root.children:
                return 1
            return sum([_inner(sub_node) for sub_node in root.children])
        return _inner(self.root)
```
## 求两个结点的最低公共祖先结点
首先需要在树中找到两个结点。
保存找到两个节点的链表。
遍历两个链表的最长公共节点，就能找到最低的公共祖先节点。
![最低公共祖先节点](media/15231560956719/%E6%9C%80%E4%BD%8E%E5%85%AC%E5%85%B1%E7%A5%96%E5%85%88%E8%8A%82%E7%82%B9.jpg)

```python
def lowest_ancestor_node(self, node1, node2):
        stack = [self.root]
        stack1 = None
        stack2 = None

        while len(stack) and not (stack1 and stack2):
            node = stack.pop()

            if node is node1:
                stack1 = stack[:]
            if node is node2:
                stack2 = stack[:]
            if not node.value:
                continue
            for sub_node in node.children:
                stack.append(sub_node)

        res = self.root
        for i in range(len(stack1)):
            if stack1[i] == stack2[i]:
                res = stack1[i]
            else:
                return res.value

        return res.value
```

## 求任意两结点距离
首先需要在树中找到两个结点。
保存找到两个节点的链表。
在判断剩余的长度
![任意两节点距离](media/15231560956719/%E4%BB%BB%E6%84%8F%E4%B8%A4%E8%8A%82%E7%82%B9%E8%B7%9D%E7%A6%BB.jpg)

```python
def two_node_distence(self, node1, node2):
        stack = [self.root]
        stack1 = None
        stack2 = None

        while len(stack) and not (stack1 and stack2):
            node = stack.pop()

            if node is node1:
                stack1 = stack[:]
            if node is node2:
                stack2 = stack[:]
            if not node.value:
                continue
            for sub_node in node.children:
                stack.append(sub_node)

        res = self.root
        for i in range(len(stack1)):
            if stack1[i] == stack2[i]:
                res = stack1[i]
            else:
                return len(stack1) + len(stack2) - 2*i

        return len(stack1) + len(stack2) - 2*i

```

## 综述
以上就是和树有关联的简单代码。
以上代码也在 Github 上发布 [tree](https://github.com/EINDEX/Python-algorithm/blob/master/data_structure/tree/tree.py)， 如有差错，欢迎提交 Issue 或 PR。

## 更新
- 修复图片的 Bug