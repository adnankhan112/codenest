---
title: Python Range and Loop Control
sidebar_position: 19.5
---

# Python Range and Loop Control

## range()

```python
list(range(5))          # [0, 1, 2, 3, 4]
list(range(2, 6))       # [2, 3, 4, 5]
list(range(10, 0, -3))  # [10, 7, 4, 1]
```

## break, continue and pass

```python
for n in range(1, 8):
    if n == 3:
        continue     # skip 3
    if n == 6:
        break        # stop the loop
    print(n)

def todo():
    pass             # does nothing, keeps the code valid
```

## else with a loop

The `else` part runs only if the loop finished without `break`.

```python
for n in [1, 3, 5]:
    if n % 2 == 0:
        print("Found an even number")
        break
else:
    print("No even numbers")
```

## Nested loops

```python
for row in range(1, 4):
    for col in range(1, 4):
        print(row * col, end=" ")
    print()
```
