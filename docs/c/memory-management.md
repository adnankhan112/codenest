---
title: C Memory Management
sidebar_position: 22
---

# C Memory Management

So far the size of every variable and array was fixed when we wrote the program. But what if you do not know how many items you need until the program is running? C lets you ask for memory **while the program runs**. This is called **dynamic memory allocation**.

## What you will learn

- The difference between the stack and the heap
- How to use `malloc`, `calloc`, `realloc` and `free`
- What a memory leak is
- Common dangerous mistakes

## Stack and heap

- **Stack:** memory for normal variables. It is managed automatically and cleaned when a function ends.
- **Heap:** memory you ask for yourself. You must give it back yourself with `free`.

All the functions below need `#include <stdlib.h>`.

## malloc: ask for memory

`malloc(size)` reserves a number of bytes and returns a **pointer** to them. If there is no memory, it returns `NULL`.

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int *numbers = malloc(5 * sizeof(int));

    if (numbers == NULL) {
        printf("Memory failed\n");
        return 1;
    }

    for (int i = 0; i < 5; i++) {
        numbers[i] = i * 10;
    }
    for (int i = 0; i < 5; i++) {
        printf("%d ", numbers[i]);
    }
    printf("\n");

    free(numbers);
    return 0;
}
```

Output:

```
0 10 20 30 40 
```

## How it works

1. `5 * sizeof(int)` is the number of bytes for 5 integers.
2. `malloc` returns the address of that memory, and we keep it in the pointer `numbers`.
3. We check for `NULL`, because the request can fail.
4. We use the pointer like a normal array.
5. `free(numbers)` gives the memory back.

## calloc: memory filled with zeros

`calloc(count, size)` works like `malloc`, but all the bytes start as **zero**.

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int *a = calloc(3, sizeof(int));

    if (a == NULL) {
        return 1;
    }
    printf("%d %d %d\n", a[0], a[1], a[2]);
    free(a);
    return 0;
}
```

Output:

```
0 0 0
```

## Example: size decided by the user

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int n;
    printf("How many numbers? ");
    scanf("%d", &n);

    int *data = malloc(n * sizeof(int));
    if (data == NULL) {
        printf("Memory failed\n");
        return 1;
    }

    double sum = 0;
    printf("Enter %d numbers: ", n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &data[i]);
        sum += data[i];
    }
    printf("Average = %.2f\n", sum / n);

    free(data);
    return 0;
}
```

Sample run:

```
How many numbers? 4
Enter 4 numbers: 10 20 30 40
Average = 25.00
```

The array size is not known when we write the program. This is exactly the problem dynamic memory solves.

## realloc: change the size

`realloc(pointer, newSize)` makes the memory bigger or smaller and keeps the old data.

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int *a = malloc(2 * sizeof(int));
    if (a == NULL) {
        return 1;
    }
    a[0] = 1;
    a[1] = 2;

    int *bigger = realloc(a, 4 * sizeof(int));
    if (bigger == NULL) {
        free(a);
        return 1;
    }
    a = bigger;
    a[2] = 3;
    a[3] = 4;

    for (int i = 0; i < 4; i++) {
        printf("%d ", a[i]);
    }
    printf("\n");

    free(a);
    return 0;
}
```

Output:

```
1 2 3 4 
```

We use a second pointer, so if `realloc` fails we do not lose the original memory.

## Memory for text

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main() {
    char *name = malloc(20);

    if (name == NULL) {
        return 1;
    }
    strcpy(name, "CodeNest");
    printf("%s\n", name);

    free(name);
    return 0;
}
```

Output:

```
CodeNest
```

## Memory leak

If you allocate memory and never call `free`, the memory stays reserved until the program ends. This is a **memory leak**. A program that runs for a long time and leaks memory will slowly use up the whole computer's memory.

**Rule: every `malloc` or `calloc` needs one matching `free`.**

## Dangerous mistakes

- **Use after free:** using a pointer after `free` is **undefined behaviour**. After freeing, set the pointer to `NULL`:

```c
free(p);
p = NULL;
```

- **Double free:** calling `free` twice on the same memory can crash the program.
- **Buffer overflow:** writing more items than you allocated.
- **Forgetting the NULL check** after `malloc`.

## Key points

- `malloc` and `calloc` ask for memory. `realloc` changes its size. `free` gives it back.
- Always check for `NULL`.
- Every allocation needs exactly one `free`.
- Set a pointer to `NULL` after freeing it.

## Practice questions

1. Allocate memory for three `double` values (1.5, 2.5, 3.5), print their sum and free the memory.
2. What is a memory leak?
3. Why must you check whether `malloc` returned `NULL`?

<details>
<summary>Show answers</summary>

**1.**

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    double *d = malloc(3 * sizeof(double));
    if (d == NULL) {
        return 1;
    }
    d[0] = 1.5;
    d[1] = 2.5;
    d[2] = 3.5;
    printf("Sum = %.2f\n", d[0] + d[1] + d[2]);
    free(d);
    return 0;
}
```

This prints `Sum = 7.50`.

**2.** A memory leak happens when you allocate memory and never free it, so it stays reserved without being used.

**3.** `malloc` returns `NULL` when there is not enough memory. Using a `NULL` pointer would crash the program.

</details>
