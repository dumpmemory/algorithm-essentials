---
title: Unique Paths
---

### 描述

A robot is located at the top-left corner of a `m × n` grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

![Above is a `3 × 7` grid. How many possible unique paths are there?](/img/robot-maze.png)

**Note**: `m` and `n` will be at most 100.

### 深搜

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
// Unique Paths
// 深搜，小集合可以过，大集合会超时
// 时间复杂度O(n^4)，空间复杂度O(n)
public class Solution {
    public int uniquePaths(int m, int n) {
        if (m < 1 || n < 1) return 0; // 终止条件

        if (m == 1 && n == 1) return 1; // 收敛条件

        return uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Unique Paths
// 深搜，小集合可以过，大集合会超时
// 时间复杂度O(n^4)，空间复杂度O(n)
class Solution {
public:
    int uniquePaths(int m, int n) {
        if (m < 1 || n < 1) return 0; // 终止条件

        if (m == 1 && n == 1) return 1; // 收敛条件

        return uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Unique Paths
# 深搜，小集合可以过，大集合会超时
# 时间复杂度O(n^4)，空间复杂度O(n)
class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        if m < 1 or n < 1: return 0  # 终止条件

        if m == 1 and n == 1: return 1  # 收敛条件

        return self.uniquePaths(m - 1, n) + self.uniquePaths(m, n - 1)
```

</TabItem>
</Tabs>

### 备忘录法

给前面的深搜，加个缓存，就可以过大集合了。即备忘录法。

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Unique Paths
// 深搜 + 缓存，即备忘录法
// 时间复杂度O(n^2)，空间复杂度O(n^2)
public class Solution {
    public int uniquePaths(int m, int n) {
        // f[x][y] 表示 从(0,0)到(x,y)的路径条数
        f = new int[m][n];
        f[0][0] = 1;
        return dfs(m - 1, n - 1);
    }

    int dfs(int x, int y) {
        if (x < 0 || y < 0) return 0; // 数据非法，终止条件

        if (x == 0 && y == 0) return f[0][0]; // 回到起点，收敛条件

        if (f[x][y] > 0) {
            return f[x][y];
        } else {
            return f[x][y] = dfs(x - 1, y) +  dfs(x, y - 1);
        }
    }
    private int[][] f;  // 缓存
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Unique Paths
// 深搜 + 缓存，即备忘录法
// 时间复杂度O(n^2)，空间复杂度O(n^2)
class Solution {
public:
    int uniquePaths(int m, int n) {
        // f[x][y] 表示 从(0,0)到(x,y)的路径条数
        f = vector<vector<int> >(m, vector<int>(n, 0));
        f[0][0] = 1;
        return dfs(m - 1, n - 1);
    }
private:
    vector<vector<int> > f;  // 缓存

    int dfs(int x, int y) {
        if (x < 0 || y < 0) return 0; // 数据非法，终止条件

        if (x == 0 && y == 0) return f[0][0]; // 回到起点，收敛条件

        if (f[x][y] > 0) {
            return f[x][y];
        } else {
            return f[x][y] = dfs(x - 1, y) +  dfs(x, y - 1);
        }
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Unique Paths
# 深搜 + 缓存，即备忘录法
# 时间复杂度O(n^2)，空间复杂度O(n^2)
class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        # f[x][y] 表示 从(0,0)到(x,y)的路径条数
        self.f = [[0] * n for _ in range(m)]
        self.f[0][0] = 1
        return self.dfs(m - 1, n - 1)

    def dfs(self, x: int, y: int) -> int:
        if x < 0 or y < 0: return 0  # 数据非法，终止条件

        if x == 0 and y == 0: return self.f[0][0]  # 回到起点，收敛条件

        if self.f[x][y] > 0:
            return self.f[x][y]
        else:
            self.f[x][y] = self.dfs(x - 1, y) + self.dfs(x, y - 1)
            return self.f[x][y]
```

</TabItem>
</Tabs>

### 动规

既然可以用备忘录法自顶向下解决，也一定可以用动规自底向上解决。

设状态为`f[i][j]`，表示从起点`(1,1)`到达`(i,j)`的路线条数，则状态转移方程为：

```
f[i][j]=f[i-1][j]+f[i][j-1]
```

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// 动规，滚动数组
// 时间复杂度O(n^2)，空间复杂度O(n)
public class Solution {
    public int uniquePaths(int m, int n) {
        int[] f = new int[n];
        f[0] = 1;
        for (int i = 0; i < m; i++) {
            for (int j = 1; j < n; j++) {
                // 左边的f[j]，表示更新后的f[j]，与公式中的f[i][j]对应
                // 右边的f[j]，表示老的f[j]，与公式中的f[i-1][j]对应
                f[j] = f[j] + f[j - 1];
            }
        }
        return f[n - 1];
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// Unique Paths
// 动规，滚动数组
// 时间复杂度O(n^2)，空间复杂度O(n)
class Solution {
public:
    int uniquePaths(int m, int n) {
        vector<int> f(n, 0);
        f[0] = 1;
        for (int i = 0; i < m; i++) {
            for (int j = 1; j < n; j++) {
                // 左边的f[j]，表示更新后的f[j]，与公式中的f[i][j]对应
                // 右边的f[j]，表示老的f[j]，与公式中的f[i-1][j]对应
                f[j] = f[j] + f[j - 1];
            }
        }
        return f[n - 1];
    }
};
```

</TabItem>

<TabItem value="python">

```python
# 动规，滚动数组
# 时间复杂度O(n^2)，空间复杂度O(n)
class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        f = [0] * n
        f[0] = 1
        for i in range(m):
            for j in range(1, n):
                # 左边的f[j]，表示更新后的f[j]，与公式中的f[i][j]对应
                # 右边的f[j]，表示老的f[j]，与公式中的f[i-1][j]对应
                f[j] = f[j] + f[j - 1]
        return f[n - 1]
```

</TabItem>
</Tabs>

### 数学公式

一个`m`行，`n`列的矩阵，机器人从左上走到右下总共需要的步数是`m+n-2`，其中向下走的步数是`m-1`，因此问题变成了在`m+n-2`个操作中，选择`m–1`个时间点向下走，选择方式有多少种。即 $$C_{m+n-2}^{m-1}$$ 。

<Tabs
defaultValue="java"
values={[
{ label: 'Java', value: 'java', },
{ label: 'C++', value: 'cpp', },
]
}>
<TabItem value="java">

```java
// Unique Paths
// 数学公式
public class Solution {
    public int uniquePaths(int m, int n) {
        // max 可以防止n和k差距过大，从而防止combination()溢出
        return (int)combination(m+n-2, Math.max(m-1, n-1));
    }
    // 求阶乘, n!/(start-1)!，即 n*(n-1)...start，要求 n >= 1
    private static long factor(int n, int start) {
        long  ret = 1;
        for(int i = start; i <= n; ++i)
            ret *= i;
        return ret;
    }
    private static long factor(int n) {
        return factor(n, 1);
    }
    // 求组合数 C_n^k
    private static long combination(int n, int k) {
        // 常数优化
        if (k == 0) return 1;
        if (k == 1) return n;

        long ret = factor(n, k+1);
        ret /= factor(n - k);
        return ret;
    }
}
```

</TabItem>
<TabItem value="cpp">

```cpp
// LeetCode, Unique Paths
// 数学公式
class Solution {
public:
    typedef long long int64_t;
    // 求阶乘, n!/(start-1)!，即 n*(n-1)...start，要求 n >= 1
    static int64_t factor(int n, int start = 1) {
        int64_t  ret = 1;
        for(int i = start; i <= n; ++i)
            ret *= i;
        return ret;
    }
    // 求组合数 C_n^k
    static int64_t combination(int n, int k) {
        // 常数优化
        if (k == 0) return 1;
        if (k == 1) return n;

        int64_t ret = factor(n, k+1);
        ret /= factor(n - k);
        return ret;
    }

    int uniquePaths(int m, int n) {
        // max 可以防止n和k差距过大，从而防止combination()溢出
        return combination(m+n-2, max(m-1, n-1));
    }
};
```

</TabItem>

<TabItem value="python">

```python
# Unique Paths
# 数学公式
def unique_paths(m: int, n: int) -> int:
    # max 可以防止n和k差距过大，从而防止combination()溢出
    return int(combination(m + n - 2, max(m - 1, n - 1)))

# 求阶乘, n!/(start-1)!，即 n*(n-1)...start，要求 n >= 1
def factor(n: int, start: int = 1) -> int:
    ret = 1
    for i in range(start, n + 1):
        ret *= i
    return ret

# 求组合数 C_n^k
def combination(n: int, k: int) -> int:
    # 常数优化
    if k == 0:
        return 1
    if k == 1:
        return n

    ret = factor(n, k + 1)
    ret //= factor(n - k)
    return ret
```

</TabItem>
</Tabs>

### 相关题目

- [Unique Paths II](unique-paths-ii.md)
- [Minimum Path Sum](../dp/minimum-path-sum.md)
