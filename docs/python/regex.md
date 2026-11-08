---
title: Python Regular Expressions
sidebar_position: 27.5
---

# Python Regular Expressions

A regular expression (regex) describes a text pattern.

```python
import re

text = "Call 0300-1234567 or 0321-7654321"

print(re.findall(r"\d{4}-\d{7}", text))
print(re.search(r"Call", text) is not None)
print(re.sub(r"\d", "#", "Room 42"))      # Room ##
print(re.split(r"[,;]", "a,b;c"))         # ['a', 'b', 'c']

email = "ali@example.com"
if re.fullmatch(r"[\w.]+@[\w.]+\.\w+", email):
    print("Looks like an email")
```

| Pattern | Meaning |
| --- | --- |
| `\d` | A digit |
| `\w` | A letter, digit or underscore |
| `\s` | A space |
| `.` | Any character |
| `+` | One or more |
| `*` | Zero or more |
| `{n}` | Exactly n times |
