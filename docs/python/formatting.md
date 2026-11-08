---
title: Python String Formatting
sidebar_position: 9.6
---

# Python String Formatting

## f-strings (best choice)

```python
name = "Ali"
price = 49.5
print(f"{name} paid {price}")
print(f"Total: {price * 2:.2f}")      # 2 decimal places
print(f"{1234567:,}")                 # 1,234,567
print(f"{name:>10}|")                 # right aligned
```

## The format method

```python
print("My name is {} and I am {}".format("Ali", 20))
print("{1} {0}".format("World", "Hello"))
```

## Percent style (older)

```python
print("Hello %s, you are %d" % ("Ali", 20))
```

Use f-strings in new code because they are short and easy to read.
