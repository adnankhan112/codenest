---
title: "Python If...Else"
sidebar_position: -22
---

# Python If...Else

A program must often make a decision. The `if` statement runs some code only when a condition is true.

## The if statement

```python
age = 20

if age >= 18:
    print("You are an adult")
```

Remember the colon `:` at the end of the `if` line, and the 4 spaces before the code inside.

## else

`else` runs when the condition is not true.

```python
age = 15

if age >= 18:
    print("You are an adult")
else:
    print("You are a minor")   # this line runs
```

## elif

`elif` means "else if". Use it to check many conditions. Python checks them from top to bottom and stops at the first true one.

```python
marks = 75

if marks >= 90:
    grade = "A"
elif marks >= 70:
    grade = "B"
elif marks >= 50:
    grade = "C"
else:
    grade = "F"

print(grade)  # B
```

## Joining conditions

```python
age = 25
has_ticket = True

if age >= 18 and has_ticket:
    print("You can enter")
```

## if inside if

```python
number = 12

if number > 0:
    if number % 2 == 0:
        print("Positive and even")
```

## A short form on one line

```python
age = 20
status = "adult" if age >= 18 else "minor"
print(status)  # adult
```

## An empty if

If you must write an `if` but have no code yet, write `pass`.

```python
if age > 100:
    pass
```

## Try it yourself

1. Ask for a number and print if it is positive, negative, or zero.
2. Write a program that gives a grade A, B, C, or F from marks.
3. Check if a year is a leap year: it must divide by 4, but if it divides by 100 it must also divide by 400.

## Quick summary

- `if`, `elif`, and `else` let your program choose.
- Python checks from top to bottom and stops at the first true condition.
- Always write a colon and indent the code inside.
