---
title: C# Arrays
sidebar_position: 16
---

# C# Arrays

```csharp
int[] nums = { 10, 20, 30, 40 };
string[] names = new string[3];
names[0] = "Ali";

Console.WriteLine(nums[0]);        // 10
Console.WriteLine(nums.Length);    // 4

Array.Sort(nums);
Array.Reverse(nums);
Console.WriteLine(Array.IndexOf(nums, 20));

int[,] grid = { { 1, 2, 3 }, { 4, 5, 6 } };
Console.WriteLine(grid[1, 2]);     // 6
```

The size of an array is fixed. Use `List<T>` when the size changes.
