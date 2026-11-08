---
title: C# Operators
sidebar_position: 10
---

# C# Operators

```csharp
int a = 10, b = 3;
Console.WriteLine(a + b);    // 13
Console.WriteLine(a / b);    // 3
Console.WriteLine(a % b);    // 1
a++;
a += 5;

Console.WriteLine(a > b);            // comparison
Console.WriteLine(a > 5 && b < 5);   // and
Console.WriteLine(a > 50 || b == 3); // or
Console.WriteLine(!(a > 5));         // not
```

## Null operators

```csharp
string name = null;
string show = name ?? "Unknown";       // use "Unknown" if name is null
int? len = name?.Length;               // null instead of a crash
```
