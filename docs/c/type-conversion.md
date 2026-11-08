---
title: C Type Conversion
sidebar_position: 7.5
---

# C Type Conversion

## Implicit conversion

C converts types automatically when it needs to.

```c
int a = 5;
float b = a;         // 5.0
```

## Explicit conversion (casting)

```c
int x = 7, y = 2;
printf("%d\n", x / y);          // 3
printf("%f\n", (float)x / y);   // 3.500000
```

## Characters and numbers

```c
char c = 'A';
printf("%d\n", c);   // 65 (ASCII code)
printf("%c\n", 66);  // B
```

## Strings to numbers

```c
#include <stdlib.h>
int n = atoi("42");
double d = atof("3.14");
```
