---
title: C# Enums and Structs
sidebar_position: 29
---

# C# Enums and Structs

## enum

```csharp
enum Day { Monday, Tuesday, Wednesday }

Day d = Day.Tuesday;
Console.WriteLine(d);          // Tuesday
Console.WriteLine((int)d);     // 1
```

## struct

A struct is a small value type, good for simple data.

```csharp
struct Point
{
    public int X;
    public int Y;

    public Point(int x, int y)
    {
        X = x;
        Y = y;
    }
}

var p = new Point(3, 4);
Console.WriteLine($"{p.X}, {p.Y}");
```

A class is a reference type (copies share data). A struct is a value type (each copy is separate).
