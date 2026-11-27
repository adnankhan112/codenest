---
title: C If Else
sidebar_position: 11
---

# C If Else

Real programs must make **decisions**: if the marks are high, print a good grade; if the password is wrong, show an error. In C we make decisions with `if`, `else if` and `else`.

## What you will learn

- How to use `if`, `else if` and `else`
- How to combine conditions with `&&` and `||`
- How to nest conditions and use the short `?:` form
- The famous mistake of using `=` instead of `==`

## The if statement

The code inside `{ }` runs only when the condition is **true**.

```c
#include <stdio.h>

int main() {
    int age = 20;

    if (age >= 18) {
        printf("You can vote.\n");
    }
    return 0;
}
```

Output:

```
You can vote.
```

## if ... else

```c
#include <stdio.h>

int main() {
    int age = 15;

    if (age >= 18) {
        printf("You can vote.\n");
    } else {
        printf("You are too young to vote.\n");
    }
    return 0;
}
```

Output:

```
You are too young to vote.
```

## else if: many choices

C checks the conditions from top to bottom and runs only the **first** one that is true.

```c
#include <stdio.h>

int main() {
    int marks = 72;

    if (marks >= 80) {
        printf("Grade A\n");
    } else if (marks >= 60) {
        printf("Grade B\n");
    } else if (marks >= 40) {
        printf("Grade C\n");
    } else {
        printf("Fail\n");
    }
    return 0;
}
```

Output:

```
Grade B
```

## What is true and false in C?

- `0` means **false**.
- Any other number means **true**.
- Comparisons like `age >= 18` give `1` (true) or `0` (false).

## Combine conditions

```c
#include <stdio.h>

int main() {
    int age = 25;
    int hasLicense = 1;

    if (age >= 18 && hasLicense) {
        printf("You can drive.\n");
    }
    if (age < 18 || !hasLicense) {
        printf("You cannot drive.\n");
    }
    return 0;
}
```

Output:

```
You can drive.
```

## Nested if

An `if` inside another `if`.

```c
#include <stdio.h>

int main() {
    int number = 12;

    if (number > 0) {
        if (number % 2 == 0) {
            printf("Positive and even\n");
        } else {
            printf("Positive and odd\n");
        }
    } else {
        printf("Zero or negative\n");
    }
    return 0;
}
```

Output:

```
Positive and even
```

## The short form: ternary operator

`condition ? value_if_true : value_if_false`

```c
#include <stdio.h>

int main() {
    int a = 7, b = 12;
    int bigger = (a > b) ? a : b;
    printf("Bigger number: %d\n", bigger);
    return 0;
}
```

Output:

```
Bigger number: 12
```

## Example: leap year

A year is a leap year if it is divisible by 4, but not by 100, unless it is also divisible by 400.

```c
#include <stdio.h>

int main() {
    int year = 2024;

    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        printf("%d is a leap year.\n", year);
    } else {
        printf("%d is not a leap year.\n", year);
    }
    return 0;
}
```

Output:

```
2024 is a leap year.
```

## Common mistakes

- **Using `=` instead of `==`.** `if (x = 5)` puts 5 into `x` and is always true. Write `if (x == 5)`.
- **A semicolon after the condition.** `if (x > 5);` ends the `if` right there, so the block below always runs.
- **Skipping the braces.** Without `{ }` only the very next line belongs to the `if`. Always use braces.
- **Wrong order in an else-if ladder.** Check the strictest condition first.

## Key points

- `if` runs code when a condition is true.
- `else if` and `else` handle the other cases.
- Use `==` to compare and `=` to assign.
- `&&` means and, `||` means or, `!` means not.

## Practice questions

1. Check whether the number `-5` is positive, negative or zero.
2. Find the largest of three numbers: 14, 31 and 22.
3. What is wrong with `if (score = 100)`?

<details>
<summary>Show answers</summary>

**1.**

```c
#include <stdio.h>

int main() {
    int n = -5;
    if (n > 0) {
        printf("Positive\n");
    } else if (n < 0) {
        printf("Negative\n");
    } else {
        printf("Zero\n");
    }
    return 0;
}
```

**2.**

```c
#include <stdio.h>

int main() {
    int a = 14, b = 31, c = 22;
    int largest = a;
    if (b > largest) {
        largest = b;
    }
    if (c > largest) {
        largest = c;
    }
    printf("Largest: %d\n", largest);
    return 0;
}
```

**3.** It uses `=` (assignment) instead of `==` (comparison). It puts 100 into `score`, and the condition is always true.

</details>
