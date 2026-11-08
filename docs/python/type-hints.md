---
title: Python Type Hints
sidebar_position: 27.8
---

# Python Type Hints

Type hints tell readers (and tools) what types a function expects. Python does not enforce them.

```python
def add(a: int, b: int) -> int:
    return a + b

name: str = "Ali"
scores: list[int] = [90, 85]
person: dict[str, int] = {"age": 20}

def find(items: list[str], key: str) -> str | None:
    return key if key in items else None
```

## Why use them?

- They make code easier to understand.
- Editors can warn you about mistakes.
- Tools such as `mypy` can check your whole project.
