---
title: "Python Tuples"
sidebar_position: -20
---

# Python Tuples

A tuple is like a list, but you cannot change it after you make it. It is written with round brackets.

```python
point = (3, 7)
colors = ("red", "green", "blue")

print(point)     # (3, 7)
print(colors[0]) # red
print(len(colors))  # 3
```

## A tuple with one item

For one item you must write a comma. Without the comma it is not a tuple.

```python
one = (5,)
print(type(one))    # <class 'tuple'>

not_a_tuple = (5)
print(type(not_a_tuple))  # <class 'int'>
```

## You cannot change a tuple

```python
colors = ("red", "green", "blue")
colors[0] = "yellow"
```

```text
TypeError: 'tuple' object does not support item assignment
```

If you need a change, turn it into a list, change it, and turn it back.

```python
items = list(colors)
items[0] = "yellow"
colors = tuple(items)
print(colors)  # ('yellow', 'green', 'blue')
```

## Unpacking

Unpacking puts the items of a tuple into separate variables.

```python
point = (3, 7)
x, y = point

print(x)  # 3
print(y)  # 7
```

## Tuple methods

A tuple has only two methods.

```python
numbers = (1, 2, 2, 3)

print(numbers.count(2))  # 2  (how many times)
print(numbers.index(3))  # 3  (the place of the first match)
```

## Why use a tuple?

- It is a safe way to keep values that must not change, such as a point on a map.
- A function can give back many values as one tuple.

```python
def min_max(numbers):
    return min(numbers), max(numbers)

low, high = min_max([4, 9, 2])
print(low, high)  # 2 9
```

## Try it yourself

1. Make a tuple of your three favorite colors and print the second one.
2. Unpack the tuple into three variables.
3. Write a function that returns the sum and the count of a list as a tuple.

## Quick summary

- A tuple is written with round brackets and cannot be changed.
- A tuple with one item needs a comma.
- Use unpacking to take items out.
