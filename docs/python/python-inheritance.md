---
title: "Python Inheritance"
sidebar_position: -12
---

# Python Inheritance

Inheritance lets a new class take everything from an old class, and then add or change things. The old class is called the parent class. The new class is called the child class.

Example: a dog is an animal, and a cat is an animal. They share some things, such as a name, but each makes a different sound.

## A parent and a child

```python
class Animal:
    def __init__(self, name):
        self.name = name

    def eat(self):
        print(f"{self.name} is eating")

    def speak(self):
        print("Some sound")


class Dog(Animal):
    def speak(self):
        print(f"{self.name} says Woof!")


rex = Dog("Rex")
rex.eat()     # Rex is eating
rex.speak()   # Rex says Woof!
```

`Dog(Animal)` means Dog is a child of Animal. Dog gets `__init__` and `eat` from Animal for free. Dog writes its own `speak`, and this replaces the parent version. This is called overriding.

## Adding new data with super()

A child can have extra data. Use `super()` to run the parent's `__init__` first.

```python
class Cat(Animal):
    def __init__(self, name, color):
        super().__init__(name)
        self.color = color

    def speak(self):
        print(f"{self.name} says Meow!")


tom = Cat("Tom", "grey")
print(tom.name, tom.color)  # Tom grey
tom.speak()                 # Tom says Meow!
```

## Checking the relation

```python
print(isinstance(rex, Dog))     # True
print(isinstance(rex, Animal))  # True
print(isinstance(tom, Dog))     # False
print(issubclass(Dog, Animal))  # True
```

## Using the same method name on different objects

```python
animals = [Dog("Rex"), Cat("Tom", "grey")]

for animal in animals:
    animal.speak()
```

```text
Rex says Woof!
Tom says Meow!
```

This idea is called polymorphism. See the chapter on polymorphism for more.

## When to use inheritance

Use it when one thing really "is a" kind of another thing: a dog is an animal. Do not use it only to reuse code between things that are not related.

## Try it yourself

1. Make a class `Vehicle` with a `brand`, and a child class `Car` with an extra attribute `doors`.
2. Override a method in the child class.
3. Use `isinstance` to check that your car is also a vehicle.

## Quick summary

- A child class gets all the attributes and methods of its parent.
- A child can override a method by writing it again.
- `super()` runs the parent's code.
- `isinstance()` checks if an object belongs to a class.
