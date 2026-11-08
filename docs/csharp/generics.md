---
title: C# Generics
sidebar_position: 38
---

# C# Generics

Generics let one piece of code work safely with many types.

```csharp
class Box<T>
{
    public T Value;
    public Box(T value) { Value = value; }
}

var a = new Box<int>(5);
var b = new Box<string>("Hello");

static void Show<T>(T item)
{
    Console.WriteLine(item);
}

Show(10);
Show("Hi");

static T Bigger<T>(T a, T b) where T : IComparable<T>
{
    return a.CompareTo(b) > 0 ? a : b;
}
```

`where` limits which types are allowed.
