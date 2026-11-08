---
title: C break and continue
sidebar_position: 14.5
---

# C break and continue

```c
#include <stdio.h>

int main() {
    for (int i = 1; i <= 10; i++) {
        if (i == 3) continue;     // skip this round
        if (i == 7) break;        // leave the loop
        printf("%d ", i);
    }
    return 0;
}
```

Output: `1 2 4 5 6`

- `break` ends the whole loop.
- `continue` jumps to the next round.
- In nested loops, `break` leaves only the inner loop.
