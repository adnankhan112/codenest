---
title: C Time and Random Numbers
sidebar_position: 24.8
---

# C Time and Random Numbers

```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    srand(time(NULL));            // seed once at the start

    int dice = rand() % 6 + 1;    // 1 to 6
    printf("You rolled %d\n", dice);

    time_t now = time(NULL);
    printf("%s", ctime(&now));

    clock_t start = clock();
    for (long i = 0; i < 1000000; i++) {}
    printf("Took %f seconds\n", (double)(clock() - start) / CLOCKS_PER_SEC);
    return 0;
}
```

If you do not call `srand`, `rand()` gives the same numbers every time.
