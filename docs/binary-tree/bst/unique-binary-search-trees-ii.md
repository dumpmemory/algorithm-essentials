---
title: Unique Binary Search Trees II
---

### 描述

Given `n`, generate all structurally unique BST's (binary search trees) that store values 1...n.

For example,
Given `n = 3`, your program should return all 5 unique BST's shown below.

```
   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
```

### 分析

见前面一题。

### 代码

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
// Unique Binary Search Trees II
// 时间复杂度TODO，空间复杂度TODO
public class Solution {
    public List<TreeNode> generateTrees(int n) {
        if (n == 0) return new ArrayList<>();
        return generate(1, n);
    }
    private static List<TreeNode > generate(int start, int end) {
        List<TreeNode> subTree = new ArrayList<>();
        if (start > end) {
            subTree.add(null);
            return subTree;
        }
        for (int k = start; k <= end; k++) {
            List<TreeNode> leftSubs = generate(start, k - 1);
            List<TreeNode> rightSubs = generate(k + 1, end);
            for (TreeNode i : leftSubs) {
                for (TreeNode j : rightSubs) {
                    TreeNode node = new TreeNode(k);
                    node.left = i;
                    node.right = j;
                    subTree.add(node);
                }
            }
        }
        return subTree;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Unique Binary Search Trees II
// 时间复杂度TODO，空间复杂度TODO
class Solution {
public:
    vector<TreeNode *> generateTrees(int n) {
        if (n == 0) return vector<TreeNode*>();
        return generate(1, n);
    }
private:
    vector<TreeNode *> generate(int start, int end) {
        vector<TreeNode*> subTree;
        if (start > end) {
            subTree.push_back(nullptr);
            return subTree;
        }
        for (int k = start; k <= end; k++) {
            vector<TreeNode*> leftSubs = generate(start, k - 1);
            vector<TreeNode*> rightSubs = generate(k + 1, end);
            for (auto i : leftSubs) {
                for (auto j : rightSubs) {
                    TreeNode *node = new TreeNode(k);
                    node->left = i;
                    node->right = j;
                    subTree.push_back(node);
                }
            }
        }
        return subTree;
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Unique Binary Search Trees II
# 时间复杂度TODO，空间复杂度TODO
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def generateTrees(self, n: int) -> list[TreeNode]:
        if n == 0:
            return []
        return self.generate(1, n)

    def generate(self, start: int, end: int) -> list[TreeNode]:
        subTree = []
        if start > end:
            subTree.append(None)
            return subTree
        for k in range(start, end + 1):
            leftSubs = self.generate(start, k - 1)
            rightSubs = self.generate(k + 1, end)
            for i in leftSubs:
                for j in rightSubs:
                    node = TreeNode(k)
                    node.left = i
                    node.right = j
                    subTree.append(node)
        return subTree
```

</TabItem>
</Tabs>

### 相关题目

- [Unique Binary Search Trees](unique-binary-search-trees.md)
