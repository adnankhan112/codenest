---
title: C Scope and Storage Classes
sidebar_position: 18.8
---

# C Scope and Storage Classes

## Scope

```c
int global = 1;            // visible everywhere in this file

void f() {
    int local = 2;         // visible only inside f
}
```

## Storage classes

| Keyword | Meaning |
| --- | --- |
| `auto` | Normal local variable (default) |
| `static` | Keeps its value between calls |
| `extern` | The variable is defined in another file |
| `register` | A hint to keep it in a CPU register |

```c
void counter() {
    static int count = 0;
    count++;
    printf("%d\n", count);
}

counter();   // 1
counter();   // 2
counter();   // 3
```
