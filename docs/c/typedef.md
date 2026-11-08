---
title: C typedef
sidebar_position: 21.5
---

# C typedef

`typedef` gives a type a new, shorter name.

```c
typedef unsigned int uint;
uint age = 20;

typedef struct {
    char name[30];
    int marks;
} Student;

Student s = {"Ali", 85};

typedef enum { LOW, MEDIUM, HIGH } Level;
Level l = HIGH;
```

Without `typedef` you must write `struct Student` every time. With it you write only `Student`.
