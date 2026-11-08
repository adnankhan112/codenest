---
title: C Function Pointers
sidebar_position: 17.8
---

# C Function Pointers

A function pointer stores the address of a function.

```c
#include <stdio.h>

int add(int a, int b) { return a + b; }
int mul(int a, int b) { return a * b; }

int main() {
    int (*op)(int, int);

    op = add;
    printf("%d\n", op(3, 4));   // 7

    op = mul;
    printf("%d\n", op(3, 4));   // 12
    return 0;
}
```

## As a parameter (callback)

```c
void apply(int (*f)(int, int), int a, int b) {
    printf("%d\n", f(a, b));
}
apply(add, 2, 5);
```
