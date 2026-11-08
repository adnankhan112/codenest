---
title: C# static Members
sidebar_position: 24
---

# C# static Members

A static member belongs to the class, not to an object.

```csharp
class Counter
{
    public static int Count = 0;

    public Counter()
    {
        Count++;
    }

    public static void Show()
    {
        Console.WriteLine($"Objects: {Count}");
    }
}

new Counter();
new Counter();
Counter.Show();    // Objects: 2
```

A **static class** cannot be created as an object and holds only static members, like `Math` and `Console`.
