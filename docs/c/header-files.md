---
title: C Header Files and Multi-File Programs
sidebar_position: 24.5
---

# C Header Files and Multi-File Programs

Big programs are split into several files.

**math_utils.h**

```c
#ifndef MATH_UTILS_H
#define MATH_UTILS_H

int add(int a, int b);

#endif
```

**math_utils.c**

```c
#include "math_utils.h"

int add(int a, int b) {
    return a + b;
}
```

**main.c**

```c
#include <stdio.h>
#include "math_utils.h"

int main() {
    printf("%d\n", add(2, 3));
    return 0;
}
```

Compile all files together:

```
gcc main.c math_utils.c -o app
```

The `#ifndef` lines are called include guards. They stop a header from being included twice.
