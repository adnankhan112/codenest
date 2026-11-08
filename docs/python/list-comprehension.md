---
title: Python List Comprehension
sidebar_position: 13.6
---

# Python List Comprehension

A list comprehension builds a list in one short line.

```python
squares = [n * n for n in range(1, 6)]
print(squares)       # [1, 4, 9, 16, 25]

evens = [n for n in range(10) if n % 2 == 0]
print(evens)         # [0, 2, 4, 6, 8]

words = ["apple", "kiwi", "banana"]
lengths = [len(w) for w in words]
print(lengths)       # [5, 4, 6]
```

## Same idea with a normal loop

```python
squares = []
for n in range(1, 6):
    squares.append(n * n)
```

## Dictionary and set comprehensions

```python
sq = {n: n * n for n in range(1, 4)}   # {1: 1, 2: 4, 3: 9}
unique = {c for c in "hello"}          # {'h', 'e', 'l', 'o'}
```
