---
title: C Bitwise Operators
sidebar_position: 9.5
---

# C Bitwise Operators

Bitwise operators work on the individual bits of integers.

| Operator | Name | Example |
| --- | --- | --- |
| `&` | AND | `5 & 3` gives 1 |
| `\|` | OR | `5 \| 3` gives 7 |
| `^` | XOR | `5 ^ 3` gives 6 |
| `~` | NOT | `~5` gives -6 |
| `<<` | Left shift | `5 << 1` gives 10 |
| `>>` | Right shift | `5 >> 1` gives 2 |

```c
int flags = 0;
flags |= 1 << 2;           // set bit 2
if (flags & (1 << 2)) {    // test bit 2
    printf("Bit 2 is on\n");
}
flags &= ~(1 << 2);        // clear bit 2
```

A left shift by 1 doubles a number, and a right shift by 1 halves it.
