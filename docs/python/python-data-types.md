---
title: "Python Data Types"
sidebar_position: -27
---

# Python Data Types

Every value in Python has a type. The type tells Python what kind of value it is, and what you can do with it.

## The main types

| Type | Meaning | Example |
| --- | --- | --- |
| `str` | Text | `"Hello"` |
| `int` | Whole number | `25` |
| `float` | Number with a decimal point | `3.14` |
| `bool` | True or False | `True` |
| `list` | An ordered group you can change | `[1, 2, 3]` |
| `tuple` | An ordered group you cannot change | `(1, 2, 3)` |
| `set` | A group of unique items | `{1, 2, 3}` |
| `dict` | Key and value pairs | `{"name": "Ali"}` |
| `NoneType` | Nothing, no value | `None` |

## Checking the type

```python
print(type("Hello"))       # <class 'str'>
print(type(25))            # <class 'int'>
print(type(3.14))          # <class 'float'>
print(type(True))          # <class 'bool'>
print(type([1, 2, 3]))     # <class 'list'>
print(type((1, 2, 3)))     # <class 'tuple'>
print(type({1, 2, 3}))     # <class 'set'>
print(type({"a": 1}))      # <class 'dict'>
print(type(None))          # <class 'NoneType'>
```

## Changing one type to another

This is called type conversion. Use `int()`, `float()`, `str()`, and `bool()`.

```python
print(int("25"))      # 25
print(float("3.5"))   # 3.5
print(str(100))       # 100
print(int(3.9))       # 3  (the decimal part is cut off)
```

If the value cannot be changed, Python shows an error.

```python
int("hello")
```

```text
ValueError: invalid literal for int() with base 10: 'hello'
```

## Text and numbers do not mix

```python
age = 20
print("I am " + str(age) + " years old")  # I am 20 years old
```

Without `str(age)`, Python shows a `TypeError`, because it cannot join text and a number. An f-string is an easier way:

```python
print(f"I am {age} years old")
```

## Try it yourself

1. Print the type of five different values.
2. Change the text `"42"` into a number and add 8 to it.
3. Change the number `7` into text and print it.

## Quick summary

- Every value has a type, and `type()` shows it.
- The main types are `str`, `int`, `float`, `bool`, `list`, `tuple`, `set`, `dict`, and `None`.
- Use `int()`, `float()`, and `str()` to change types.
