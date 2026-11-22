---
title: "Python Lists"
sidebar_position: -21
---

# Python Lists

A list keeps many values in one variable. A list is ordered, you can change it, and it can hold any types.

```python
fruits = ["apple", "banana", "cherry"]
mixed = [1, "two", 3.0, True]
print(fruits)  # ['apple', 'banana', 'cherry']
```

## Getting items

The first item has the number 0. A negative number counts from the end.

```python
fruits = ["apple", "banana", "cherry"]

print(fruits[0])    # apple
print(fruits[2])    # cherry
print(fruits[-1])   # cherry
print(len(fruits))  # 3
```

## Changing items

```python
fruits[1] = "mango"
print(fruits)  # ['apple', 'mango', 'cherry']
```

## Adding and removing

```python
fruits = ["apple", "banana"]

fruits.append("cherry")      # add at the end
fruits.insert(0, "kiwi")     # add at a place
print(fruits)  # ['kiwi', 'apple', 'banana', 'cherry']

fruits.remove("apple")       # remove by value
last = fruits.pop()          # remove the last item and give it back
print(last)    # cherry
print(fruits)  # ['kiwi', 'banana']
```

## Checking an item

```python
print("kiwi" in fruits)   # True
```

## Looping through a list

```python
for fruit in fruits:
    print(fruit)
```

## A list inside a list

```python
table = [[1, 2], [3, 4]]
print(table[1][0])  # 3
```

## Copying a list

Writing `b = a` does not make a copy. Both names point to the same list. Use `copy()`.

```python
a = [1, 2, 3]
b = a.copy()
b.append(4)

print(a)  # [1, 2, 3]
print(b)  # [1, 2, 3, 4]
```

See the chapters on list methods and list comprehension for more tools.

## Try it yourself

1. Make a list of five of your favorite foods and print the third one.
2. Add one more food and remove the first one.
3. Use a loop to print every item in capital letters.

## Quick summary

- A list is written with square brackets, and items are numbered from 0.
- `append`, `insert`, `remove`, and `pop` change a list.
- Use `copy()` to make a real copy.
