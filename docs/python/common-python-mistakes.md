---
title: "Common Python Mistakes"
sidebar_position: 94
---

# Common Python Mistakes

## Theory

Everyone makes mistakes when learning Python. The good news is that most mistakes repeat. If you know them, you can avoid them. For each mistake below you will see the wrong code, the right code, and the reason.

### Mistake 1: A list as a default argument

```python
# Wrong
def add_item(item, items=[]):
    items.append(item)
    return items

print(add_item("a"))  # ['a']
print(add_item("b"))  # ['a', 'b']  (surprise!)
```

```python
# Right
def add_item(item, items=None):
    if items is None:
        items = []
    items.append(item)
    return items

print(add_item("a"))  # ['a']
print(add_item("b"))  # ['b']
```

**Why:** A default value is made only once, when the function is defined. The same list is then shared by all calls. Use `None` as the default and make a new list inside the function.

### Mistake 2: Using == to compare with None

```python
# Wrong
if value == None:
    print("empty")

# Right
if value is None:
    print("empty")
```

**Why:** `None` exists only once in Python, so the correct check is `is None`. Use `==` to compare values, and `is` only for `None`.

### Mistake 3: Forgetting that input() gives text

```python
# Wrong
age = input("Your age: ")
print(age + 1)   # TypeError

# Right
age = int(input("Your age: "))
print(age + 1)
```

**Why:** `input()` always returns text, even when the user types digits. Change it with `int()` or `float()` first.

### Mistake 4: Removing items from a list while looping over it

```python
# Wrong
numbers = [2, 4, 6]
for n in numbers:
    if n % 2 == 0:
        numbers.remove(n)
print(numbers)  # [4]  (not empty!)

# Right
numbers = [2, 4, 6]
numbers = [n for n in numbers if n % 2 != 0]
print(numbers)  # []
```

**Why:** When you remove an item, the other items move, and the loop skips some of them. Make a new list with a comprehension instead.

### Mistake 5: Thinking that b = a makes a copy

```python
# Wrong
a = [1, 2, 3]
b = a
b.append(4)
print(a)  # [1, 2, 3, 4]  (a changed too)

# Right
a = [1, 2, 3]
b = a.copy()
b.append(4)
print(a)  # [1, 2, 3]
```

**Why:** `b = a` gives the same list a second name. There is still only one list. Use `.copy()` (or `list(a)`) to make a real copy. For lists inside lists, use `copy.deepcopy`.

### Mistake 6: A bare except

```python
# Wrong
try:
    number = int(text)
except:
    print("Something went wrong")

# Right
try:
    number = int(text)
except ValueError:
    print("That is not a number")
```

**Why:** A bare `except:` catches every error, even ones you did not expect, and even the Ctrl+C key press. This hides real bugs. Catch only the error you expect.

### Mistake 7: Using a built-in name as a variable name

```python
# Wrong
list = [1, 2, 3]
print(list("abc"))   # TypeError: 'list' object is not callable

# Right
numbers = [1, 2, 3]
print(list("abc"))   # ['a', 'b', 'c']
```

**Why:** Names like `list`, `str`, `sum`, `max`, and `input` already mean something in Python. If you use them as variable names, you hide the real function.

### Mistake 8: Forgetting return

```python
# Wrong
def double(n):
    n * 2

print(double(5))   # None

# Right
def double(n):
    return n * 2

print(double(5))   # 10
```

**Why:** A function without `return` gives back `None`.

### Mistake 9: Forgetting self in a class

```python
# Wrong
class Dog:
    def bark():
        print("Woof")

Dog().bark()   # TypeError

# Right
class Dog:
    def bark(self):
        print("Woof")

Dog().bark()   # Woof
```

**Why:** Python passes the object itself as the first argument to every method. By convention, this first parameter is named `self`, and you must write it.

### Mistake 10: Mixing tabs and spaces

```python
def greet():
    print("Hello")
	print("World")   # this line starts with a tab
```

**Why:** Python uses the spaces at the start of a line to know which lines belong together. Mixing tabs and spaces gives an `IndentationError` or a `TabError`. Use 4 spaces for each level. Most editors, including VS Code, can do this for you.

### Mistake 11: Giving your file the name of a module

If you save your file as `random.py` and then write `import random`, Python imports **your own file** instead of the real module, and you get strange errors.

**Why:** Python looks in your current folder first. Choose a different file name, such as `random_game.py`, and delete the folder `__pycache__` if one was made.

### Mistake 12: Decimal math

```python
print(0.1 + 0.2)  # 0.30000000000000004
```

**Why:** Computers keep decimals in a way that is not always exact. To compare decimals use `round(value, 2)` or `math.isclose`. For money, count in the smallest unit (for example, paisa or cents) as whole numbers, or use the `decimal` module.

## Practical

### Exercise: find and fix the bugs

This code has four mistakes from the list above. Find them before you open the answer.

```python
def add_score(score, scores=[]):
    scores.append(score)
    return scores

total = input("Enter a number: ")
print(total + 1)

try:
    value = int(total)
except:
    print("Not a number")

if value == None:
    print("empty")
```

<details>
<summary>Show answer</summary>

The mistakes are: a list as a default argument, `input()` gives text so `total + 1` fails, a bare `except`, and `== None`.

```python
def add_score(score, scores=None):
    if scores is None:
        scores = []
    scores.append(score)
    return scores


text = input("Enter a number: ")

try:
    number = int(text)
except ValueError:
    print("Not a number")
else:
    print(number + 1)
```

The check `value == None` is not needed in the fixed code, because `int()` either gives a number or raises an error.

</details>

### Your turn

1. Put the fixed code in a file named `fixed.py` and run it with `python fixed.py`.
2. Type a number, then run it again and type some letters. Check that both cases work.
3. Write down three mistakes from this page that you have made before.

## Summary

- Use `None` as a default instead of an empty list.
- Use `is None`, not `== None`.
- `input()` always gives text. Change it with `int()` or `float()`.
- Do not change a list while you loop over it. Make a new list instead.
- `b = a` does not copy. Use `.copy()`.
- Catch the specific error you expect, never a bare `except`.
- Do not use built-in names for your variables or your file names.
- Always `return` the result, write `self` in methods, and use 4 spaces for indentation.
