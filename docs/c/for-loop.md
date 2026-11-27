---
title: C For Loop
sidebar_position: 14
---

# C For Loop

When you know **how many times** you want to repeat something, the `for` loop is the neatest choice. It puts the start, the condition and the change in one line.

## What you will learn

- The three parts of a `for` loop
- Counting up, counting down and counting in steps
- Nested loops for tables and patterns
- Common loop mistakes

## Syntax

```
for (start; condition; change) {
    // code to repeat
}
```

```c
#include <stdio.h>

int main() {
    for (int i = 1; i <= 5; i++) {
        printf("%d\n", i);
    }
    return 0;
}
```

Output:

```
1
2
3
4
5
```

## The three parts

1. `int i = 1` runs **once** at the start.
2. `i <= 5` is checked **before every round**.
3. `i++` runs **after every round**.

## Counting down and in steps

```c
#include <stdio.h>

int main() {
    for (int i = 10; i >= 0; i -= 5) {
        printf("%d ", i);
    }
    printf("\n");
    return 0;
}
```

Output:

```
10 5 0 
```

## Example: multiplication table

```c
#include <stdio.h>

int main() {
    for (int i = 1; i <= 5; i++) {
        printf("3 x %d = %d\n", i, 3 * i);
    }
    return 0;
}
```

Output:

```
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
3 x 4 = 12
3 x 5 = 15
```

## Example: factorial

The factorial of 5 is 5 x 4 x 3 x 2 x 1.

```c
#include <stdio.h>

int main() {
    int n = 5;
    long long fact = 1;

    for (int i = 1; i <= n; i++) {
        fact *= i;
    }
    printf("%d! = %lld\n", n, fact);
    return 0;
}
```

Output:

```
5! = 120
```

## Nested loops: a star triangle

A loop inside a loop. The outer loop handles the **rows** and the inner loop handles the **columns**.

```c
#include <stdio.h>

int main() {
    for (int row = 1; row <= 4; row++) {
        for (int col = 1; col <= row; col++) {
            printf("*");
        }
        printf("\n");
    }
    return 0;
}
```

Output:

```
*
**
***
****
```

## Example: check a prime number

A prime number has no divisor other than 1 and itself.

```c
#include <stdio.h>

int main() {
    int n = 29, isPrime = 1;

    if (n < 2) {
        isPrime = 0;
    }
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            isPrime = 0;
            break;
        }
    }

    if (isPrime) {
        printf("%d is prime\n", n);
    } else {
        printf("%d is not prime\n", n);
    }
    return 0;
}
```

Output:

```
29 is prime
```

We only need to test up to the square root of `n`, which is why the condition is `i * i <= n`.

## Common mistakes

- **A semicolon after the for.** `for (...);` creates an empty loop.
- **Off-by-one.** `i < 5` runs 5 rounds starting from 0, but `i <= 5` starts from 0 and runs 6 rounds.
- **Changing the counter inside the body** in a way that confuses the loop.
- **Using the wrong counting direction,** like `i++` when you are counting down.

## Key points

- `for` is best when the number of rounds is known.
- Its three parts are start, condition and change.
- A loop inside a loop is called a nested loop.

## Practice questions

1. Print the even numbers from 2 to 20.
2. Find the sum of the numbers from 1 to 100.
3. Print the table of 7 up to 7 x 5.

<details>
<summary>Show answers</summary>

**1.**

```c
#include <stdio.h>

int main() {
    for (int i = 2; i <= 20; i += 2) {
        printf("%d ", i);
    }
    printf("\n");
    return 0;
}
```

**2.**

```c
#include <stdio.h>

int main() {
    int sum = 0;
    for (int i = 1; i <= 100; i++) {
        sum += i;
    }
    printf("Sum = %d\n", sum);
    return 0;
}
```

This prints `Sum = 5050`.

**3.**

```c
#include <stdio.h>

int main() {
    for (int i = 1; i <= 5; i++) {
        printf("7 x %d = %d\n", i, 7 * i);
    }
    return 0;
}
```

</details>
