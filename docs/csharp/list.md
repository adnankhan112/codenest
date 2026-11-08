---
title: C# List
sidebar_position: 31
---

# C# List

A `List<T>` is a list that can grow and shrink.

```csharp
using System.Collections.Generic;

List<string> fruits = new List<string>();
fruits.Add("Apple");
fruits.Add("Banana");
fruits.Insert(1, "Mango");

Console.WriteLine(fruits[0]);          // Apple
Console.WriteLine(fruits.Count);       // 3
fruits.Remove("Banana");
Console.WriteLine(fruits.Contains("Mango"));
fruits.Sort();

foreach (var f in fruits)
{
    Console.WriteLine(f);
}
```
