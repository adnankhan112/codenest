---
title: "Python Classes and Objects"
sidebar_position: -13
---

# Python Classes and Objects

Python is an object-oriented language. This means you can describe real things in your code, such as a student, a car, or a bank account.

- A class is a plan, like the design of a house.
- An object is a real thing made from the plan, like a house built from that design.

## Making a class

```python
class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def bark(self):
        print(f"{self.name} says Woof!")
```

## Making objects

You make an object by calling the class like a function.

```python
dog1 = Dog("Rex", 3)
dog2 = Dog("Bella", 5)

print(dog1.name)   # Rex
print(dog2.age)    # 5

dog1.bark()        # Rex says Woof!
dog2.bark()        # Bella says Woof!
```

Each object has its own data.

## The __init__ method

`__init__` runs by itself when a new object is made. It sets up the starting data. It is called the constructor.

## What is self?

`self` means "this object". Python gives it to every method for you. You write it as the first parameter of each method, but you do not write it when you call the method.

## Attributes and methods

- An attribute is a variable that belongs to an object, such as `name`.
- A method is a function that belongs to an object, such as `bark()`.

## Changing an attribute

```python
dog1.age = 4
print(dog1.age)  # 4
```

## A readable print with __str__

If you print an object, Python shows something ugly by default. The `__str__` method lets you choose the text.

```python
class Student:
    def __init__(self, name, marks):
        self.name = name
        self.marks = marks

    def __str__(self):
        return f"{self.name} has {self.marks} marks"

ali = Student("Ali", 85)
print(ali)  # Ali has 85 marks
```

## A class with a method that changes data

```python
class Counter:
    def __init__(self):
        self.count = 0

    def add(self):
        self.count += 1

c = Counter()
c.add()
c.add()
print(c.count)  # 2
```

See the chapters on class and instance members, encapsulation, and magic methods for more.

## Try it yourself

1. Make a class `Car` with the attributes `brand` and `year`, and a method that prints them.
2. Make two car objects and call the method on both.
3. Make a class `BankAccount` with a balance, and methods `deposit` and `show_balance`.

## Quick summary

- A class is a plan, and an object is made from it.
- `__init__` sets up the object, and `self` means this object.
- Attributes keep data, and methods are functions of the object.
- `__str__` decides how an object is printed.
