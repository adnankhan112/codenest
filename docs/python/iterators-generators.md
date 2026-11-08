---
title: Python Iterators and Generators
sidebar_position: 23.9
---

# Python Iterators and Generators

## Iterators

```python
nums = [10, 20, 30]
it = iter(nums)
print(next(it))   # 10
print(next(it))   # 20
```

## Generators

A generator makes values one at a time using `yield`. It saves memory.

```python
def count_up(limit):
    n = 1
    while n <= limit:
        yield n
        n += 1

for value in count_up(3):
    print(value)    # 1, 2, 3
```

## Generator expression

```python
total = sum(n * n for n in range(1000000))
```

Use generators for large data, because they do not build the whole list in memory.
