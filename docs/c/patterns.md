---
title: C Pattern Printing
sidebar_position: 14.8
---

# C Pattern Printing

Pattern programs are a great way to practise nested loops.

## Right triangle

```c
for (int i = 1; i <= 4; i++) {
    for (int j = 1; j <= i; j++) {
        printf("* ");
    }
    printf("\n");
}
```

Output:

```
* 
* * 
* * * 
* * * * 
```

## Number pyramid

```c
for (int i = 1; i <= 4; i++) {
    for (int s = 1; s <= 4 - i; s++) printf(" ");
    for (int j = 1; j <= i; j++) printf("%d ", j);
    printf("\n");
}
```

The outer loop controls the rows, and the inner loops control what is printed in each row.
