---
title: Java Interfaces
sidebar_position: 30
---

# Java Interfaces

An interface is a list of methods that a class promises to have.

```java
interface Flyable {
    void fly();
}

interface Swimmable {
    void swim();
}

class Duck implements Flyable, Swimmable {
    public void fly()  { System.out.println("Duck flies"); }
    public void swim() { System.out.println("Duck swims"); }
}
```

- A class can implement **many** interfaces.
- Since Java 8, interfaces can have `default` methods with a body.

```java
interface Greeter {
    default void hello() { System.out.println("Hello"); }
}
```
