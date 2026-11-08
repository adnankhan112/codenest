---
title: Python Custom Exceptions
sidebar_position: 26.5
---

# Python Custom Exceptions

You can create your own error types by extending `Exception`.

```python
class AgeError(Exception):
    pass

def set_age(age):
    if age < 0:
        raise AgeError("Age cannot be negative")
    return age

try:
    set_age(-3)
except AgeError as e:
    print("Problem:", e)
```

## Common built-in exceptions

| Exception | When it happens |
| --- | --- |
| `ValueError` | Right type, wrong value |
| `TypeError` | Wrong type |
| `KeyError` | Missing dictionary key |
| `IndexError` | List index out of range |
| `FileNotFoundError` | File does not exist |
| `ZeroDivisionError` | Division by zero |
