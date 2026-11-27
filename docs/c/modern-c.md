---
title: "Modern C"
sidebar_position: 90
---

# Modern C

C is an old language, but it is still updated. Each new version of the rules is called a standard. The main ones are C89, C99, C11, C17, and the newest, C23. When people say "modern C", they mean the style of C99 and newer. It is safer and easier to read than the very old style.

:::tip
A compiler may not support every new feature. Check your compiler's page to see which standard it supports. The examples on this page work with C17, which almost every compiler supports.
:::

## Compile and run

C code must be turned into a program by a compiler. The most common one is `gcc`. Check that you have it:

```text
gcc --version
```

Compile with the standard and the warnings turned on, then run the program:

```text
gcc -std=c17 -Wall -Wextra hello.c -o hello
```

On Windows run it with `.\hello.exe`. On Linux and Mac run it with `./hello`.

The options `-Wall` and `-Wextra` ask the compiler to show warnings. A warning often points to a real bug, so read them.

## A modern program

```c
#include <stdbool.h>
#include <stdint.h>
#include <stdio.h>

typedef struct {
    const char *name;
    int age;
} Student;

int main(void) {
    const int max_students = 3;
    bool passed = true;
    uint8_t small = 200;

    Student ali = {.name = "Ali", .age = 20};

    printf("%s is %d years old\n", ali.name, ali.age);
    printf("Passed: %d, small: %d, max: %d\n", passed, small, max_students);

    for (int i = 1; i <= 3; i++) {
        printf("Round %d\n", i);
    }
    return 0;
}
```

The output is:

```text
Ali is 20 years old
Passed: 1, small: 200, max: 3
Round 1
Round 2
Round 3
```

## The modern habits

### Write int main(void)

An empty bracket in `int main()` means "any number of arguments" in older C. Write `void` when the function takes nothing.

### Declare variables where you use them

Old C made you write all variables at the top of a function. Modern C lets you declare a variable at the place where you need it, even inside a `for` loop, as `for (int i = 0; ...)`. The variable then lives only inside the loop.

### Use // for comments

```c
// This is a comment on one line
int age = 20;  /* This older style also works */
```

### Use bool from stdbool.h

```c
#include <stdbool.h>

bool is_adult(int age) {
    return age >= 18;
}
```

### Use fixed-size numbers from stdint.h

The size of `int` can change between computers. When the size matters, use these types.

| Type | Meaning |
| --- | --- |
| `int8_t`, `uint8_t` | 8-bit number, signed and unsigned |
| `int32_t`, `uint32_t` | 32-bit number |
| `int64_t`, `uint64_t` | 64-bit number |
| `size_t` | The type for sizes and counts, such as the result of `sizeof` |

### Use const and enum, not #define, for values

```c
const int max_users = 100;

enum Color { RED, GREEN, BLUE };
```

The compiler checks the type of a `const` and an `enum`. A `#define` is only a text replacement.

### Designated initializers

You can write the name of each field when you set a struct. The order does not matter, and the code is easy to read.

```c
Student sara = {.age = 22, .name = "Sara"};
int days[7] = {[0] = 1, [6] = 7};
```

### Safe text functions

```c
char text[20];
snprintf(text, sizeof text, "Age: %d", 20);
```

- Use `snprintf` instead of `sprintf`. It never writes more than the size you give.
- Never use `gets()`. It was removed from C in the C11 standard. Use `fgets()` to read a line.

### Check a condition when you compile: static_assert

```c
#include <assert.h>

static_assert(sizeof(int) >= 4, "int must be at least 4 bytes");
```

### Memory: check and free

```c
#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int *numbers = malloc(3 * sizeof *numbers);
    if (numbers == NULL) {
        printf("Out of memory\n");
        return 1;
    }

    for (int i = 0; i < 3; i++) {
        numbers[i] = (i + 1) * 10;
    }
    printf("%d %d %d\n", numbers[0], numbers[1], numbers[2]);

    free(numbers);
    return 0;
}
```

- You do not need to write a cast before `malloc` in C.
- Use `sizeof *numbers` so the size always matches the type.
- Always check for `NULL`, and always `free` what you `malloc`.

## What is new in C23

The newest standard C23 makes things simpler. For example, `bool`, `true`, and `false` become real keywords, `nullptr` is added as a better null pointer, and `constexpr` is added for values known at compile time. Compile with `-std=c2x` or `-std=c23` if your compiler is new enough.

## Old things you should stop using

| Old (do not use) | Modern replacement |
| --- | --- |
| `gets()` | `fgets()` |
| `sprintf()` | `snprintf()` |
| `int main()` | `int main(void)` |
| Variables only at the top | Declare where you use them |
| `#define MAX 100` | `const int max = 100;` or `enum` |
| `(int *)malloc(...)` | `malloc(...)` without a cast |
| Compiling without warnings | `-Wall -Wextra` |

## Try it yourself

1. Compile and run the modern program above with `gcc -std=c17 -Wall -Wextra`.
2. Add a second student with designated initializers and print both.
3. Write a function `bool is_even(int n)` and test it in `main`.
4. Use `snprintf` to make the text `"Score: 95"` in a char array, then print it.

## Quick summary

- Modern C means C99 and newer. Compile with `-std=c17 -Wall -Wextra`.
- Write `int main(void)`, declare variables where you use them, and use `//` comments.
- Use `bool`, fixed-size integers, `const`, and `enum`.
- Use `snprintf` and `fgets`, and never `gets`.
- Check `malloc` for `NULL` and always `free`.
