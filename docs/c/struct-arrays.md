---
title: C Arrays of Structures and Nested Structures
sidebar_position: 20.5
---

# C Arrays of Structures and Nested Structures

```c
#include <stdio.h>

struct Date {
    int day, month, year;
};

struct Student {
    char name[30];
    int marks;
    struct Date joined;      // a structure inside a structure
};

int main() {
    struct Student list[2] = {
        {"Ali", 80, {1, 9, 2026}},
        {"Sara", 92, {5, 9, 2026}}
    };

    for (int i = 0; i < 2; i++) {
        printf("%s %d %d/%d/%d\n",
               list[i].name, list[i].marks,
               list[i].joined.day, list[i].joined.month, list[i].joined.year);
    }
    return 0;
}
```

## Pointer to a structure

```c
struct Student *p = &list[0];
printf("%s\n", p->name);    // use -> with a pointer
```
