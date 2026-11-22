---
title: "Python Variables"
sidebar_position: -28
---

# Python Variables

A variable is a name that holds a value. Think of it as a labeled box. The label is the name, and the box holds the value.

## Creating a variable

You create a variable the moment you give it a value. You use the equal sign `=`.

```python
name = "Ali"
age = 20
height = 1.75

print(name)    # Ali
print(age)     # 20
print(height)  # 1.75
```

You do not need to say the type. Python understands it from the value.

## Changing a variable

You can give a variable a new value at any time.

```python
score = 10
score = 15
print(score)  # 15
```

## Checking the type

The `type()` function tells you the type of a value.

```python
print(type("Ali"))   # <class 'str'>
print(type(20))      # <class 'int'>
print(type(1.75))    # <class 'float'>
```

## Rules for names

- A name can have letters, numbers, and the underscore `_`.
- A name must start with a letter or an underscore, never with a number.
- A name cannot have spaces.
- A name cannot be a Python special word, such as `if` or `class`.
- Names are case sensitive: `age` and `Age` are different.

```python
user_name = "Sara"   # good
user2 = "Omar"       # good
# 2user = "Bad"      # error: starts with a number
# user name = "Bad"  # error: has a space
```

Python programmers write names in lowercase and join words with an underscore. This style is called snake_case, for example `total_price`.

## Many variables at once

```python
a, b, c = 1, 2, 3
print(a, b, c)  # 1 2 3

x = y = z = 0
print(x, y, z)  # 0 0 0
```

## Swapping two values

```python
a = 5
b = 10
a, b = b, a
print(a, b)  # 10 5
```

## Constants

Python has no real constants, but programmers write a name in capital letters to show that it should not change.

```python
PI = 3.14159
MAX_USERS = 100
```

## Try it yourself

1. Make variables for your name, age, and city, and print them.
2. Change the age and print it again.
3. Swap the values of two variables.

## Quick summary

- A variable is a name that holds a value.
- Use `=` to give a value, and `type()` to check the type.
- Names use letters, numbers, and `_`, and cannot start with a number.
- Use snake_case, for example `total_price`.
