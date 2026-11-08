---
title: C# Constants and Input
sidebar_position: 9
---

# C# Constants and Input

## Constants

```csharp
const int MaxUsers = 100;
const string Company = "CodeNest";
```

## User input

```csharp
Console.Write("Enter your name: ");
string name = Console.ReadLine();

Console.Write("Enter your age: ");
int age = int.Parse(Console.ReadLine());

Console.WriteLine($"{name} is {age}");
```

`Console.ReadLine()` always gives text. Convert it when you need a number.
