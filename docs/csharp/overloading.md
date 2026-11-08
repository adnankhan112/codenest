---
title: C# Method Overloading and Recursion
sidebar_position: 19
---

# C# Method Overloading and Recursion

## Overloading

Methods can share a name if their parameters differ.

```csharp
static int Add(int a, int b) => a + b;
static double Add(double a, double b) => a + b;
static int Add(int a, int b, int c) => a + b + c;
```

## Recursion

A method that calls itself needs a base case.

```csharp
static int Factorial(int n)
{
    if (n <= 1) return 1;
    return n * Factorial(n - 1);
}

Console.WriteLine(Factorial(5));   // 120
```
