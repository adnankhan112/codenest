---
title: Python Variable Scope
sidebar_position: 20.4
---

# Python Variable Scope

Scope decides where a variable can be used. Python follows the **LEGB** rule: Local, Enclosing, Global, Built-in.

```python
x = "global"

def show():
    x = "local"
    print(x)      # local

show()
print(x)          # global
```

## The global keyword

```python
count = 0

def add():
    global count
    count += 1

add()
print(count)      # 1
```

## The nonlocal keyword

```python
def outer():
    n = 0
    def inner():
        nonlocal n
        n += 1
    inner()
    return n
```

Avoid global variables when you can. Pass values into functions instead.
