---
title: Java Inheritance
sidebar_position: 27
---

# Java Inheritance

A child class can reuse the code of a parent class using `extends`.

```java
class Animal {
    void eat() {
        System.out.println("Eating");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Woof");
    }
}

Dog d = new Dog();
d.eat();     // from Animal
d.bark();    // from Dog
```

## super

```java
class Person {
    String name;
    Person(String name) { this.name = name; }
}

class Student extends Person {
    Student(String name) {
        super(name);       // calls the parent constructor
    }
}
```

Java allows only **one** parent class (single inheritance).
