---
title: Python Context Managers
sidebar_position: 26.8
---

# Python Context Managers

The `with` statement sets something up and always cleans it up afterwards.

```python
with open("notes.txt", "w") as f:
    f.write("Hello")
# the file is closed here, even if an error happened
```

## Your own context manager

```python
class Timer:
    def __enter__(self):
        print("Start")
        return self

    def __exit__(self, exc_type, exc, tb):
        print("End")

with Timer():
    print("Working...")
```

## With contextlib

```python
from contextlib import contextmanager

@contextmanager
def box():
    print("[")
    yield
    print("]")

with box():
    print("inside")
```
