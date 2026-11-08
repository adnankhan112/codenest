---
title: Java Classes and Objects
sidebar_position: 22
---

# Java Classes and Objects

A **class** is a blueprint. An **object** is a real thing made from it.

```java
public class Car {
    String brand;
    int year;

    void start() {
        System.out.println(brand + " started");
    }
}

public class Main {
    public static void main(String[] args) {
        Car c = new Car();
        c.brand = "Toyota";
        c.year = 2024;
        c.start();
    }
}
```

You can make many objects from one class.
