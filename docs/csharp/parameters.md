---
title: C# Method Parameters
sidebar_position: 18
---

# C# Method Parameters

## Default and named parameters

```csharp
static void Hello(string name = "friend")
{
    Console.WriteLine($"Hello, {name}");
}

Hello();
Hello(name: "Ali");
```

## ref and out

```csharp
static void AddOne(ref int x) { x++; }      // changes the original

static void Split(int total, out int half, out int rest)
{
    half = total / 2;
    rest = total % 2;
}

int n = 5;
AddOne(ref n);              // n is 6
Split(9, out int h, out int r);
```

## params

```csharp
static int Sum(params int[] numbers)
{
    int total = 0;
    foreach (int n in numbers) total += n;
    return total;
}

Console.WriteLine(Sum(1, 2, 3, 4));   // 10
```
