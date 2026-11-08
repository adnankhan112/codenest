---
title: C Math Functions
sidebar_position: 9.8
---

# C Math Functions

```c
#include <stdio.h>
#include <math.h>

int main() {
    printf("%.2f\n", sqrt(25));      // 5.00
    printf("%.2f\n", pow(2, 10));    // 1024.00
    printf("%.2f\n", ceil(4.1));     // 5.00
    printf("%.2f\n", floor(4.9));    // 4.00
    printf("%.2f\n", fabs(-3.5));    // 3.50
    printf("%.2f\n", sin(0));        // 0.00
    return 0;
}
```

When you compile, add `-lm` on Linux and Mac:

```
gcc app.c -o app -lm
```

For whole numbers use `abs()` from `stdlib.h`.
