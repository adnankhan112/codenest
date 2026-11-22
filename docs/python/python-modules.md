---
title: "Python Modules"
sidebar_position: -11
---

# Python Modules

A module is a file that holds Python code, such as functions and variables, that you can use in other programs. Python comes with many ready-made modules. This is called the standard library.

## Using a module with import

```python
import math

print(math.sqrt(25))   # 5.0
print(math.pi)         # 3.141592653589793
```

You write the module name, a dot, and then the thing you want.

## Importing only what you need

```python
from math import sqrt, pi

print(sqrt(16))  # 4.0
print(pi)        # 3.141592653589793
```

Now you write `sqrt` directly, without `math.`.

## Giving a short name

```python
import random as rnd

print(rnd.randint(1, 6))   # a random number from 1 to 6
```

## Some useful standard modules

| Module | What it does |
| --- | --- |
| `math` | Math tools such as `sqrt` |
| `random` | Random numbers and choices |
| `datetime` | Dates and time |
| `os` | Work with files and folders |
| `json` | Read and write JSON data |
| `pathlib` | Easy file paths |

## Making your own module

Any Python file is a module. Make a file named `greetings.py`:

```python
def hello(name):
    return f"Hello, {name}!"
```

Make another file, `main.py`, in the same folder:

```python
import greetings

print(greetings.hello("Ali"))   # Hello, Ali!
```

Run it with:

```text
python main.py
```

## See what is inside a module

```python
import math
print(dir(math))
```

`dir()` shows the names inside a module.

## A warning about file names

Do not name your own file the same as a module you want to use. A file named `random.py` hides the real `random` module, and gives strange errors. Choose a name like `random_game.py`.

## Packages from other people

You can also install modules made by other people with `pip`. See the chapter on packages and virtual environments.

## Try it yourself

1. Use `math.sqrt` to find the square root of 144.
2. Use `random.choice` to pick a random item from a list.
3. Make your own module with two functions and import it in another file.

## Quick summary

- A module is a Python file you can use in another file.
- Use `import module` or `from module import name`.
- `import module as short` gives a short name.
- Python has many ready modules, and you can make your own.
