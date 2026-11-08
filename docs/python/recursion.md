---
title: Python Recursion
sidebar_position: 20.6
---

# Python Recursion

A recursive function calls itself. It needs a **base case** that stops it.

```python
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

print(factorial(5))   # 120
```

## Fibonacci

```python
def fib(n):
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)

print([fib(i) for i in range(8)])   # [0, 1, 1, 2, 3, 5, 8, 13]
```

## Limit

Python stops very deep recursion with a `RecursionError`. For big problems, a loop is often better.
