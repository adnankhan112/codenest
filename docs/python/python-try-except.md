---
title: "Python Try Except"
sidebar_position: -10
---

# Python Try Except

Sometimes a program meets an error while it runs. For example, a user may type letters when you ask for a number. Without help, the program crashes. With `try` and `except`, you can catch the error and keep your program running.

## A program that crashes

```python
number = int("hello")
```

```text
ValueError: invalid literal for int() with base 10: 'hello'
```

## Catching the error

```python
try:
    number = int("hello")
except ValueError:
    print("That is not a number")
```

```text
That is not a number
```

Python tries the code inside `try`. If a `ValueError` happens, it jumps to `except`.

## Common errors

| Error | When it happens |
| --- | --- |
| `ValueError` | The value has the right type but a wrong content, such as `int("abc")` |
| `TypeError` | The type is wrong, such as `"5" + 5` |
| `ZeroDivisionError` | You divide by zero |
| `KeyError` | A dictionary key is missing |
| `IndexError` | A list number is too big |
| `FileNotFoundError` | A file does not exist |

## Catching many errors

```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("You cannot divide by zero")
except ValueError:
    print("Wrong value")
```

You can see the error message with `as`:

```python
try:
    result = 10 / 0
except ZeroDivisionError as error:
    print(error)   # division by zero
```

## else and finally

- `else` runs only if there was no error.
- `finally` always runs, with or without an error. It is good for clean-up work.

```python
try:
    number = int("42")
except ValueError:
    print("Not a number")
else:
    print(f"Double is {number * 2}")   # Double is 84
finally:
    print("Done")                      # Done
```

## Asking again until the input is right

```python
while True:
    text = input("Enter a number: ")
    try:
        number = int(text)
        break
    except ValueError:
        print("Please type digits only")

print(f"You typed {number}")
```

## Making your own error with raise

```python
def set_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative")
    return age
```

## A good habit

Catch only the error you expect. Do not write a bare `except:` with nothing after it, because it hides real bugs. See the chapter on custom exceptions for more.

## Try it yourself

1. Ask for two numbers and divide them. Catch the division by zero.
2. Catch the error when a user types letters instead of a number.
3. Try to open a file that does not exist and catch `FileNotFoundError`.

## Quick summary

- Put risky code in `try`, and handle the problem in `except`.
- Name the error you expect, such as `ValueError`.
- `else` runs when there is no error, and `finally` always runs.
- `raise` makes an error on purpose.
