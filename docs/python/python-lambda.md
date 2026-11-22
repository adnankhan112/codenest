---
title: "Python Lambda Functions"
sidebar_position: -14
---

# Python Lambda Functions

A lambda is a small function with no name, written on one line. It is good for very short jobs.

## The form

```python
lambda parameters: result
```

A lambda can have many parameters, but only one expression, and it gives that result back without writing `return`.

```python
double = lambda x: x * 2
print(double(5))   # 10

add = lambda a, b: a + b
print(add(3, 4))   # 7
```

The same functions written in the normal way:

```python
def double(x):
    return x * 2

def add(a, b):
    return a + b
```

## Where lambdas are useful

Lambdas are most useful when you give a small function to another function.

### Sorting with a rule

```python
names = ["banana", "kiwi", "apple"]

by_length = sorted(names, key=lambda name: len(name))
print(by_length)  # ['kiwi', 'apple', 'banana']
```

Here the rule says: sort by the length of each name.

### Sorting a list of pairs

```python
students = [("Ali", 80), ("Sara", 95), ("Omar", 70)]

best_first = sorted(students, key=lambda s: s[1], reverse=True)
print(best_first)  # [('Sara', 95), ('Ali', 80), ('Omar', 70)]
```

### With map and filter

```python
numbers = [1, 2, 3, 4]

doubled = list(map(lambda n: n * 2, numbers))
evens = list(filter(lambda n: n % 2 == 0, numbers))

print(doubled)  # [2, 4, 6, 8]
print(evens)    # [2, 4]
```

See the chapter on map, filter, and reduce for more.

## When not to use a lambda

If the function is long, or you use it in many places, write a normal function with `def` and give it a clear name. A normal function is easier to read and to fix.

## Try it yourself

1. Write a lambda that gives the square of a number.
2. Sort `["pear", "fig", "banana"]` by the last letter of each word.
3. Use `filter` and a lambda to keep only the numbers above 10 from `[5, 12, 8, 20]`.

## Quick summary

- A lambda is a small one-line function with no name.
- It is written as `lambda parameters: result`.
- It is often used with `sorted`, `map`, and `filter`.
- Use a normal `def` function when the code is long.
