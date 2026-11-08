---
title: C Pointer to Pointer
sidebar_position: 17.6
---

# C Pointer to Pointer

A pointer can store the address of another pointer.

```c
int x = 5;
int *p = &x;
int **pp = &p;

printf("%d\n", x);     // 5
printf("%d\n", *p);    // 5
printf("%d\n", **pp);  // 5

**pp = 9;
printf("%d\n", x);     // 9
```

## Where it is used

- Changing a pointer inside a function.
- Arrays of strings, such as `char *names[]`.
- Dynamic two-dimensional arrays.
