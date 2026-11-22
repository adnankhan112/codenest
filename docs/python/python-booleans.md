---
title: "Python Booleans"
sidebar_position: -23
---

# Python Booleans

A boolean has only two possible values: `True` or `False`. Write them with a capital first letter.

```python
is_student = True
is_raining = False

print(is_student)  # True
print(is_raining)  # False
```

## Comparisons give booleans

```python
print(10 > 5)    # True
print(10 == 5)   # False
print("a" in "cat")  # True
```

Booleans are the answer to a yes or no question, and they are the base of every decision in a program.

## The bool() function

`bool()` tells you if a value counts as True or False.

```python
print(bool("Hello"))  # True
print(bool(15))       # True
print(bool(""))       # False
print(bool(0))        # False
```

## Values that count as False

These are called falsy values:

- `False`
- `None`
- `0` and `0.0`
- An empty text `""`
- An empty list `[]`, tuple `()`, dictionary `{}`, and set `set()`

Everything else counts as True. This is useful in `if` statements:

```python
items = []

if items:
    print("The list has items")
else:
    print("The list is empty")   # this line runs
```

## Joining booleans

```python
print(True and False)  # False
print(True or False)   # True
print(not True)        # False
```

## Booleans are numbers too

`True` works like 1 and `False` works like 0.

```python
print(True + True)  # 2
print(sum([True, False, True]))  # 2
```

## Try it yourself

1. Check if the number 15 is greater than 10 and print the answer.
2. Print `bool("")` and `bool("0")`. Why are the answers different?
3. Write an `if` statement that checks if a list has items.

## Quick summary

- A boolean is `True` or `False`.
- Comparisons give booleans.
- Empty values, `0`, and `None` count as False. Most other values count as True.
- Use `and`, `or`, and `not` to join booleans.
