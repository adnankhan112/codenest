---
title: C# Dictionary
sidebar_position: 32
---

# C# Dictionary

A `Dictionary` stores key and value pairs.

```csharp
var ages = new Dictionary<string, int>();
ages["Ali"] = 20;
ages.Add("Sara", 22);

Console.WriteLine(ages["Ali"]);
Console.WriteLine(ages.ContainsKey("Sara"));

if (ages.TryGetValue("Zed", out int age))
{
    Console.WriteLine(age);
}

ages.Remove("Ali");

foreach (var pair in ages)
{
    Console.WriteLine($"{pair.Key} = {pair.Value}");
}
```

Keys must be unique.
