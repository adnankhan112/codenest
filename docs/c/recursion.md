---
title: C Recursion
sidebar_position: 19
---

# C Recursion

**Recursion** means a function **calls itself**. It sounds strange, but it is a natural way to solve problems that can be split into smaller copies of themselves.

## What you will learn

- What recursion is and how it works
- The two parts every recursive function needs
- Classic examples: countdown, factorial, sum and Fibonacci
- When to use recursion and when to use a loop

## The idea

Think of two mirrors facing each other: each mirror shows a smaller copy of the other. A recursive function solves a big problem by asking a smaller version of the same problem.

## The two must-have parts

1. **Base case:** the simple case where the function stops.
2. **Recursive case:** the function calls itself with a smaller problem.

Without a base case, the function calls itself forever and the program crashes.

## Example 1: countdown

```c
#include <stdio.h>

void countdown(int n) {
    if (n == 0) {
        printf("Go!\n");
        return;
    }
    printf("%d\n", n);
    countdown(n - 1);
}

int main() {
    countdown(3);
    return 0;
}
```

Output:

```
3
2
1
Go!
```

Base case: `n == 0`. Recursive case: print `n`, then count down from `n - 1`.

## Example 2: factorial

The factorial of 5 is 5 x 4 x 3 x 2 x 1. Notice that `5! = 5 x 4!`. This is a smaller copy of the same problem.

```c
#include <stdio.h>

long long factorial(int n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

int main() {
    printf("5! = %lld\n", factorial(5));
    return 0;
}
```

Output:

```
5! = 120
```

## How it works

```
factorial(4)
= 4 * factorial(3)
= 4 * (3 * factorial(2))
= 4 * (3 * (2 * factorial(1)))
= 4 * (3 * (2 * 1))     <- base case reached
= 24
```

Each call waits for the next call to finish. When the base case returns `1`, the answers travel back up.

## Example 3: sum of 1 to n

```c
#include <stdio.h>

int sum(int n) {
    if (n == 0) {
        return 0;
    }
    return n + sum(n - 1);
}

int main() {
    printf("Sum of 1 to 5 = %d\n", sum(5));
    return 0;
}
```

Output:

```
Sum of 1 to 5 = 15
```

## Example 4: Fibonacci numbers

Each number is the sum of the two before it: 0, 1, 1, 2, 3, 5, 8, 13 ...

```c
#include <stdio.h>

int fib(int n) {
    if (n <= 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}

int main() {
    for (int i = 0; i < 10; i++) {
        printf("%d ", fib(i));
    }
    printf("\n");
    return 0;
}
```

Output:

```
0 1 1 2 3 5 8 13 21 34 
```

## Example 5: power

```c
#include <stdio.h>

long long power(int base, int exp) {
    if (exp == 0) {
        return 1;
    }
    return base * power(base, exp - 1);
}

int main() {
    printf("2^10 = %lld\n", power(2, 10));
    return 0;
}
```

Output:

```
2^10 = 1024
```

## Recursion or loop?

- A loop is usually **faster** and uses less memory.
- Recursion is often **shorter and clearer** for problems like trees and puzzles.
- Every recursive call uses a little memory on the **stack**. Too many calls cause a **stack overflow** crash.

The simple Fibonacci above repeats a lot of work for big numbers, so it is good for learning but slow for large inputs.

## Common mistakes

- Forgetting the base case.
- A recursive call that does not move toward the base case.
- Using recursion for very deep problems where a loop is safer.

## Key points

- Recursion means a function calls itself.
- Every recursive function needs a base case.
- Each call must make the problem smaller.

## Practice questions

1. Write a recursive function that adds the digits of a number. For 1234 the answer is 10.
2. Use recursion to print the numbers from 1 to 5.
3. What is a base case, and what happens without it?

<details>
<summary>Show answers</summary>

**1.**

```c
#include <stdio.h>

int sumDigits(int n) {
    if (n == 0) {
        return 0;
    }
    return n % 10 + sumDigits(n / 10);
}

int main() {
    printf("%d\n", sumDigits(1234));
    return 0;
}
```

This prints `10`.

**2.**

```c
#include <stdio.h>

void printUp(int n) {
    if (n == 0) {
        return;
    }
    printUp(n - 1);
    printf("%d ", n);
}

int main() {
    printUp(5);
    printf("\n");
    return 0;
}
```

**3.** The base case is the simple situation where the function stops calling itself. Without it, the function never stops and the program crashes with a stack overflow.

</details>
