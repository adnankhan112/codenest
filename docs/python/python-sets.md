---
title: "Python Sets"
sidebar_position: -19
---

# Python Sets

A set is a group of unique items. It does not keep duplicates, and it has no fixed order. It is written with curly brackets.

```python
numbers = {1, 2, 3, 3, 2}
print(numbers)  # {1, 2, 3}
```

The duplicates are removed. When you print a set, the items may come out in a different order, so do not depend on the order.

## An empty set

Empty curly brackets make a dictionary, not a set. Use `set()`.

```python
empty = set()
print(type(empty))   # <class 'set'>
print(type({}))      # <class 'dict'>
```

## Removing duplicates from a list

This is the most common use of a set.

```python
names = ["Ali", "Sara", "Ali", "Omar", "Sara"]
unique = set(names)

print(len(unique))  # 3
```

## Adding and removing

```python
colors = {"red", "green"}

colors.add("blue")
colors.remove("red")      # error if the item is not there
colors.discard("pink")    # no error if the item is not there

print(len(colors))        # 2
```

## Checking an item

Checking an item in a set is very fast.

```python
print("green" in colors)  # True
```

## Set math

Sets work like groups in math.

```python
a = {1, 2, 3}
b = {3, 4, 5}

print(a | b)   # {1, 2, 3, 4, 5}  everything from both (union)
print(a & b)   # {3}              only what is in both (intersection)
print(a - b)   # {1, 2}           in a but not in b (difference)
```

The result of a set may be shown in a different order on your computer.

## A set has no numbers for items

You cannot use `numbers[0]` on a set, because a set has no order.

## Try it yourself

1. Remove the duplicates from `[5, 3, 5, 1, 3, 9]`.
2. Find the friends that two people have in common, using `&`.
3. Add a new item to a set and check if it is in the set.

## Quick summary

- A set keeps only unique items and has no order.
- Use `set()` for an empty set.
- `add`, `remove`, and `discard` change a set.
- `|`, `&`, and `-` give union, common items, and difference.
