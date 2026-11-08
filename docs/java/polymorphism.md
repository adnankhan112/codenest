---
title: Java Polymorphism
sidebar_position: 28
---

# Java Polymorphism

Polymorphism means "many forms". A child class can change (override) a method of its parent.

```java
class Animal {
    void sound() { System.out.println("Some sound"); }
}

class Cat extends Animal {
    @Override
    void sound() { System.out.println("Meow"); }
}

class Dog extends Animal {
    @Override
    void sound() { System.out.println("Woof"); }
}

Animal[] pets = { new Cat(), new Dog() };
for (Animal a : pets) {
    a.sound();      // Meow, then Woof
}
```

The method that runs depends on the real object, not on the variable type.
