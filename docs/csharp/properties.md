---
title: C# Properties
sidebar_position: 23
---

# C# Properties

A property is a smart field with a getter and a setter.

```csharp
class Person
{
    private int age;

    public int Age
    {
        get { return age; }
        set
        {
            if (value >= 0) age = value;
        }
    }

    public string Name { get; set; }                 // auto property
    public string Id { get; private set; } = "A1";   // read only from outside
}

var p = new Person();
p.Age = 20;
p.Name = "Ali";
Console.WriteLine(p.Age);
```

Properties give controlled access to data. This is **encapsulation**.
