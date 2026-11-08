---
title: C# Abstract Classes
sidebar_position: 27
---

# C# Abstract Classes

```csharp
abstract class Shape
{
    public abstract double Area();       // no body

    public void Describe()
    {
        Console.WriteLine($"Area: {Area()}");
    }
}

class Circle : Shape
{
    private double r;
    public Circle(double r) { this.r = r; }

    public override double Area() => Math.PI * r * r;
}

Shape s = new Circle(2);
s.Describe();
```

You cannot create an object of an abstract class. A child class must override every abstract method.
