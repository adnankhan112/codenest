---
title: Python Polymorphism
sidebar_position: 23.5
---

# Python Polymorphism

Polymorphism means "many forms". Different classes can have the same method name, and each does its own job.

```python
class Cat:
    def speak(self):
        return "Meow"

class Dog:
    def speak(self):
        return "Woof"

for animal in [Cat(), Dog()]:
    print(animal.speak())
```

## Method overriding

```python
class Shape:
    def area(self):
        return 0

class Square(Shape):
    def __init__(self, side):
        self.side = side

    def area(self):
        return self.side ** 2

print(Square(4).area())   # 16
```

Python uses "duck typing": if an object has the method you call, it works.
