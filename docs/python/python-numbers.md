---
title: "Python Numbers"
sidebar_position: -26
---

# Python Numbers

Python has two main kinds of numbers.

- `int` is a whole number, such as `5`, `-12`, or `1000`.
- `float` is a number with a decimal point, such as `3.14` or `-0.5`.

```python
a = 10
b = 2.5

print(type(a))  # <class 'int'>
print(type(b))  # <class 'float'>
```

An `int` can be as big as you want. Python has no small limit.

For big numbers, you can use underscores to make them easy to read:

```python
population = 1_000_000
print(population)  # 1000000
```

## Math with numbers

| Sign | Name | Example | Result |
| --- | --- | --- | --- |
| `+` | Add | `7 + 3` | `10` |
| `-` | Subtract | `7 - 3` | `4` |
| `*` | Multiply | `7 * 3` | `21` |
| `/` | Divide (always gives a float) | `7 / 2` | `3.5` |
| `//` | Divide and keep the whole part | `7 // 2` | `3` |
| `%` | Remainder | `7 % 2` | `1` |
| `**` | Power | `2 ** 3` | `8` |

```python
print(10 / 2)   # 5.0
print(10 // 3)  # 3
print(10 % 3)   # 1
print(2 ** 10)  # 1024
```

The remainder `%` is useful to check even and odd numbers. If `n % 2` is 0, the number is even.

## Useful number functions

```python
print(abs(-5))          # 5
print(round(3.14159, 2))  # 3.14
print(pow(2, 3))        # 8
print(max(4, 9, 2))     # 9
print(min(4, 9, 2))     # 2
```

## More math: the math module

```python
import math

print(math.sqrt(16))   # 4.0
print(math.pi)         # 3.141592653589793
print(math.ceil(4.1))  # 5
print(math.floor(4.9)) # 4
```

## Decimal numbers are not always exact

```python
print(0.1 + 0.2)  # 0.30000000000000004
```

This happens in every programming language, because computers keep decimals in a special way. Use `round(value, 2)` to show a clean result.

## Try it yourself

1. Find the remainder of 17 divided by 5.
2. Check if 24 is even, using `%`.
3. Calculate the area of a circle with radius 5, using `math.pi`. Round the answer to 2 digits.

## Quick summary

- `int` is a whole number, and `float` has a decimal point.
- `/` always gives a float, and `//` gives the whole part.
- `%` gives the remainder, and `**` gives the power.
- Use `round()` to clean up decimals.
