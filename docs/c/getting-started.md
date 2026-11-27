---
title: C Getting Started
sidebar_position: 2
---

# C Getting Started

Before you can run C programs, you need two things: a **place to write code** and a **compiler**. In this lesson we set up both and run a first program.

## What you will learn

- What a compiler is and why you need one
- How to install GCC on Windows, Linux and macOS
- How to compile and run a C program
- What to do when something goes wrong

## What you need

1. **A code editor.** VS Code is a good free choice.
2. **A compiler.** We use **GCC**, a free and very popular C compiler.

## Install GCC

**Windows (MSYS2):**

1. Download and install MSYS2 from its official website.
2. Open the **MSYS2 UCRT64** terminal and run:

```
pacman -S mingw-w64-ucrt-x86_64-gcc
```

3. Add this folder to your Windows **PATH**:

```
C:\msys64\ucrt64\bin
```

4. Close and reopen VS Code, then check:

```
gcc --version
```

If a version number appears, GCC is ready.

**Linux (Ubuntu/Debian):**

```
sudo apt install gcc
```

**macOS:**

```
xcode-select --install
```

## Write your first program

Create a file named `hello.c` and type this code:

```c
#include <stdio.h>

int main() {
    printf("Hello, CodeNest!\n");
    return 0;
}
```

## Compile and run

Open the terminal in the same folder as `hello.c`.

Compile:

```
gcc hello.c -o hello
```

Run on Windows PowerShell:

```
.\hello
```

Run on Linux or macOS:

```
./hello
```

Output:

```
Hello, CodeNest!
```

## What the compile command means

- `gcc` is the compiler.
- `hello.c` is your source file.
- `-o hello` means: name the output program `hello`.

## A better habit: turn on warnings

```
gcc -Wall -Wextra hello.c -o hello
```

`-Wall -Wextra` asks GCC to warn you about suspicious code. This catches many beginner mistakes early.

## Common errors

- **`gcc is not recognized`:** GCC is not in your PATH. Add its folder to PATH and reopen the terminal.
- **`No such file`:** the terminal is in the wrong folder. Use `cd` to go to the folder that contains `hello.c`.
- **Old output after changing code:** you forgot to compile again. Always compile before you run.

## No compiler? Use an online one

An online C compiler is fine for tiny programs, but install GCC for real learning.

## Key points

- A compiler turns your `.c` file into a program.
- The command is `gcc file.c -o name`.
- Compile again after every change.

## Practice questions

1. Which command checks that GCC is installed?
2. Compile a file named `app.c` into a program named `app`.
3. You changed your code but the output is the same. What did you probably forget?

<details>
<summary>Show answers</summary>

**1.** `gcc --version`

**2.** `gcc app.c -o app`

**3.** You forgot to compile the program again after the change.

</details>
