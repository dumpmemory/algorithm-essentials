---
title: Binary Tree Level Order Traversal II
---

### 描述

Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree `{3,9,20,#,#,15,7}`,

```
    3
   / \
  9  20
    /  \
   15   7
```

return its bottom-up level order traversal as:

```
[
  [15,7]
  [9,20],
  [3],
]
```

### 分析

在上一题 [Binary Tree Level Order Traversal](binary-tree-level-order-traversal.md) 的基础上，`reverse()`一下即可。

### 代码

#### 迭代版

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs
defaultValue="python"
values={[
{ label: 'Python', value: 'python', },
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Binary Tree Level Order Traversal II
// 迭代版，时间复杂度O(n)，空间复杂度O(1)
public class Solution {
    public List<List<Integer>> levelOrderBottom(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();
        Queue<TreeNode> current = new LinkedList<>();
        Queue<TreeNode> next = new LinkedList<>();

        if(root == null) {
            return result;
        } else {
            current.offer(root);
        }

        while (!current.isEmpty()) {
            ArrayList<Integer> level = new ArrayList<>(); // elments in one level
            while (!current.isEmpty()) {
                TreeNode node = current.poll();
                level.add(node.val);
                if (node.left != null) next.add(node.left);
                if (node.right != null) next.add(node.right);
            }
            result.add(level);
            // swap
            Queue<TreeNode> tmp = current;
            current = next;
            next = tmp;
        }
        Collections.reverse(result);
        return result;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Binary Tree Level Order Traversal II
// 迭代版，时间复杂度O(n)，空间复杂度O(1)
class Solution {
public:
    vector<vector<int> > levelOrderBottom(TreeNode *root) {
        vector<vector<int> > result;
        if(root == nullptr) return result;

        queue<TreeNode*> current, next;
        vector<int> level; // elments in level level

        current.push(root);
        while (!current.empty()) {
            while (!current.empty()) {
                TreeNode* node = current.front();
                current.pop();
                level.push_back(node->val);
                if (node->left != nullptr) next.push(node->left);
                if (node->right != nullptr) next.push(node->right);
            }
            result.push_back(level);
            level.clear();
            swap(next, current);
        }
        reverse(result.begin(), result.end()); // 比上一题多此一行
        return result;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# Binary Tree Level Order Traversal II
# 迭代版，时间复杂度O(n)，空间复杂度O(1)
def levelOrderBottom(root):
    result = []
    current = []
    next_queue = []

    if not root:
        return result
    else:
        current.append(root)

    while current:
        level = [] # elments in one level
        while current:
            node = current.pop(0)
            level.append(node.val)
            if node.left:
                next_queue.append(node.left)
            if node.right:
                next_queue.append(node.right)
        result.append(level)
        # swap
        current = next_queue
        next_queue = []

    return result[::-1]
```

</TabItem>
</Tabs>

#### 递归版

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Binary Tree Level Order Traversal II
// 递归版，时间复杂度O(n)，空间复杂度O(n)
public class Solution {
    public List<List<Integer>> levelOrderBottom(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();
        traverse(root, 1, result);
        Collections.reverse(result);
        return result;
    }

    void traverse(TreeNode root, int level,
                  List<List<Integer>> result) {
        if (root == null) return;

        if (level > result.size())
            result.add(new ArrayList<>());

        result.get(level-1).add(root.val);
        traverse(root.left, level+1, result);
        traverse(root.right, level+1, result);
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Binary Tree Level Order Traversal II
// 递归版，时间复杂度O(n)，空间复杂度O(n)
class Solution {
public:
    vector<vector<int> > levelOrderBottom(TreeNode *root) {
        vector<vector<int>> result;
        traverse(root, 1, result);
        std::reverse(result.begin(), result.end()); // 比上一题多此一行
        return result;
    }

    void traverse(TreeNode *root, size_t level, vector<vector<int>> &result) {
        if (!root) return;

        if (level > result.size())
            result.push_back(vector<int>());

        result[level-1].push_back(root->val);
        traverse(root->left, level+1, result);
        traverse(root->right, level+1, result);
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Binary Tree Level Order Traversal II
# 递归版，时间复杂度O(n)，空间复杂度O(n)
class Solution:
    def levelOrderBottom(self, root):
        result = []
        self.traverse(root, 1, result)
        result.reverse()
        return result

    def traverse(self, root, level, result):
        if not root:
            return

        if level > len(result):
            result.append([])

        result[level-1].append(root.val)
        self.traverse(root.left, level+1, result)
        self.traverse(root.right, level+1, result)
```

</TabItem>
</Tabs>

### 相关题目

- [Binary Tree Level Order Traversal](binary-tree-level-order-traversal.md)
- [Binary Tree Zigzag Level Order Traversal](binary-tree-zigzag-level-order-traversal.md)
