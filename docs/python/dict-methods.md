---
title: Python Dictionary Methods
sidebar_position: 16.5
---

# Python Dictionary Methods

```python
person = {"name": "Ali", "age": 20}

person.update({"city": "Lahore", "age": 21})
print(person.get("phone"))          # None
print(person.get("phone", "N/A"))   # N/A

print(person.pop("city"))           # removes and returns the value
person.setdefault("country", "PK")  # add only if missing

print(list(person.keys()))
print(list(person.values()))
print("name" in person)             # True

copy = person.copy()
person.clear()
```

## Looping

```python
for key, value in copy.items():
    print(key, "=", value)
```

## Nested dictionaries

```python
students = {
    "ali": {"age": 20, "marks": 85},
    "sara": {"age": 22, "marks": 91},
}
print(students["sara"]["marks"])   # 91
```
