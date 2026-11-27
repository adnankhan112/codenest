---
title: C Pointers
sidebar_position: 17
---

# C Pointers

Pointers have a reputation for being hard, but the idea is simple. Every variable lives at a **memory address**, like every house has a street address. A **pointer** is a variable that stores an address.

## What you will learn

- What an address is and how to get it with `&`
- How to create a pointer and use `*`
- How to change a variable through a pointer
- What `NULL` means and why pointers matter

## The house idea

- A variable is a **house** that holds a value.
- Its **address** tells you where the house is.
- A pointer is a **note** with that address written on it.

## Address and value

```c
#include <stdio.h>

int main() {
    int x = 10;
    int *p = &x;

    printf("x = %d\n", x);
    printf("*p = %d\n", *p);
    printf("Same address? %d\n", p == &x);
    return 0;
}
```

Output:

```
x = 10
*p = 10
Same address? 1
```

## The two symbols

- `&x` means **"address of x"**.
- `int *p` creates a pointer to an `int`.
- `*p` means **"the value stored at the address in p"**. This is called **dereferencing**.

```
 x (value 10)          p (holds the address of x)
+------+              +----------+
|  10  |  <-----------|  &x      |
+------+              +----------+
```

## Print an address

```c
#include <stdio.h>

int main() {
    int x = 10;
    printf("%p\n", (void *)&x);
    return 0;
}
```

Example output (your address will be different):

```
0x7ffd5b2c3a4c
```

## Change a value through a pointer

```c
#include <stdio.h>

int main() {
    int x = 10;
    int *p = &x;

    *p = 25;
    printf("x = %d\n", x);
    return 0;
}
```

Output:

```
x = 25
```

We never touched `x` directly, but it changed. This is the power of pointers.

## Why do we need pointers?

A normal function receives only **copies** of values. With pointers a function can change the **original** variables. The classic example is swapping two numbers:

```c
#include <stdio.h>

void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x = 3, y = 8;

    swap(&x, &y);
    printf("x = %d, y = %d\n", x, y);
    return 0;
}
```

Output:

```
x = 8, y = 3
```

We pass the **addresses** `&x` and `&y`, so `swap` can change the real variables.

## Pointers and arrays

An array name works like the address of its first item.

```c
#include <stdio.h>

int main() {
    int a[3] = {10, 20, 30};
    int *p = a;

    printf("%d\n", p[1]);
    printf("%d\n", *(p + 2));
    return 0;
}
```

Output:

```
20
30
```

`p + 2` moves the pointer by 2 items, not by 2 bytes. See the **C Pointers and Arrays** lesson for more.

## NULL pointers

A pointer that points to nothing should be set to `NULL`. Always check before you use it.

```c
#include <stdio.h>

int main() {
    int *p = NULL;

    if (p == NULL) {
        printf("The pointer points to nothing.\n");
    }
    return 0;
}
```

Output:

```
The pointer points to nothing.
```

Using `*p` while `p` is `NULL` crashes the program.

## Common mistakes

- Using a pointer that was never given an address.
- Dereferencing a `NULL` pointer.
- Mixing up `&` (get the address) and `*` (get the value).
- Pointing to a variable that no longer exists.

## Key points

- A pointer stores a memory address.
- `&` gets an address and `*` follows it to the value.
- Pointers let functions change the original variables.
- Set unused pointers to `NULL` and check them before use.

## Practice questions

1. Create `int n = 50;` and a pointer to it, then print `n` using only the pointer.
2. Write a function `doubleIt(int *n)` that doubles a number. Test it with 7.
3. What do `&` and `*` mean when we work with pointers?

<details>
<summary>Show answers</summary>

**1.**

```c
#include <stdio.h>

int main() {
    int n = 50;
    int *p = &n;
    printf("%d\n", *p);
    return 0;
}
```

**2.**

```c
#include <stdio.h>

void doubleIt(int *n) {
    *n = *n * 2;
}

int main() {
    int value = 7;
    doubleIt(&value);
    printf("%d\n", value);
    return 0;
}
```

This prints `14`.

**3.** `&` gives the address of a variable. `*` follows an address to get or change the value stored there.

</details>
