---
title: C Functions
sidebar_position: 18
---

# C Functions

A **function** is a named block of code that does one job. You write it once and use it many times. Functions make programs shorter, cleaner and easier to fix. You have already used functions like `printf` and `main`. Now you will create your own.

## What you will learn

- How to create and call a function
- Parameters and return values
- Function prototypes
- Why changes inside a function do not change the original variable

## A function without values

```c
#include <stdio.h>

void greet() {
    printf("Welcome to CodeNest!\n");
}

int main() {
    greet();
    greet();
    return 0;
}
```

Output:

```
Welcome to CodeNest!
Welcome to CodeNest!
```

- `void` means the function returns nothing.
- `greet()` is the name.
- Writing `greet();` **calls** the function.

## Parameters and return value

A function can receive values (**parameters**) and send a result back (**return value**).

```
return_type name(type parameter1, type parameter2) {
    // code
    return value;
}
```

```c
#include <stdio.h>

int add(int a, int b) {
    return a + b;
}

int main() {
    int result = add(4, 6);
    printf("4 + 6 = %d\n", result);
    return 0;
}
```

Output:

```
4 + 6 = 10
```

When we call `add(4, 6)`, `a` becomes 4 and `b` becomes 6. The function sends back 10 with `return`, and `result` receives it.

## Function prototype

C reads your file from top to bottom. If a function is written **after** `main`, you must announce it first with a **prototype**.

```c
#include <stdio.h>

int square(int n);

int main() {
    printf("Square of 9 = %d\n", square(9));
    return 0;
}

int square(int n) {
    return n * n;
}
```

Output:

```
Square of 9 = 81
```

## Example: a function that returns a decimal

```c
#include <stdio.h>

double celsiusToFahrenheit(double c) {
    return c * 9 / 5 + 32;
}

int main() {
    printf("100 C = %.2f F\n", celsiusToFahrenheit(100));
    return 0;
}
```

Output:

```
100 C = 212.00 F
```

## Example: reuse a function

```c
#include <stdio.h>

int isPrime(int n) {
    if (n < 2) {
        return 0;
    }
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            return 0;
        }
    }
    return 1;
}

int main() {
    for (int i = 1; i <= 20; i++) {
        if (isPrime(i)) {
            printf("%d ", i);
        }
    }
    printf("\n");
    return 0;
}
```

Output:

```
2 3 5 7 11 13 17 19 
```

Once `isPrime` is written, we can use it for any number.

## Functions get copies

When you pass a variable to a function, the function gets a **copy**. Changing the copy does not change the original.

```c
#include <stdio.h>

void addTen(int n) {
    n = n + 10;
    printf("Inside: %d\n", n);
}

int main() {
    int number = 5;

    addTen(number);
    printf("Outside: %d\n", number);
    return 0;
}
```

Output:

```
Inside: 15
Outside: 5
```

To change the original, pass a pointer (see **C Pointers**).

## Local variables

A variable created inside a function exists **only inside that function**. Another function cannot see it. Using it outside gives an error like:

```
error: 'n' undeclared (first use in this function)
```

## Common mistakes

- Calling a function before it is declared, without a prototype.
- Forgetting `return` in a function that must return a value.
- Passing the wrong number or type of values.
- Expecting a function to change the original variable.

## Key points

- A function is a reusable block of code.
- `void` means no return value.
- Parameters receive values and `return` sends a value back.
- Use a prototype when the function is written after `main`.

## Practice questions

1. Write a function `larger(int a, int b)` that returns the bigger number. Test it with 9 and 4.
2. Write a function `stars(int n)` that prints `n` stars in one line.
3. Why do we need a function prototype?

<details>
<summary>Show answers</summary>

**1.**

```c
#include <stdio.h>

int larger(int a, int b) {
    if (a > b) {
        return a;
    }
    return b;
}

int main() {
    printf("%d\n", larger(9, 4));
    return 0;
}
```

**2.**

```c
#include <stdio.h>

void stars(int n) {
    for (int i = 0; i < n; i++) {
        printf("*");
    }
    printf("\n");
}

int main() {
    stars(5);
    return 0;
}
```

**3.** C reads from top to bottom. A prototype tells the compiler about the function before it is used, so you can write the function after `main`.

</details>
