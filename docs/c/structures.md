---
title: C Structures
sidebar_position: 20
---

# C Structures

Suppose you want to store a student: name, age and marks. These are different types, so one array cannot hold them. A **structure** (`struct`) groups different types of data into **one unit**.

## What you will learn

- How to define and use a structure
- How to give values and read members
- How to pass a structure to a function
- How `typedef` and the arrow `->` make structures easier

## Define a structure

```c
#include <stdio.h>
#include <string.h>

struct Student {
    char name[30];
    int age;
    float marks;
};

int main() {
    struct Student s1;

    strcpy(s1.name, "Ali");
    s1.age = 20;
    s1.marks = 88.5f;

    printf("%s is %d years old with %.1f marks.\n", s1.name, s1.age, s1.marks);
    return 0;
}
```

Output:

```
Ali is 20 years old with 88.5 marks.
```

## How it works

- `struct Student { ... };` is a **blueprint**. It does not use memory yet.
- `struct Student s1;` makes a real student from the blueprint.
- We reach each part with the **dot** `.`, like `s1.age`.
- Text members must be filled with `strcpy`, because you cannot assign text with `=` to a char array.

## Give values when you create it

```c
#include <stdio.h>

struct Student {
    char name[30];
    int age;
    float marks;
};

int main() {
    struct Student s2 = {"Sara", 19, 91.0f};

    printf("%s: %d, %.1f\n", s2.name, s2.age, s2.marks);
    return 0;
}
```

Output:

```
Sara: 19, 91.0
```

## Shorter names with typedef

`typedef` lets you skip the word `struct` every time.

```c
#include <stdio.h>

typedef struct {
    int x;
    int y;
} Point;

int main() {
    Point p = {3, 7};

    printf("Point: (%d, %d)\n", p.x, p.y);
    return 0;
}
```

Output:

```
Point: (3, 7)
```

## Pass a structure to a function

```c
#include <stdio.h>

typedef struct {
    char title[40];
    double price;
} Book;

void printBook(Book b) {
    printf("%s costs %.2f\n", b.title, b.price);
}

int main() {
    Book b1 = {"Learn C", 12.5};

    printBook(b1);
    return 0;
}
```

Output:

```
Learn C costs 12.50
```

## Pointer to a structure and the arrow

If you have a **pointer** to a structure, use the arrow `->` to reach its members. This is also how a function can change the original structure.

```c
#include <stdio.h>

typedef struct {
    int age;
} Person;

void birthday(Person *p) {
    p->age = p->age + 1;
}

int main() {
    Person a = {20};

    birthday(&a);
    printf("Age: %d\n", a.age);
    return 0;
}
```

Output:

```
Age: 21
```

`p->age` is a shortcut for `(*p).age`.

## An array of structures

You can keep many records together.

```c
#include <stdio.h>

typedef struct {
    char name[20];
    int marks;
} Student;

int main() {
    Student list[3] = {{"Ali", 80}, {"Sara", 92}, {"Omar", 75}};

    for (int i = 0; i < 3; i++) {
        printf("%s: %d\n", list[i].name, list[i].marks);
    }
    return 0;
}
```

Output:

```
Ali: 80
Sara: 92
Omar: 75
```

## Common mistakes

- Writing `s1.name = "Ali";`. Use `strcpy(s1.name, "Ali");`.
- Forgetting the semicolon after the closing brace of the structure.
- Using `.` on a pointer. Use `->` for pointers.
- Passing a structure by value and expecting the original to change.

## Key points

- A structure groups different types into one unit.
- Use `.` for members, and `->` when you have a pointer.
- `typedef` gives the structure a shorter name.

## Practice questions

1. Make a structure `Book` with a title and a price. Create one book and print it.
2. Create two students with marks 78 and 85 and print the name of the one with higher marks.
3. Why can we not write `s1.name = "Ali";`?

<details>
<summary>Show answers</summary>

**1.**

```c
#include <stdio.h>

typedef struct {
    char title[40];
    double price;
} Book;

int main() {
    Book b = {"C Basics", 9.99};
    printf("%s - %.2f\n", b.title, b.price);
    return 0;
}
```

**2.**

```c
#include <stdio.h>

typedef struct {
    char name[20];
    int marks;
} Student;

int main() {
    Student a = {"Ali", 78};
    Student b = {"Sara", 85};

    if (a.marks > b.marks) {
        printf("%s\n", a.name);
    } else {
        printf("%s\n", b.name);
    }
    return 0;
}
```

This prints `Sara`.

**3.** `name` is an array, and arrays cannot be assigned with `=`. We copy text into it with `strcpy`.

</details>
