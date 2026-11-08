---
title: Python Input and Output
sidebar_position: 5.5
---

# Python Input and Output

## Output with print

```python
print("Hello")
print("Age:", 20)
print("A", "B", "C", sep="-")   # A-B-C
print("Line one", end=" ")
print("same line")
```

- `sep` sets what goes between items.
- `end` sets what is printed at the end (the default is a new line).

## Input from the user

```python
name = input("What is your name? ")
print("Hello,", name)

age = int(input("How old are you? "))
print("Next year you will be", age + 1)
```

`input()` always gives you text (a string). Use `int()` or `float()` to turn it into a number.
