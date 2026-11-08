---
title: C# Classes and Objects
sidebar_position: 20
---

# C# Classes and Objects

```csharp
class Car
{
    public string Brand;
    public int Year;

    public void Start()
    {
        Console.WriteLine($"{Brand} started");
    }
}

Car c = new Car();
c.Brand = "Toyota";
c.Year = 2024;
c.Start();
```

A class is a blueprint, and an object is one real thing made from it.
