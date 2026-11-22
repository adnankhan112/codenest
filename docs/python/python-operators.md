---
title: "Python Operators"
sidebar_position: -24
---

# Python Operators

An operator is a sign that does something with values. For example, `+` adds two numbers.

## Arithmetic operators

These are for math: `+`, `-`, `*`, `/`, `//`, `%`, and `**`.

```python
print(7 + 3)   # 10
print(7 / 2)   # 3.5
print(7 // 2)  # 3
print(7 % 2)   # 1
print(2 ** 3)  # 8
```

## Assignment operators

They give a value to a variable. Many of them are short forms.

| Sign | Same as |
| --- | --- |
| `x = 5` | Put 5 in x |
| `x += 3` | `x = x + 3` |
| `x -= 3` | `x = x - 3` |
| `x *= 3` | `x = x * 3` |
| `x /= 3` | `x = x / 3` |
| `x //= 3` | `x = x // 3` |
| `x %= 3` | `x = x % 3` |
| `x **= 3` | `x = x ** 3` |

```python
score = 10
score += 5
print(score)  # 15
```

## Comparison operators

They compare two values and give `True` or `False`.

| Sign | Meaning |
| --- | --- |
| `==` | Equal to |
| `!=` | Not equal to |
| `>` | Greater than |
| `<` | Less than |
| `>=` | Greater than or equal to |
| `<=` | Less than or equal to |

```python
print(5 == 5)   # True
print(5 != 5)   # False
print(7 > 3)    # True
print(7 <= 3)   # False
```

Be careful: one equal sign `=` gives a value, and two equal signs `==` compare.

## Logical operators

They join conditions.

| Word | Meaning |
| --- | --- |
| `and` | True only if both are true |
| `or` | True if at least one is true |
| `not` | Changes True to False and False to True |

```python
age = 20
has_id = True

print(age >= 18 and has_id)   # True
print(age < 18 or has_id)     # True
print(not has_id)             # False
```

## Membership operators

`in` and `not in` check if a value is inside a group.

```python
fruits = ["apple", "banana"]

print("apple" in fruits)      # True
print("mango" not in fruits)  # True
```

## Identity operators

`is` checks if two names point to the very same object. The most common use is to check for `None`.

```python
value = None
print(value is None)      # True
print(value is not None)  # False
```

## Which one goes first?

Python does multiplication before addition, like in school. Use brackets to be clear.

```python
print(2 + 3 * 4)    # 14
print((2 + 3) * 4)  # 20
```

## Try it yourself

1. Use `+=` to add 10 to a variable that starts at 5.
2. Check if a number is between 1 and 100 using `and`.
3. Check if `"a"` is inside `"banana"`.

## Quick summary

- Arithmetic operators do math, and comparison operators give True or False.
- `and`, `or`, and `not` join conditions.
- `in` checks membership, and `is None` checks for nothing.
- Use brackets to control the order.
