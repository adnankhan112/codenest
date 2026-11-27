---
title: C Data Types
sidebar_position: 7
---

# C Data Types

A **data type** tells C what kind of value a variable can store and how much memory it needs. Choosing the right type makes your program correct and efficient.

## What you will learn

- The basic types: `int`, `float`, `double` and `char`
- How much memory each type uses
- What `unsigned`, `long` and `bool` are
- How characters are stored as numbers

## The basic types

| Type | Stores | Example value | Specifier |
|------|--------|---------------|-----------|
| `int` | whole numbers | `25` | `%d` |
| `float` | decimals (about 6 digits) | `3.14f` | `%f` |
| `double` | decimals (about 15 digits) | `3.14159265` | `%lf` or `%f` |
| `char` | one character | `'A'` | `%c` |

```c
#include <stdio.h>

int main() {
    int count = 10;
    float price = 4.5f;
    double pi = 3.14159265;
    char letter = 'B';

    printf("Count: %d\n", count);
    printf("Price: %.1f\n", price);
    printf("Pi: %.8f\n", pi);
    printf("Letter: %c\n", letter);
    return 0;
}
```

Output:

```
Count: 10
Price: 4.5
Pi: 3.14159265
Letter: B
```

## How much memory does each type use?

The `sizeof` operator tells you the size in **bytes**.

```c
#include <stdio.h>

int main() {
    printf("char: %d byte\n", (int)sizeof(char));
    printf("int: %d bytes\n", (int)sizeof(int));
    printf("float: %d bytes\n", (int)sizeof(float));
    printf("double: %d bytes\n", (int)sizeof(double));
    return 0;
}
```

Output:

```
char: 1 byte
int: 4 bytes
float: 4 bytes
double: 8 bytes
```

These sizes are the same on most computers. Some types, like `long`, can be different on different systems.

## float or double?

A `double` keeps more digits than a `float`, so it is more accurate.

```c
#include <stdio.h>

int main() {
    float f = 0.1f;
    double d = 0.1;
    printf("float : %.10f\n", f);
    printf("double: %.10f\n", d);
    return 0;
}
```

Output:

```
float : 0.1000000015
double: 0.1000000000
```

Use `double` for most decimal work.

## Characters are numbers

A `char` is stored as a small number (its ASCII code). `'A'` is 65, `'B'` is 66 and `'a'` is 97.

```c
#include <stdio.h>

int main() {
    char c = 'A';
    printf("%c = %d\n", c, c);
    printf("Next letter: %c\n", c + 1);
    return 0;
}
```

Output:

```
A = 65
Next letter: B
```

## Bigger and smaller numbers

- `short` uses less memory for small numbers.
- `long long` stores very large whole numbers.
- `unsigned` allows only zero and positive numbers, so it can go twice as high.

```c
#include <stdio.h>
#include <limits.h>

int main() {
    long long big = 9000000000LL;
    printf("Biggest int: %d\n", INT_MAX);
    printf("Big number: %lld\n", big);
    return 0;
}
```

Output:

```
Biggest int: 2147483647
Big number: 9000000000
```

`int` cannot hold 9000000000, so we used `long long` and the `%lld` specifier.

## True and false with bool

Include `stdbool.h` to use `bool`, `true` and `false`.

```c
#include <stdio.h>
#include <stdbool.h>

int main() {
    bool isOpen = true;
    printf("isOpen = %d\n", isOpen);
    return 0;
}
```

Output:

```
isOpen = 1
```

## Common mistakes

- Using `int` for money or measurements with decimals. Use `double`.
- Storing a number that is too big for the type.
- Using `%d` to print a `float` or `double`.
- Writing `"A"` (text) when you mean `'A'` (one character).

## Key points

- `int` is for whole numbers, `double` for decimals and `char` for characters.
- `sizeof` shows the memory a type uses.
- A `char` is really a number.
- Use `long long` for very large whole numbers.

## Practice questions

1. Store a name initial, an age and a GPA in suitable types and print them.
2. Print the ASCII code of the letter `a`.
3. Which type would you use to store a population of 3 billion?

<details>
<summary>Show answers</summary>

**1.**

```c
#include <stdio.h>

int main() {
    char initial = 'A';
    int age = 21;
    double gpa = 3.75;
    printf("%c %d %.2f\n", initial, age, gpa);
    return 0;
}
```

**2.**

```c
#include <stdio.h>

int main() {
    printf("%d\n", 'a');
    return 0;
}
```

This prints `97`.

**3.** `long long`, because 3 billion is bigger than the largest `int`.

</details>
