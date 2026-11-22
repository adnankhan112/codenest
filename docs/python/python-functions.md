---
title: "Python Functions"
sidebar_position: -15
---

# Python Functions

A function is a block of code with a name. You write it once, and you can use it many times. Functions keep your program short and clean.

## Making and calling a function

You make a function with the word `def`. You run it by writing its name with brackets. This is called calling the function.

```python
def say_hello():
    print("Hello!")

say_hello()
say_hello()
```

```text
Hello!
Hello!
```

## Parameters

A parameter is a value that you give to a function. Write it inside the brackets.

```python
def greet(name):
    print(f"Hello, {name}!")

greet("Ali")    # Hello, Ali!
greet("Sara")   # Hello, Sara!
```

## Returning a value

`return` sends a result back to the code that called the function.

```python
def add(a, b):
    return a + b

result = add(3, 4)
print(result)  # 7
```

When Python reaches `return`, the function stops. A function without `return` gives back `None`.

## Default values

A parameter can have a default value that is used when you give nothing.

```python
def greet(name="friend"):
    print(f"Hello, {name}!")

greet()         # Hello, friend!
greet("Omar")   # Hello, Omar!
```

## Keyword arguments

You can write the name of the parameter when you call a function. Then the order does not matter.

```python
def describe(name, age):
    print(f"{name} is {age} years old")

describe(age=20, name="Ali")   # Ali is 20 years old
```

## Returning many values

```python
def min_max(numbers):
    return min(numbers), max(numbers)

low, high = min_max([4, 9, 2])
print(low, high)  # 2 9
```

## Describing a function

A docstring is a text in triple quotes under the first line. It explains what the function does.

```python
def square(n):
    """Return the square of n."""
    return n * n
```

## Why use functions?

- You do not repeat the same code.
- A problem is split into small, easy parts.
- A mistake is fixed in one place only.

See the chapters on function arguments and variable scope for more.

## Try it yourself

1. Write a function `is_even(n)` that returns `True` if `n` is even.
2. Write a function that takes a list and returns the biggest number, without using `max()`.
3. Write a function with a default value for a greeting, such as `"Hello"`.

## Quick summary

- Make a function with `def`, and call it by its name.
- Parameters take values in, and `return` sends a result out.
- A default value is used when no value is given.
- A function without `return` gives back `None`.
