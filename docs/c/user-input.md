---
title: C User Input
sidebar_position: 10
---

# C User Input

So far our programs had fixed values. With **user input** a program can ask questions and work with the answers. In C we use the `scanf()` function.

## What you will learn

- How to read numbers, characters and text from the keyboard
- Why `scanf` needs the `&` symbol
- How to check if the input was valid
- How to read a full line of text with `fgets`

## Read a whole number

```c
#include <stdio.h>

int main() {
    int age;
    printf("Enter your age: ");
    scanf("%d", &age);
    printf("You are %d years old.\n", age);
    return 0;
}
```

Sample run (the user types `22`):

```
Enter your age: 22
You are 22 years old.
```

## How it works

1. `printf` shows a message (a **prompt**).
2. `scanf("%d", &age)` waits until the user types a number and presses Enter.
3. The number is stored in the variable `age`.

## Why the & symbol?

`&age` means "the **address** of age". `scanf` needs to know **where** in memory to put the value. If you forget the `&`, the program will crash or behave strangely.

## Read two numbers

```c
#include <stdio.h>

int main() {
    int a, b;
    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);
    printf("Sum = %d\n", a + b);
    return 0;
}
```

Sample run:

```
Enter two numbers: 12 30
Sum = 42
```

## Other types

- `%d` for `int`
- `%f` for `float`
- `%lf` for `double` (note: `scanf` needs `%lf`, but `printf` can use `%f`)
- `%c` for one character

```c
#include <stdio.h>

int main() {
    double price;
    char grade;

    printf("Enter price: ");
    scanf("%lf", &price);

    printf("Enter grade: ");
    scanf(" %c", &grade);

    printf("Price: %.2f, Grade: %c\n", price, grade);
    return 0;
}
```

Sample run:

```
Enter price: 49.99
Enter grade: B
Price: 49.99, Grade: B
```

The **space** before `%c` skips the Enter key that is left in the input.

## Check if the input is valid

`scanf` returns how many values it read successfully.

```c
#include <stdio.h>

int main() {
    int n;
    printf("Enter a number: ");
    if (scanf("%d", &n) == 1) {
        printf("You entered %d\n", n);
    } else {
        printf("That is not a number\n");
    }
    return 0;
}
```

Sample run (the user types `abc`):

```
Enter a number: abc
That is not a number
```

## Read a full line of text

`scanf("%s")` stops at the first space. To read a whole line, like a full name, use `fgets`.

```c
#include <stdio.h>
#include <string.h>

int main() {
    char name[50];
    printf("Enter your full name: ");
    fgets(name, sizeof(name), stdin);
    name[strcspn(name, "\n")] = '\0';
    printf("Hello, %s!\n", name);
    return 0;
}
```

Sample run:

```
Enter your full name: Ali Khan
Hello, Ali Khan!
```

- `fgets(name, sizeof(name), stdin)` reads a line safely, never more than the array size.
- `name[strcspn(name, "\n")] = '\0';` removes the new line that `fgets` keeps.

## Problem: scanf followed by fgets

After `scanf("%d", ...)`, the Enter key stays in the input and the next `fgets` reads it as an empty line. Fix it by removing that left-over character with `getchar()`:

```c
#include <stdio.h>
#include <string.h>

int main() {
    int age;
    char name[50];

    printf("Age: ");
    scanf("%d", &age);
    getchar();

    printf("Name: ");
    fgets(name, sizeof(name), stdin);
    name[strcspn(name, "\n")] = '\0';

    printf("%s is %d years old.\n", name, age);
    return 0;
}
```

Sample run:

```
Age: 20
Name: Sara Ahmed
Sara Ahmed is 20 years old.
```

## Common mistakes

- Forgetting `&` in `scanf`.
- Using `%f` instead of `%lf` to read a `double`.
- Using `scanf("%s")` for names that have spaces.
- Not clearing the left-over Enter key before `fgets`.

## Key points

- `scanf` reads values, and it needs `&` before the variable.
- Check `scanf`'s return value to detect bad input.
- Use `fgets` to read a line with spaces.

## Practice questions

1. Ask for the length and width of a rectangle and print its area.
2. Ask for a person's name (one word) and age, then print them in one sentence.
3. Why do we write `&` in `scanf`?

<details>
<summary>Show answers</summary>

**1.**

```c
#include <stdio.h>

int main() {
    int length, width;
    printf("Enter length and width: ");
    scanf("%d %d", &length, &width);
    printf("Area = %d\n", length * width);
    return 0;
}
```

**2.**

```c
#include <stdio.h>

int main() {
    char name[50];
    int age;
    printf("Enter name and age: ");
    scanf("%49s %d", name, &age);
    printf("%s is %d years old.\n", name, age);
    return 0;
}
```

An array name like `name` already stands for its address, so it needs no `&`.

**3.** Because `scanf` must know the memory address of the variable where it should store the value.

</details>
