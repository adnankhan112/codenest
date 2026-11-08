---
title: Python Decorators
sidebar_position: 20.8
---

# Python Decorators

A decorator adds extra behavior to a function without changing its code.

```python
def shout(func):
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        return result.upper()
    return wrapper

@shout
def greet(name):
    return f"hello {name}"

print(greet("ali"))   # HELLO ALI
```

`@shout` is a short way of writing `greet = shout(greet)`.

## A timing decorator

```python
import time

def timer(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        print("Took", round(time.time() - start, 4), "seconds")
        return result
    return wrapper
```
