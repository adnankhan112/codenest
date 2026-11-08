---
title: C# If Else
sidebar_position: 13
---

# C# If Else

```csharp
int marks = 75;

if (marks >= 80)
{
    Console.WriteLine("Grade A");
}
else if (marks >= 60)
{
    Console.WriteLine("Grade B");
}
else
{
    Console.WriteLine("Try again");
}

string result = marks >= 50 ? "Pass" : "Fail";    // ternary
```
