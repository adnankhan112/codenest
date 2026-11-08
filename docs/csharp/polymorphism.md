---
title: C# Polymorphism
sidebar_position: 26
---

# C# Polymorphism

```csharp
class Animal
{
    public virtual void Sound() => Console.WriteLine("Some sound");
}

class Cat : Animal
{
    public override void Sound() => Console.WriteLine("Meow");
}

class Dog : Animal
{
    public override void Sound() => Console.WriteLine("Woof");
}

Animal[] pets = { new Cat(), new Dog() };
foreach (var p in pets)
{
    p.Sound();     // Meow, then Woof
}
```

- `virtual` allows a method to be changed.
- `override` changes it in the child class.
