---
title: Python String Slicing
sidebar_position: 9.3
---

# Python String Slicing

Slicing means taking a part of a string. The format is `text[start:stop:step]`.

```python
text = "Programming"

print(text[0:4])    # Prog
print(text[3:])     # gramming
print(text[:3])     # Pro
print(text[-3:])    # ing
print(text[::2])    # Pormig (every second letter)
print(text[::-1])   # gnimmargorP (reversed)
```

## Rules

- The first index is 0.
- The `stop` index is **not** included.
- Negative numbers count from the end.
- Slicing never changes the original string.
