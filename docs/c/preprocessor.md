---
title: C Preprocessor and Macros
sidebar_position: 24
---

# C Preprocessor and Macros

Before your code is compiled, a small helper called the **preprocessor** reads it. It handles every line that starts with `#`. It can add files, replace names and even switch pieces of code on and off.

## What you will learn

- What the preprocessor does
- `#include` and `#define`
- Macros with parameters, and their dangers
- Conditional compilation with `#ifdef` and `#if`

## #include

`#include` pastes another file into your code.

```
#include <stdio.h>    system header: use angle brackets
#include "mylib.h"    your own header: use double quotes
```

## #define: simple names

```c
#include <stdio.h>

#define MAX 100
#define GREETING "Welcome to CodeNest"

int main() {
    printf("%s\n", GREETING);
    printf("Maximum: %d\n", MAX);
    return 0;
}
```

Output:

```
Welcome to CodeNest
Maximum: 100
```

The preprocessor simply replaces every `MAX` with `100` before compiling.

## Macros with parameters

A macro can take values, like a small function.

```c
#include <stdio.h>

#define SQUARE(x) ((x) * (x))
#define LARGER(a, b) ((a) > (b) ? (a) : (b))

int main() {
    printf("%d\n", SQUARE(5));
    printf("%d\n", LARGER(7, 12));
    return 0;
}
```

Output:

```
25
12
```

## Danger: always use brackets

A macro is only a **text replacement**. Look at what happens without brackets:

```c
#include <stdio.h>

#define BAD_SQUARE(x) x * x
#define GOOD_SQUARE(x) ((x) * (x))

int main() {
    printf("%d\n", BAD_SQUARE(2 + 3));
    printf("%d\n", GOOD_SQUARE(2 + 3));
    return 0;
}
```

Output:

```
11
25
```

`BAD_SQUARE(2 + 3)` becomes `2 + 3 * 2 + 3`, which is `11`. Brackets around every parameter and around the whole macro prevent this.

Another danger: the arguments may run **twice**. `SQUARE(i++)` would increase `i` two times. For complex work, write a normal function instead.

## Conditional compilation

You can include or remove code depending on a condition. This is useful for debug messages.

```c
#include <stdio.h>

#define DEBUG

int main() {
#ifdef DEBUG
    printf("Debug mode is on\n");
#endif
    printf("Program running\n");
    return 0;
}
```

Output:

```
Debug mode is on
Program running
```

Delete the line `#define DEBUG` and the debug message disappears from the compiled program.

## #if for numbers

```c
#include <stdio.h>

#define VERSION 2

int main() {
#if VERSION >= 2
    printf("New version\n");
#else
    printf("Old version\n");
#endif
    return 0;
}
```

Output:

```
New version
```

## Include guards

A header file included twice can cause errors. An **include guard** prevents that. You will see this pattern in almost every header file:

```c
#ifndef MYLIB_H
#define MYLIB_H

int add(int a, int b);

#endif
```

It means: "if `MYLIB_H` is not defined yet, define it and include the content. Otherwise skip everything." See the **C Header Files** lesson for more.

## Handy predefined names

C gives you some ready-made macros:

- `__LINE__` is the current line number.
- `__FILE__` is the name of the current file.

```c
#include <stdio.h>

int main() {
    printf("File: %s, line: %d\n", __FILE__, __LINE__);
    return 0;
}
```

Example output (the file name will be different on your computer):

```
File: demo.c, line: 4
```

## Common mistakes

- Putting a semicolon at the end of `#define`.
- Writing `#define PI = 3.14`. There is no `=`.
- Forgetting the brackets inside a macro.
- Using a macro when a normal function would be safer.

## Key points

- The preprocessor runs before the compiler and works with lines that start with `#`.
- `#define` replaces text. `#include` pastes a file.
- Always put brackets around macro parameters.
- `#ifdef` and `#if` choose which code is compiled.

## Practice questions

1. Write a macro `CUBE(x)` and print `CUBE(3)`.
2. What does `#ifdef DEBUG` check?
3. Why do we put brackets around macro parameters?

<details>
<summary>Show answers</summary>

**1.**

```c
#include <stdio.h>

#define CUBE(x) ((x) * (x) * (x))

int main() {
    printf("%d\n", CUBE(3));
    return 0;
}
```

This prints `27`.

**2.** It checks whether the name `DEBUG` has been defined. If yes, the code up to `#endif` is compiled.

**3.** A macro only replaces text, so without brackets the order of operations can change and give a wrong answer, like `BAD_SQUARE(2 + 3)` giving 11 instead of 25.

</details>
