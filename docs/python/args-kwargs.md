---
title: Python Function Arguments
sidebar_position: 20.2
---

# Python Function Arguments

```python
def info(name, age=18, *hobbies, **extra):
    print(name, age)
    print(hobbies)   # a tuple
    print(extra)     # a dictionary

info("Ali", 20, "chess", "cricket", city="Lahore", job="student")
```

- `*args` collects extra positional arguments into a tuple.
- `**kwargs` collects extra keyword arguments into a dictionary.

## Keyword arguments

```python
def rect(width, height):
    return width * height

print(rect(height=5, width=3))
```

## Unpacking when calling

```python
nums = [2, 3]
print(rect(*nums))
data = {"width": 4, "height": 5}
print(rect(**data))
```

## Returning many values

```python
def min_max(items):
    return min(items), max(items)

low, high = min_max([4, 9, 1])
```
