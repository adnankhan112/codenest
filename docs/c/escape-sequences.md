---
title: C Escape Sequences
sidebar_position: 4.5
---

# C Escape Sequences

| Sequence | Meaning |
| --- | --- |
| `\n` | New line |
| `\t` | Tab |
| `\\` | Backslash |
| `\"` | Double quote |
| `\'` | Single quote |
| `\0` | Null character (end of a string) |

```c
#include <stdio.h>

int main() {
    printf("Name:\tAli\n");
    printf("He said \"Hello\"\n");
    printf("Path: C:\\Users\n");
    return 0;
}
```
