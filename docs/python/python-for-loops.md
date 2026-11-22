---
title: "Python For Loops"
sidebar_position: -16
---

# Python For Loops

A `for` loop goes through the items of a group, one by one. Use it when you know what you want to loop over.

## Looping over a list

```python
fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    print(fruit)
```

```text
apple
banana
cherry
```

In each round, the variable `fruit` holds the next item.

## Looping over a string

```python
for letter in "Hi!":
    print(letter)
```

This prints `H`, `i`, and `!`, each on its own line.

## Looping a number of times with range

`range()` makes a row of numbers. It starts at 0 and stops before the end number.

```python
for i in range(3):
    print(i)       # 0, 1, 2

for i in range(1, 4):
    print(i)       # 1, 2, 3

for i in range(0, 10, 5):
    print(i)       # 0, 5
```

The third number is the step. See the chapter on range and loop control for more.

## Getting the number and the item: enumerate

```python
names = ["Ali", "Sara"]

for number, name in enumerate(names, start=1):
    print(number, name)
```

```text
1 Ali
2 Sara
```

## Looping over a dictionary

```python
ages = {"Ali": 20, "Sara": 22}

for name, age in ages.items():
    print(name, age)
```

## break and continue

```python
for n in range(1, 10):
    if n == 3:
        continue     # skip 3
    if n == 6:
        break        # stop at 6
    print(n)
```

This prints 1, 2, 4, and 5.

## A loop inside a loop

```python
for row in range(1, 3):
    for column in range(1, 4):
        print(row * column, end=" ")
    print()
```

```text
1 2 3 
2 4 6 
```

## Adding numbers

```python
total = 0
for number in [10, 20, 30]:
    total += number

print(total)  # 60
```

## Try it yourself

1. Print the multiplication table of 5, from 5 x 1 to 5 x 10.
2. Print only the even numbers from 1 to 20.
3. Count how many vowels are in the word `"education"`.

## Quick summary

- A `for` loop goes through each item of a list, string, range, or dictionary.
- `range(3)` gives 0, 1, 2.
- `enumerate()` gives the number and the item together.
- A loop can be inside another loop.
