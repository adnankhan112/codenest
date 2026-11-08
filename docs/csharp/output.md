---
title: C# Output
sidebar_position: 4
---

# C# Output

```csharp
Console.WriteLine("Hello");        // prints and moves to a new line
Console.Write("Hello ");           // prints without a new line

string name = "Ali";
int age = 20;

Console.WriteLine("Name: " + name);
Console.WriteLine($"{name} is {age} years old");      // string interpolation
Console.WriteLine("Price: {0:F2}", 9.5);              // 9.50
```

Use `\n` for a new line and `\t` for a tab.
