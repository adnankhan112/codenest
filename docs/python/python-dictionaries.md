---
title: "Python Dictionaries"
sidebar_position: -18
---

# Python Dictionaries

A dictionary keeps data in pairs: a key and a value. You use the key to find the value, like you use a word to find its meaning in a real dictionary.

```python
student = {
    "name": "Ali",
    "age": 20,
    "city": "Lahore",
}

print(student)  # {'name': 'Ali', 'age': 20, 'city': 'Lahore'}
```

Keys must be unique. Since Python 3.7, a dictionary keeps the order in which items were added.

## Getting a value

```python
print(student["name"])        # Ali
print(student.get("age"))     # 20
print(student.get("phone"))   # None
print(student.get("phone", "not given"))  # not given
```

If you write `student["phone"]` and the key is missing, Python shows a `KeyError`. The `get()` method is safer, because it gives `None` or a default value.

## Adding and changing

```python
student["age"] = 21          # change
student["email"] = "ali@example.com"  # add a new pair
```

## Removing

```python
del student["city"]
age = student.pop("age")     # remove and give the value back
print(age)  # 21
```

## Checking a key

`in` checks the keys, not the values.

```python
print("name" in student)   # True
print("Ali" in student)    # False
```

## Looping

```python
student = {"name": "Ali", "age": 20}

for key in student:
    print(key)               # name, then age

for value in student.values():
    print(value)             # Ali, then 20

for key, value in student.items():
    print(key, value)        # name Ali, then age 20
```

## A dictionary inside a dictionary

```python
users = {
    "ali": {"age": 20},
    "sara": {"age": 22},
}
print(users["sara"]["age"])  # 22
```

## Length

```python
print(len(student))  # 2
```

See the chapter on dictionary methods for more tools.

## Try it yourself

1. Make a dictionary for a book with `title`, `author`, and `year`.
2. Change the year and add a new key `pages`.
3. Print every key and value with a loop.

## Quick summary

- A dictionary keeps key and value pairs, written with curly brackets.
- Use `[key]` or `get(key)` to read a value.
- `get()` does not crash when the key is missing.
- Use `items()` to loop over both keys and values.
