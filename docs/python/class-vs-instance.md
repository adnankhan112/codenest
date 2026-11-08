---
title: Python Class and Instance Members
sidebar_position: 22.5
---

# Python Class and Instance Members

```python
class Student:
    school = "CodeNest School"          # class variable (shared)

    def __init__(self, name):
        self.name = name                # instance variable (own copy)

    def hello(self):                    # instance method
        return f"Hi, I am {self.name}"

    @classmethod
    def from_text(cls, text):           # class method
        return cls(text.strip())

    @staticmethod
    def is_valid(name):                 # static method
        return len(name) > 0

s = Student.from_text("  Ali ")
print(s.hello())
print(Student.school)
print(Student.is_valid("Sara"))
```

| Kind | First parameter | Can use |
| --- | --- | --- |
| Instance method | `self` | The object's data |
| Class method | `cls` | The class itself |
| Static method | none | Nothing special |
