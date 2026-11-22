---
title: "Modern Python"
sidebar_position: 90
---

# Modern Python

## Theory

### Python keeps improving

Python is a language that is easy to read and easy to learn. A new version of Python comes out every year, usually in October, and each version adds helpful features. Old Python 2 stopped receiving updates in 2020, so today everyone uses **Python 3**. When people say "modern Python", they mean the style of Python 3 that uses the newer features shown on this page.

:::tip
Before you use a new feature, check on [python.org](https://docs.python.org/3/) which Python version it needs. Some features below need Python 3.9 or newer, and one needs 3.10 or newer. This is written next to each feature.
:::

### Check your Python version

Open a terminal and type:

```text
python --version
```

If you see a version such as `Python 3.12.4`, you are ready. The exact number may be different on your computer.

### f-strings: put values inside text

An f-string starts with the letter `f` before the quotes. You can write a value or a small calculation inside curly brackets.

```python
name = "Ali"
price = 49.5

print(f"Hello, {name}!")
print(f"The price is {price:.2f} dollars")  # .2f means 2 digits after the point
print(f"Double the price is {price * 2}")
```

This is easier and cleaner than joining text with `+` or using `%`.

### Type hints: say what kind of value you expect

A type hint tells people (and your editor) what kind of value a variable or function uses. Python does not check hints while the program runs, but tools and editors use them to find mistakes early.

```python
def greet(name: str, times: int = 1) -> str:
    return ("Hello, " + name + "! ") * times

scores: list[int] = [90, 85, 70]
ages: dict[str, int] = {"Ali": 20, "Sara": 22}
```

- `list[int]` and `dict[str, int]` need Python 3.9 or newer.
- To say that a value can be text or `None`, write `str | None`. This needs Python 3.10 or newer.

### Dataclasses: short classes for data

When a class only keeps data, a **dataclass** writes the boring code for you.

```python
from dataclasses import dataclass

@dataclass
class Student:
    name: str
    age: int
    city: str = "Lahore"

ali = Student("Ali", 20)
print(ali)        # Student(name='Ali', age=20, city='Lahore')
print(ali.name)   # Ali
```

### pathlib: work with files and folders

Use `Path` from `pathlib` instead of joining file paths as text. The `/` sign joins parts of a path, and it works on Windows, Mac, and Linux.

```python
from pathlib import Path

notes = Path.home() / "Desktop" / "notes.txt"

notes.write_text("Python is fun\n", encoding="utf-8")
print(notes.read_text(encoding="utf-8"))
print(notes.exists())   # True
```

### The with statement: close files automatically

When you open a file, it must be closed again. The `with` statement does this for you, even if an error happens.

```python
with open("notes.txt", encoding="utf-8") as file:
    for line in file:
        print(line.strip())
```

### Comprehensions: short loops that make a collection

```python
numbers = [1, 2, 3, 4, 5]

doubled = [n * 2 for n in numbers]               # [2, 4, 6, 8, 10]
evens = [n for n in numbers if n % 2 == 0]       # [2, 4]
squares = {n: n * n for n in numbers}            # {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
```

### enumerate and zip

```python
names = ["Ali", "Sara", "Omar"]
marks = [80, 95, 70]

for number, name in enumerate(names, start=1):
    print(number, name)          # 1 Ali, 2 Sara, 3 Omar

for name, mark in zip(names, marks):
    print(f"{name} got {mark}")
```

Use `enumerate` when you need a counter. Do not write `range(len(names))`.

### Unpacking

Unpacking takes values out of a list or tuple in one line.

```python
first, second, *rest = [10, 20, 30, 40]
print(first)   # 10
print(second)  # 20
print(rest)    # [30, 40]

point = (3, 7)
x, y = point
```

### match and case (Python 3.10 or newer)

`match` checks a value against several patterns. It is like a clean `if` and `elif` chain.

```python
def describe(status: int) -> str:
    match status:
        case 200:
            return "OK"
        case 404:
            return "Not found"
        case _:
            return "Other"

print(describe(404))  # Not found
```

The `_` pattern means "anything else".

### Virtual environments and pip

A **virtual environment** is a private folder for the packages of one project, so projects do not disturb each other. `pip` installs packages.

```text
python -m venv .venv
.venv\Scripts\Activate.ps1
pip install requests
pip freeze > requirements.txt
```

On Windows PowerShell, if the activate command is blocked, run this once in the same terminal and try again:

```text
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

When your terminal line starts with `(.venv)`, the environment is active. Type `deactivate` to leave it.

### Start your program the right way

```python
def main() -> None:
    print("Hello from main")

if __name__ == "__main__":
    main()
```

The line `if __name__ == "__main__":` means "run this only when the file is started directly, not when another file imports it".

### Old things you should stop using

| Old (do not use) | Modern replacement |
| --- | --- |
| `print "Hello"` (Python 2) | `print("Hello")` |
| `"Hello %s" % name` | f-string: `f"Hello {name}"` |
| `file = open(...)` and `file.close()` | `with open(...) as file:` |
| `for i in range(len(items)):` | `for item in items:` or `enumerate` |
| `type(x) == int` | `isinstance(x, int)` |
| Joining paths as text | `Path` from `pathlib` |
| Writing `__init__` by hand for data classes | `@dataclass` |
| Installing packages everywhere | A virtual environment per project |

## Practical

### Exercise: update an old script

Here is a script written in the old style.

```python
names = ["ali", "sara", "omar"]
result = []
for i in range(len(names)):
    result.append("Hello, %s!" % names[i].upper())

f = open("greetings.txt", "w")
for line in result:
    f.write(line + "\n")
f.close()
```

Here is the modern version:

```python
from pathlib import Path

names = ["ali", "sara", "omar"]
result = [f"Hello, {name.upper()}!" for name in names]

Path("greetings.txt").write_text("\n".join(result) + "\n", encoding="utf-8")
```

### Your turn

1. Create a file named `modern.py` and copy the modern version into it.
2. Run it with this command, then open `greetings.txt` and read it:

```text
python modern.py
```

3. Add a new name to the list and run the program again.
4. Use a comprehension with a condition to keep only the names that have more than 3 letters.
5. Add type hints to a small function that makes the greeting text.

## Summary

- Python 3 is updated every year. Modern Python means Python 3 and its newer features.
- Use f-strings, type hints, dataclasses, and `pathlib`.
- Use `with` for files, and comprehensions, `enumerate`, and `zip` instead of long loops.
- Use `match` and `case` on Python 3.10 or newer.
- Use a virtual environment and `pip` for every project.
- Check [python.org](https://docs.python.org/3/) for the version a feature needs.
