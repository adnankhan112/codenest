---
title: C# LINQ
sidebar_position: 37
---

# C# LINQ

LINQ lets you search and change collections with simple, readable code.

```csharp
using System.Linq;

var nums = new List<int> { 5, 2, 8, 1, 9, 4 };

var even = nums.Where(n => n % 2 == 0).ToList();      // 2, 8, 4
var sorted = nums.OrderBy(n => n).ToList();
var squares = nums.Select(n => n * n).ToList();

Console.WriteLine(nums.Sum());
Console.WriteLine(nums.Average());
Console.WriteLine(nums.Max());
Console.WriteLine(nums.Any(n => n > 8));     // true
Console.WriteLine(nums.First());
Console.WriteLine(nums.Count(n => n > 3));

var students = new[]
{
    new { Name = "Ali", Marks = 80 },
    new { Name = "Sara", Marks = 92 }
};
var top = students.OrderByDescending(s => s.Marks).First();
Console.WriteLine(top.Name);                 // Sara
```
