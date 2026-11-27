---
title: C Syntax
sidebar_position: 3
---

# C Syntax

**Syntax** means the rules of writing code. A C compiler is strict: if you break a rule, it shows an error and stops. Learning these rules early saves a lot of time.

## What you will learn

- The parts of a C program
- The rules every C program must follow
- How to read a simple compiler error

## The parts of a program

```c
#include <stdio.h>

int main() {
    printf("Learning C syntax\n");
    return 0;
}
```

Output:

```
Learning C syntax
```

| Part | Meaning |
|------|---------|
| `#include <stdio.h>` | adds the input/output tools |
| `int main()` | the starting function |
| `{ }` | the body of the function |
| `printf(...)` | a statement that prints text |
| `;` | ends the statement |
| `return 0;` | ends the program successfully |

## The main rules

1. **Every statement ends with a semicolon `;`.**
2. **The body of a function goes inside curly braces `{ }`.**
3. **C is case-sensitive.** `printf` works, but `Printf` does not.
4. **Every program needs a `main` function.**
5. **Text goes inside double quotes** `" "`.

## Spaces and new lines do not matter

The compiler ignores extra spaces and blank lines. This program works exactly like the one above, but it is hard to read:

```c
#include <stdio.h>
int main(){printf("Learning C syntax\n");return 0;}
```

Always write neat code, with one statement per line and four spaces of indentation inside braces.

## Reading a compiler error

If you forget a semicolon:

```c
printf("Hello")
return 0;
```

GCC says something like:

```
error: expected ';' before 'return'
```

Read the **line number** in the message, then look at that line and the line above it.

## Common mistakes

- Missing semicolon.
- Missing closing brace `}`.
- Writing `Printf` or `Main` with a capital letter.
- Using single quotes for text. `'A'` is one character, and `"A"` is text.

## Key points

- End statements with `;`.
- Use `{ }` for function bodies.
- C is case-sensitive.
- Read error messages from the top, and fix the first error first.

## Practice questions

1. Which symbol ends a C statement?
2. Is `Printf("Hi");` correct? Why or why not?
3. Find the mistake and fix the program.

```c
#include <stdio.h>

int main() {
    printf("Hi\n")
    return 0;
}
```

<details>
<summary>Show answers</summary>

**1.** The semicolon `;`.

**2.** No. C is case-sensitive, so `Printf` is a different name. The correct name is `printf`.

**3.** The semicolon is missing after `printf("Hi\n")`.

```c
#include <stdio.h>

int main() {
    printf("Hi\n");
    return 0;
}
```

</details>
