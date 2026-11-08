---
title: C# Methods
sidebar_position: 17
---

# C# Methods

```csharp
static int Add(int a, int b)
{
    return a + b;
}

static void Greet(string name)
{
    Console.WriteLine($"Hello, {name}");
}

Greet("Ali");
Console.WriteLine(Add(2, 3));     // 5

// Short form
static int Square(int x) => x * x;
```
