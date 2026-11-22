---
title: "Python While Loops"
sidebar_position: -17
---

# Python While Loops

A loop runs the same code again and again. A `while` loop keeps running as long as its condition is true.

```python
count = 1

while count <= 3:
    print(count)
    count += 1
```

```text
1
2
3
```

Step by step: Python checks `count <= 3`. It is true, so it prints and adds 1. It checks again. When `count` becomes 4, the condition is false and the loop stops.

## Do not forget to change the variable

If nothing changes the variable, the loop never ends. This is called an infinite loop. If this happens, press `Ctrl + C` in the terminal to stop the program.

```python
count = 1
while count <= 3:
    print(count)
    # count += 1 is missing, so this never stops
```

## break: stop the loop

`break` ends the loop at once.

```python
number = 1

while True:
    if number > 5:
        break
    print(number)
    number += 1
```

This prints 1, 2, 3, 4, and 5.

## continue: skip to the next round

`continue` skips the rest of the code in this round.

```python
number = 0

while number < 5:
    number += 1
    if number == 3:
        continue
    print(number)
```

This prints 1, 2, 4, and 5. The number 3 is skipped.

## A loop that asks until the answer is right

```python
password = ""

while password != "python":
    password = input("Enter the password: ")

print("Welcome!")
```

## else on a loop

The `else` part runs when the loop ends in a normal way, without `break`.

```python
n = 1
while n < 3:
    print(n)
    n += 1
else:
    print("Loop finished")
```

## Try it yourself

1. Print the numbers from 10 down to 1.
2. Add up the numbers from 1 to 100 with a `while` loop. The answer is 5050.
3. Write a loop that asks for a number until the user types `0`.

## Quick summary

- `while` repeats code as long as the condition is true.
- Always change the variable, or the loop never ends.
- `break` stops the loop, and `continue` skips to the next round.
