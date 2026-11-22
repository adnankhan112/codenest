---
title: "Python Exercises and Quiz"
sidebar_position: 91
---

# Python Exercises and Quiz

## Theory

### How to practice

Reading is not enough to learn programming. You must write code yourself. Follow these simple rules:

- Type the code with your own hands. Do not only copy and paste.
- Try the exercise first. Open the answer only after you have tried.
- If you get an error, read the message from the bottom up. The last line tells you the kind of error, and the line above it shows where it happened.
- Save your code in a `.py` file and run it with `python filename.py`.

Each chapter of the Python tutorial ends with a small exercise like the ones below. At the end of this page there is a quiz.

## Practical

### Chapter 1: Variables and f-strings

**Task:** Make a variable `course` with the value `"Python"` and a variable `lessons` with the value `0`. Add 1 to `lessons`. Print: `You finished 1 lesson of Python`.

<details>
<summary>Show answer</summary>

```python
course = "Python"
lessons = 0
lessons += 1
print(f"You finished {lessons} lesson of {course}")
```

</details>

### Chapter 2: Functions and type hints

**Task:** Write a function `is_adult` that takes an age (a number) and returns `True` if the age is 18 or more, otherwise `False`. Add type hints.

<details>
<summary>Show answer</summary>

```python
def is_adult(age: int) -> bool:
    return age >= 18

print(is_adult(20))  # True
print(is_adult(15))  # False
```

</details>

### Chapter 3: Lists and comprehensions

**Task:** You have `prices = [120, 80, 45, 200]`. Make a new list of the prices above 50, then find the total of that new list.

<details>
<summary>Show answer</summary>

```python
prices = [120, 80, 45, 200]
expensive = [price for price in prices if price > 50]
total = sum(expensive)

print(expensive)  # [120, 80, 200]
print(total)      # 400
```

</details>

### Chapter 4: Dictionaries

**Task:** Make a dictionary `student` with the keys `name`, `age`, and `city`. Print every key and value. Then make a copy of the dictionary with `age` changed to 21.

<details>
<summary>Show answer</summary>

```python
student = {"name": "Sara", "age": 20, "city": "Karachi"}

for key, value in student.items():
    print(key, value)

older = {**student, "age": 21}
print(older)
```

</details>

### Chapter 5: Files with pathlib

**Task:** Write the text `Python is fun` into a file named `notes.txt`, then read it back and print it.

<details>
<summary>Show answer</summary>

```python
from pathlib import Path

path = Path("notes.txt")
path.write_text("Python is fun\n", encoding="utf-8")
print(path.read_text(encoding="utf-8"))
```

</details>

### Chapter 6: Errors

**Task:** Ask the user for a number. If the user types something that is not a number, print `That is not a number`. Otherwise print the number doubled.

<details>
<summary>Show answer</summary>

```python
text = input("Enter a number: ")

try:
    number = int(text)
except ValueError:
    print("That is not a number")
else:
    print(f"Double is {number * 2}")
```

</details>

## Quiz

Choose your answer first, then click "Show answer".

**1. Which keyword is used to create a function?**

- A) `function`
- B) `def`
- C) `func`

<details>
<summary>Show answer</summary>

**B) `def`.** For example: `def greet(): ...`

</details>

**2. What is the result of `7 // 2`?**

- A) `3.5`
- B) `4`
- C) `3`

<details>
<summary>Show answer</summary>

**C) `3`.** The double slash `//` is floor division. It gives the whole part of the division. A single slash `7 / 2` gives `3.5`.

</details>

**3. What happens when you run `"5" + 5`?**

- A) It gives `10`
- B) It gives `"55"`
- C) It shows a `TypeError`

<details>
<summary>Show answer</summary>

**C) `TypeError`.** Python does not join text and a number by itself. Write `int("5") + 5` for `10`, or `"5" + str(5)` for `"55"`.

</details>

**4. What is the result of `[1, 2, 3][-1]`?**

- A) `1`
- B) `3`
- C) An error

<details>
<summary>Show answer</summary>

**B) `3`.** A negative index counts from the end of the list.

</details>

**5. What is the best way to open a file so that it is closed automatically?**

- A) `open(...)` and hope for the best
- B) `with open(...) as file:`
- C) `file.close()` before opening

<details>
<summary>Show answer</summary>

**B) `with open(...) as file:`.** The file is closed at the end of the block, even if an error happens.

</details>

**6. What is the result of `bool([])`?**

- A) `True`
- B) `False`
- C) `None`

<details>
<summary>Show answer</summary>

**B) `False`.** An empty list, an empty text, `0`, and `None` all count as false.

</details>

**7. What is the problem with `def add(item, items=[]):`?**

- A) Nothing, it is correct
- B) The same list is shared between all calls
- C) It does not run in Python 3

<details>
<summary>Show answer</summary>

**B) The same list is shared between all calls.** The default list is made only once. Use `items=None` and make a new list inside the function.

</details>

**8. What does `list(range(3))` give?**

- A) `[1, 2, 3]`
- B) `[0, 1, 2]`
- C) `[0, 1, 2, 3]`

<details>
<summary>Show answer</summary>

**B) `[0, 1, 2]`.** `range(3)` starts at 0 and stops before 3.

</details>

## Summary

- Type the code yourself and try before you open the answer.
- Each chapter has a small exercise, and the quiz checks the main ideas.
- Read error messages slowly. The last line names the error.
- If you got 6 or more answers right, you are ready for the next chapter.
