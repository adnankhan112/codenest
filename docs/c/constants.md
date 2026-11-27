---
title: C Constants
sidebar_position: 8
---

# C Constants

A **constant** is a value that must never change while the program runs. Examples are the number of days in a week, the value of pi, or a tax rate.

## What you will learn

- How to create constants with `const` and `#define`
- The difference between the two
- Why constants make programs safer and easier to change

## Why use constants?

1. **Safety:** nobody can change the value by mistake.
2. **Readability:** `TAX_RATE` is clearer than `0.15`.
3. **Easy updates:** change the value in one place, not in fifty.

## Method 1: const

```c
#include <stdio.h>

int main() {
    const int DAYS_IN_WEEK = 7;
    printf("A week has %d days.\n", DAYS_IN_WEEK);
    return 0;
}
```

Output:

```
A week has 7 days.
```

If you try to change it, the compiler stops you:

```c
DAYS_IN_WEEK = 8;
```

```
error: assignment of read-only variable 'DAYS_IN_WEEK'
```

## Method 2: #define

`#define` is written at the top of the file, without `=` and without a semicolon.

```c
#include <stdio.h>

#define PI 3.14159

int main() {
    double r = 5.0;
    double area = PI * r * r;
    printf("Area: %.2f\n", area);
    return 0;
}
```

Output:

```
Area: 78.54
```

Before compiling, the preprocessor replaces every `PI` with `3.14159`.

## const or #define?

| Feature | const | #define |
|---------|-------|---------|
| Has a type | yes | no |
| Uses memory like a variable | yes | no |
| Needs a semicolon | yes | no |
| Written inside functions | yes | usually at the top |

For beginners, `const` is the safer choice.

## A real example: price with tax

```c
#include <stdio.h>

int main() {
    const double TAX_RATE = 0.15;
    double price = 200.0;
    double tax = price * TAX_RATE;
    double total = price + tax;

    printf("Tax: %.2f\n", tax);
    printf("Total: %.2f\n", total);
    return 0;
}
```

Output:

```
Tax: 30.00
Total: 230.00
```

## Literal constants

Values you write directly in code are also constants, like `10`, `3.5`, `'A'` and `"text"`.

## Naming style

Write constant names in CAPITAL letters with underscores, like `MAX_USERS`. Then everyone knows they never change.

## Common mistakes

- Writing `#define PI = 3.14;` The `=` and `;` are wrong here.
- Trying to change a `const` value.
- Forgetting to give a `const` a value when you create it.

## Key points

- Constants never change.
- `const` is typed and safe. `#define` is a simple text replacement.
- Use CAPITAL names for constants.

## Practice questions

1. Create a constant for the maximum number of attempts (3) and print it in a sentence.
2. Use `#define` for pi (3.14159) and print the circumference of a circle with radius 7.
3. What happens if you change a `const` variable?

<details>
<summary>Show answers</summary>

**1.**

```c
#include <stdio.h>

int main() {
    const int MAX_ATTEMPTS = 3;
    printf("You have %d attempts.\n", MAX_ATTEMPTS);
    return 0;
}
```

**2.**

```c
#include <stdio.h>

#define PI 3.14159

int main() {
    double r = 7.0;
    printf("Circumference: %.2f\n", 2 * PI * r);
    return 0;
}
```

This prints `Circumference: 43.98`.

**3.** The compiler gives an error and the program does not compile.

</details>
