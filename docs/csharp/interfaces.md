---
title: C# Interfaces
sidebar_position: 28
---

# C# Interfaces

An interface lists methods that a class promises to have.

```csharp
interface IFlyable
{
    void Fly();
}

interface ISwimmable
{
    void Swim();
}

class Duck : IFlyable, ISwimmable
{
    public void Fly() => Console.WriteLine("Duck flies");
    public void Swim() => Console.WriteLine("Duck swims");
}

IFlyable f = new Duck();
f.Fly();
```

Interface names start with `I` by convention.
