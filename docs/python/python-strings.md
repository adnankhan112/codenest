---
title: "Python Strings"
sidebar_position: -25
---

# Python Strings

A string is text. You write it inside single quotes or double quotes. Both work the same.

```python
a = "Hello"
b = 'World'
print(a, b)  # Hello World
```

## Text on many lines

Use three quotes for text that covers many lines.

```python
poem = """Roses are red,
Violets are blue."""
print(poem)
```

## Length and characters

```python
word = "Python"

print(len(word))   # 6
print(word[0])     # P  (the first character)
print(word[-1])    # n  (the last character)
```

The first character has the number 0. A negative number counts from the end.

## Joining and repeating

```python
first = "Code"
second = "Nest"

print(first + second)   # CodeNest
print(first + " " + second)  # Code Nest
print("ab" * 3)         # ababab
```

## Check if text is inside text

```python
text = "I love Python"

print("Python" in text)   # True
print("Java" in text)     # False
```

## Useful string methods

A method is a function that belongs to a value. You write it after a dot.

| Method | What it does | Example | Result |
| --- | --- | --- | --- |
| `upper()` | Makes all letters capital | `"hi".upper()` | `HI` |
| `lower()` | Makes all letters small | `"HI".lower()` | `hi` |
| `title()` | Capital first letter of each word | `"hello world".title()` | `Hello World` |
| `strip()` | Removes spaces at both ends | `"  hi  ".strip()` | `hi` |
| `replace()` | Replaces a part of the text | `"cat".replace("c", "b")` | `bat` |
| `split()` | Cuts text into a list | `"a,b,c".split(",")` | `['a', 'b', 'c']` |
| `join()` | Joins a list into text | `"-".join(["a", "b"])` | `a-b` |
| `find()` | Gives the place of a part, or -1 | `"hello".find("l")` | `2` |
| `count()` | Counts a part | `"hello".count("l")` | `2` |
| `startswith()` | Checks the start | `"hello".startswith("he")` | `True` |
| `endswith()` | Checks the end | `"hello".endswith("lo")` | `True` |

## Strings cannot be changed

You cannot change one letter inside a string. You make a new string instead.

```python
word = "cat"
# word[0] = "b"   # this gives a TypeError

word = "b" + word[1:]
print(word)  # bat
```

See the chapters on string slicing and string formatting for more.

## Try it yourself

1. Ask for your name with a variable, then print it in capital letters.
2. Count how many times the letter `a` is in `"banana"`.
3. Change `"I like cats"` into `"I like dogs"` with `replace()`.

## Quick summary

- A string is text inside quotes.
- `len()` gives the length, and `[0]` gives the first character.
- Use `+` to join and `in` to check.
- Methods such as `upper()`, `strip()`, `replace()`, and `split()` change text into new text.
