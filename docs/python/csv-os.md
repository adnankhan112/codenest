---
title: Python CSV and the os Module
sidebar_position: 25.5
---

# Python CSV and the os Module

## CSV files

```python
import csv

with open("students.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerow(["name", "marks"])
    writer.writerow(["Ali", 85])

with open("students.csv") as f:
    for row in csv.reader(f):
        print(row)
```

## The os module

```python
import os

print(os.getcwd())                 # current folder
print(os.listdir("."))             # files in a folder
print(os.path.exists("notes.txt"))
os.makedirs("data", exist_ok=True)
os.rename("old.txt", "new.txt")
os.remove("new.txt")
```

## pathlib (modern way)

```python
from pathlib import Path
p = Path("data") / "notes.txt"
print(p.exists())
```
