---
title: C# Inheritance
sidebar_position: 25
---

# C# Inheritance

```csharp
class Animal
{
    public void Eat() => Console.WriteLine("Eating");
}

class Dog : Animal
{
    public void Bark() => Console.WriteLine("Woof");
}

var d = new Dog();
d.Eat();
d.Bark();
```

## base

```csharp
class Person
{
    public string Name;
    public Person(string name) { Name = name; }
}

class Student : Person
{
    public Student(string name) : base(name) { }
}
```

A class can have only **one** parent class, but it can implement many interfaces.
