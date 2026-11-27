---
title: C While Loop
sidebar_position: 13
---

# C While Loop

A **loop** repeats a block of code many times. Without loops you would have to write `printf` a hundred times to print 100 lines. C has three loops: `while`, `do-while` and `for`. In this lesson we learn the first two.

## What you will learn

- How the `while` loop works
- How `do-while` is different
- How to stop a loop with `break`
- How to avoid infinite loops

## The while loop

The condition is checked **before** each round. The loop runs while the condition is true.

```c
#include <stdio.h>

int main() {
    int i = 1;

    while (i <= 5) {
        printf("%d\n", i);
        i++;
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

## How it works

1. `i` starts at 1.
2. C checks `i <= 5`. It is true, so the body runs.
3. `i++` adds 1 to `i`.
4. C goes back to step 2. When `i` becomes 6, the condition is false and the loop stops.

A loop usually has three parts: a **starting value**, a **condition**, and a **change** that moves toward the end.

## Example: countdown

```c
#include <stdio.h>

int main() {
    int n = 5;

    while (n > 0) {
        printf("%d... ", n);
        n--;
    }
    printf("Go!\n");
    return 0;
}
```

Output:

```
5... 4... 3... 2... 1... Go!
```

## Example: sum of numbers

```c
#include <stdio.h>

int main() {
    int i = 1, sum = 0;

    while (i <= 10) {
        sum += i;
        i++;
    }
    printf("Sum of 1 to 10 = %d\n", sum);
    return 0;
}
```

Output:

```
Sum of 1 to 10 = 55
```

## The do-while loop

A `do-while` loop runs the body **first** and checks the condition **after**. So it always runs **at least once**.

```c
#include <stdio.h>

int main() {
    int i = 10;

    do {
        printf("i = %d\n", i);
        i++;
    } while (i < 5);
    return 0;
}
```

Output:

```
i = 10
```

The condition `i < 5` is false from the start, but the body still ran once. A normal `while` loop would print nothing.

## Stop early with break

`break` leaves the loop immediately.

```c
#include <stdio.h>

int main() {
    int i = 1;

    while (1) {
        if (i > 3) {
            break;
        }
        printf("Round %d\n", i);
        i++;
    }
    return 0;
}
```

Output:

```
Round 1
Round 2
Round 3
```

`while (1)` is an intentional endless loop, and `break` is the exit.

## Example: count the digits of a number

```c
#include <stdio.h>

int main() {
    int n = 90417, count = 0;

    while (n != 0) {
        n = n / 10;
        count++;
    }
    printf("Digits: %d\n", count);
    return 0;
}
```

Output:

```
Digits: 5
```

Each round removes the last digit with `n / 10`.

## Common mistakes

- **Infinite loop.** If you forget `i++`, the condition never becomes false and the program never ends. Press **Ctrl + C** in the terminal to stop it.
- **A semicolon after the while.** `while (i < 5);` makes an empty loop.
- **Off-by-one errors.** Using `<` instead of `<=` gives one round less.

## Key points

- `while` checks the condition first.
- `do-while` runs at least once.
- Always change something inside the loop so it can end.
- `break` exits the loop early.

## Practice questions

1. Print the numbers from 10 down to 1.
2. Print the even numbers from 2 to 10.
3. What is the difference between `while` and `do-while`?

<details>
<summary>Show answers</summary>

**1.**

```c
#include <stdio.h>

int main() {
    int i = 10;
    while (i >= 1) {
        printf("%d\n", i);
        i--;
    }
    return 0;
}
```

**2.**

```c
#include <stdio.h>

int main() {
    int i = 2;
    while (i <= 10) {
        printf("%d\n", i);
        i += 2;
    }
    return 0;
}
```

**3.** `while` checks the condition before running the body, so it may not run at all. `do-while` checks after the body, so it always runs at least once.

</details>
