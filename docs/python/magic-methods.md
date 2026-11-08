---
title: Python Magic Methods
sidebar_position: 23.7
---

# Python Magic Methods

Magic (dunder) methods start and end with two underscores. Python calls them automatically.

```python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        return f"Point({self.x}, {self.y})"

    def __add__(self, other):
        return Point(self.x + other.x, self.y + other.y)

    def __eq__(self, other):
        return self.x == other.x and self.y == other.y

    def __len__(self):
        return 2

a = Point(1, 2)
b = Point(3, 4)
print(a + b)       # Point(4, 6)
print(a == b)      # False
print(len(a))      # 2
```

| Method | Used for |
| --- | --- |
| `__init__` | Creating an object |
| `__str__` | `print(obj)` |
| `__add__` | The `+` operator |
| `__eq__` | The `==` operator |
| `__len__` | `len(obj)` |
