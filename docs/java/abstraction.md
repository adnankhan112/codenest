---
title: Java Abstract Classes
sidebar_position: 29
---

# Java Abstract Classes

An abstract class cannot be used to make objects. It is a base for other classes.

```java
abstract class Shape {
    abstract double area();          // no body

    void describe() {
        System.out.println("Area is " + area());
    }
}

class Circle extends Shape {
    double r;
    Circle(double r) { this.r = r; }

    double area() { return Math.PI * r * r; }
}

Shape s = new Circle(2);
s.describe();
```

A child class must write the body of every abstract method.
