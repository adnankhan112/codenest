---
title: C Comments
sidebar_position: 5
---

# C Comments

A **comment** is a note written for humans. The compiler completely ignores it. Good comments make your code easier to understand, for you and for other people.

## What you will learn

- How to write single-line and multi-line comments
- When comments are useful
- How to switch a line of code off while testing

## Single-line comments

A single-line comment starts with `//` and runs to the end of the line.

```c
#include <stdio.h>

int main() {
    // This line prints a greeting
    printf("Hello\n");   // this comment is after the code
    return 0;
}
```

Output:

```
Hello
```

## Multi-line comments

A multi-line comment starts with `/*` and ends with `*/`.

```c
#include <stdio.h>

/* This program prints a welcome message.
   Written for the CodeNest C tutorial. */
int main() {
    printf("Welcome\n");
    return 0;
}
```

Output:

```
Welcome
```

## Switch a line off while testing

Putting `//` in front of a line stops it from running, but keeps it in the file.

```c
#include <stdio.h>

int main() {
    printf("Line 1\n");
    // printf("Line 2\n");
    printf("Line 3\n");
    return 0;
}
```

Output:

```
Line 1
Line 3
```

## Good comments and bad comments

Explain **why** the code does something, not what is already obvious.

```c
int x = 5;   // set x to 5          <- not useful
int attempts = 3;   // user gets three tries   <- useful
```

## Common mistakes

- Forgetting to close `/*` with `*/`. Everything after it becomes a comment.
- Putting one multi-line comment inside another. This does not work in C.
- Writing too many comments for very simple lines.

## Key points

- `//` is a single-line comment.
- `/* ... */` is a multi-line comment.
- The compiler ignores comments.
- Comments help you explain why, not just what.

## Practice questions

1. Write a program with a comment at the top that says what it does.
2. Which part of this program will not run?

```c
printf("A\n");
// printf("B\n");
printf("C\n");
```

3. Which symbol closes a multi-line comment?

<details>
<summary>Show answers</summary>

**1.**

```c
#include <stdio.h>

// This program prints my name
int main() {
    printf("Ali\n");
    return 0;
}
```

**2.** The second line, `printf("B\n");`, because it is a comment.

**3.** `*/`

</details>
