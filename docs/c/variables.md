---
title: C Variables
sidebar_position: 6
---

# C Variables

A **variable** is a named box in the computer's memory that stores a value. Programs use variables to remember things like a score, a price or a name.

## What you will learn

- How to create (declare) a variable
- How to give it a value and change it later
- The rules for naming variables
- How to print variables

## Create a variable

The pattern is:

```
type name = value;
```

```c
#include <stdio.h>

int main() {
    int age = 20;
    float height = 5.9f;
    char grade = 'A';

    printf("Age: %d\n", age);
    printf("Height: %.1f\n", height);
    printf("Grade: %c\n", grade);
    return 0;
}
```

Output:

```
Age: 20
Height: 5.9
Grade: A
```

- `int` stores whole numbers.
- `float` stores decimal numbers.
- `char` stores one character, written in single quotes.

## Declare first, give a value later

```c
int score;      // declare: make the box
score = 10;     // assign: put a value in the box
```

## Change the value

```c
#include <stdio.h>

int main() {
    int score = 10;
    printf("Score: %d\n", score);

    score = 15;
    printf("Score: %d\n", score);
    return 0;
}
```

Output:

```
Score: 10
Score: 15
```

## Many variables of the same type

```c
#include <stdio.h>

int main() {
    int a = 1, b = 2, c = 3;
    printf("Sum: %d\n", a + b + c);
    return 0;
}
```

Output:

```
Sum: 6
```

## Naming rules

| Rule | Good example | Bad example |
|------|--------------|-------------|
| Use letters, digits and underscore | `total_marks` | `total-marks` |
| Do not start with a digit | `score1` | `1score` |
| No spaces | `first_name` | `first name` |
| Do not use keywords | `count` | `int`, `return` |
| Case matters | `Age` and `age` are different | |

Choose names that explain themselves, like `price` instead of `p`.

## Never use a variable before giving it a value

```c
int x;
printf("%d\n", x);   // x has a random garbage value!
```

A variable that you did not initialize holds a random old value. Always give your variables a starting value.

## Example: swap two values

To swap two boxes you need a third box to hold one value for a moment.

```c
#include <stdio.h>

int main() {
    int a = 5, b = 10, temp;

    temp = a;
    a = b;
    b = temp;

    printf("a = %d, b = %d\n", a, b);
    return 0;
}
```

Output:

```
a = 10, b = 5
```

## Common mistakes

- Using a variable that was never declared.
- Using a variable before giving it a value.
- Using the wrong specifier, like `%d` for a `float`.
- Writing `'Hello'` with single quotes. Text needs double quotes.

## Key points

- A variable has a **type**, a **name** and a **value**.
- Initialize variables when you create them.
- Names are case-sensitive and cannot start with a digit.

## Practice questions

1. Create variables for the width (8) and height (5) of a rectangle and print its area.
2. Which of these names are valid? `my_age`, `2cool`, `total price`, `Score`
3. Make `x = 4` and `y = 9`, then swap them and print both.

<details>
<summary>Show answers</summary>

**1.**

```c
#include <stdio.h>

int main() {
    int width = 8, height = 5;
    int area = width * height;
    printf("Area: %d\n", area);
    return 0;
}
```

**2.** Valid: `my_age` and `Score`. Invalid: `2cool` (starts with a digit) and `total price` (has a space).

**3.**

```c
#include <stdio.h>

int main() {
    int x = 4, y = 9, temp;
    temp = x;
    x = y;
    y = temp;
    printf("x = %d, y = %d\n", x, y);
    return 0;
}
```

</details>
