---
title: C Command Line Arguments
sidebar_position: 23.8
---

# C Command Line Arguments

A program can receive values from the command line.

```c
#include <stdio.h>

int main(int argc, char *argv[]) {
    printf("Count: %d\n", argc);
    for (int i = 0; i < argc; i++) {
        printf("arg %d = %s\n", i, argv[i]);
    }
    return 0;
}
```

Run it:

```
./app hello 42
```

- `argc` is the number of arguments, including the program name.
- `argv` is an array of strings. `argv[0]` is the program name.
- Use `atoi(argv[2])` to turn an argument into a number.
