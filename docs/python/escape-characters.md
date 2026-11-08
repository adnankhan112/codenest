---
title: Python Escape Characters
sidebar_position: 9.8
---

# Python Escape Characters

An escape character starts with a backslash and lets you write special characters inside a string.

| Code | Result |
| --- | --- |
| `\n` | New line |
| `\t` | Tab |
| `\\` | A backslash |
| `\"` | A double quote |
| `\'` | A single quote |

```python
print("Line one\nLine two")
print("Name:\tAli")
print("He said \"Hello\"")
print("C:\\Users\\Ali")
```

## Raw strings

Put `r` before the quotes to ignore escapes. This is useful for file paths.

```python
print(r"C:\new\table")
```
