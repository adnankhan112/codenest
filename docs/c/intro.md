---
title: C Introduction
sidebar_position: 1
---

# C Introduction

C is one of the most important programming languages in the world. Many other languages, like C++, Java and C#, were built on its ideas. If you learn C well, every other language becomes easier.

## What you will learn

- What C is, and who created it
- Where C is used today
- How a C program becomes a running program
- How to read your first C program line by line

## What is C?

A **programming language** is a way to give instructions to a computer. C is one such language. Dennis Ritchie created it at Bell Labs in the early 1970s, and it was first used to write the UNIX operating system.

C is still popular today because it is **fast** and gives you **direct control** over the computer's memory. Think of a car: many languages let you only drive it, but C lets you open the bonnet and work on the engine.

## Where is C used?

- **Operating systems:** the Linux kernel is written in C.
- **Embedded devices:** washing machines, car systems, routers and medical devices.
- **Databases:** SQLite is written in C.
- **Other languages:** the main Python interpreter (CPython) is written in C.
- **Games and game engines:** where speed matters.

## Why learn C first?

1. It teaches you how memory, variables and functions really work.
2. The same ideas appear in C++, Java, C# and JavaScript.
3. You understand what other languages hide from you.

## How a C program runs

A computer cannot read C code directly. A program called a **compiler** translates your code into machine code. The steps are:

```
hello.c  ->  compiler (GCC)  ->  hello.exe  ->  run  ->  output
(you write)   (translates)       (program)
```

1. **Write** the code in a file that ends with `.c`.
2. **Compile** it with a compiler such as GCC.
3. **Run** the program that the compiler creates.

## Your first C program

```c
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
```

Output:

```
Hello, World!
```

## How it works, line by line

- `#include <stdio.h>` brings in the standard input/output tools. We need it to use `printf`.
- `int main()` is the **starting point**. The computer always begins here.
- `{` and `}` mark the start and end of the function body.
- `printf("Hello, World!\n");` prints the text. `\n` moves to a new line.
- `return 0;` tells the computer the program finished successfully.

## Try it yourself

Change the text inside the quotes to your own name and run the program again.

## Common mistakes

- Forgetting the semicolon `;` at the end of a statement.
- Writing `Main` instead of `main`. C is case-sensitive.
- Forgetting the quotes around the text inside `printf`.

## Key points

- C was created by Dennis Ritchie in the early 1970s.
- A compiler turns C code into a program the computer can run.
- Every C program starts from the `main` function.

## Practice questions

1. Write a program that prints `I am learning C`.
2. Print your name on one line and your city on the next line.
3. What is the name of the function where every C program starts?

<details>
<summary>Show answers</summary>

**1.**

```c
#include <stdio.h>

int main() {
    printf("I am learning C\n");
    return 0;
}
```

**2.**

```c
#include <stdio.h>

int main() {
    printf("Ali\n");
    printf("Lahore\n");
    return 0;
}
```

**3.** The `main` function.

</details>
