---
title: "Python Syntax"
sidebar_position: -29
---

# Python Syntax

Syntax means the rules of a language. If you break the rules, Python shows an error and stops. Python has very few rules, and they are easy to learn.

## Indentation

Indentation means the spaces at the start of a line. In many languages indentation is only for looks. In Python it is part of the rules. It shows which lines belong together.

```python
if 5 > 2:
    print("Five is greater than two")
```

The `print` line has 4 spaces in front. This tells Python that the line belongs to the `if`. Use 4 spaces for each level.

If you forget the spaces, Python shows an error:

```python
if 5 > 2:
print("Five is greater than two")
```

```text
IndentationError: expected an indented block after 'if' statement on line 1
```

## Python is case sensitive

Capital and small letters are different.

```python
name = "Ali"
Name = "Sara"

print(name)  # Ali
print(Name)  # Sara
```

`name` and `Name` are two different variables.

## One statement per line

Each line is one instruction. You do not need a semicolon at the end.

```python
print("First")
print("Second")
```

If a line is very long, you can break it inside brackets.

```python
total = (10 +
         20 +
         30)
print(total)  # 60
```

## Comments

A comment starts with `#`. Python ignores it. Python has no special sign for comments that cover many lines, so people write a `#` at the start of each line.

```python
# This program prints a greeting.
# It is written for beginners.
print("Hello")  # You can also write a comment after code
```

## Words you cannot use as names

Python has some words with a special meaning, such as `if`, `else`, `for`, `while`, `def`, `class`, `True`, `False`, and `None`. You cannot use them as variable names.

## Try it yourself

1. Write an `if` statement with a `print` line under it. Use 4 spaces.
2. Remove the spaces and run it. Read the error message.
3. Create variables `city` and `City` with different values and print both.

## Quick summary

- Syntax means the rules of Python.
- Indentation is required. Use 4 spaces.
- Python is case sensitive.
- A comment starts with `#`.
