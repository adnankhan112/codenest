---
title: Java Arrays
sidebar_position: 17
---

# Java Arrays

```java
int[] nums = {10, 20, 30, 40};
String[] names = new String[3];
names[0] = "Ali";

System.out.println(nums[0]);        // 10
System.out.println(nums.length);    // 4

for (int n : nums) {
    System.out.println(n);
}
```

## Useful helpers

```java
import java.util.Arrays;

int[] a = {5, 2, 9, 1};
Arrays.sort(a);
System.out.println(Arrays.toString(a));   // [1, 2, 5, 9]
System.out.println(Arrays.binarySearch(a, 5));

int[] copy = Arrays.copyOf(a, 4);
```

## Two-dimensional array

```java
int[][] grid = { {1, 2, 3}, {4, 5, 6} };
System.out.println(grid[1][2]);   // 6
```

The size of an array cannot change. For a growing list, use `ArrayList`.
