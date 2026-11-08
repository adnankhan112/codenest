---
title: C Unions
sidebar_position: 20.8
---

# C Unions

A union stores different types in the **same memory**. Only one member can hold a value at a time.

```c
#include <stdio.h>

union Data {
    int i;
    float f;
    char c;
};

int main() {
    union Data d;
    d.i = 10;
    printf("%d\n", d.i);

    d.f = 2.5;                 // overwrites the integer
    printf("%.1f\n", d.f);

    printf("Size: %zu\n", sizeof(d));   // size of the largest member
    return 0;
}
```

Use a union to save memory when you only need one value at a time.
