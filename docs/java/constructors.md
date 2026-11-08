---
title: Java Constructors
sidebar_position: 23
---

# Java Constructors

A constructor runs when an object is created. It has the same name as the class and no return type.

```java
public class Student {
    String name;
    int marks;

    public Student(String name, int marks) {
        this.name = name;
        this.marks = marks;
    }

    public Student() {
        this("Unknown", 0);     // calls the other constructor
    }
}

Student a = new Student("Ali", 85);
Student b = new Student();
```

`this` means the current object.
