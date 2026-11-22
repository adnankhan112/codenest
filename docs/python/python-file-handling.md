---
title: "Python File Handling"
sidebar_position: -9
---

# Python File Handling

Programs often need to save data in files and read it back. Python makes this easy with the `open()` function.

## Opening a file

```python
open("notes.txt", "r", encoding="utf-8")
```

The second part is the mode. It says what you want to do.

| Mode | Meaning |
| --- | --- |
| `"r"` | Read. It gives an error if the file does not exist. This is the default. |
| `"w"` | Write. It creates the file, or erases the old content. |
| `"a"` | Append. It adds to the end and keeps the old content. |
| `"x"` | Create a new file. It gives an error if the file exists. |

## Always use with

The `with` statement closes the file for you, even if an error happens.

```python
with open("notes.txt", "w", encoding="utf-8") as file:
    file.write("Hello, file!\n")
    file.write("This is the second line.\n")
```

`\n` means a new line.

## Reading a whole file

```python
with open("notes.txt", "r", encoding="utf-8") as file:
    content = file.read()

print(content)
```

```text
Hello, file!
This is the second line.
```

## Reading line by line

```python
with open("notes.txt", "r", encoding="utf-8") as file:
    for line in file:
        print(line.strip())
```

`strip()` removes the extra new line at the end of each line.

## Adding to a file

```python
with open("notes.txt", "a", encoding="utf-8") as file:
    file.write("A third line.\n")
```

## When the file does not exist

```python
try:
    with open("missing.txt", "r", encoding="utf-8") as file:
        print(file.read())
except FileNotFoundError:
    print("The file was not found")
```

## Checking if a file exists

```python
from pathlib import Path

if Path("notes.txt").exists():
    print("The file is there")
```

## A quick way with pathlib

```python
from pathlib import Path

path = Path("quick.txt")
path.write_text("Hi there\n", encoding="utf-8")
print(path.read_text(encoding="utf-8"))
```

See the chapter on CSV and the os module for more.

## Try it yourself

1. Write three of your favorite foods into a file, one per line.
2. Read the file and print each line with a number.
3. Add one more food to the end of the file.

## Quick summary

- Use `open(name, mode)`, and always use `with`.
- `"r"` reads, `"w"` writes and erases, and `"a"` adds to the end.
- Write `encoding="utf-8"` so every language shows correctly.
- Catch `FileNotFoundError` when the file may be missing.
