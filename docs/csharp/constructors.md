---
title: C# Constructors
sidebar_position: 21
---

# C# Constructors

```csharp
class Student
{
    public string Name;
    public int Marks;

    public Student(string name, int marks)
    {
        Name = name;
        Marks = marks;
    }

    public Student() : this("Unknown", 0) { }
}

var a = new Student("Ali", 85);
var b = new Student();
```

A constructor has the same name as the class and runs when you create an object.
