---
title: C Output
sidebar_position: 4
---

# C Output

A program is only useful if it can show results. In C we use the `printf()` function to print text and values on the screen.

## What you will learn

- How to print text and numbers
- How to use new lines and tabs
- How to use format specifiers like `%d` and `%f`
- How to print special characters

## Printing text

```c
#include <stdio.h>

int main() {
    printf("I am learning C.\n");
    printf("It is fun!\n");
    return 0;
}
```

Output:

```
I am learning C.
It is fun!
```

`\n` means **new line**. Without it the next text stays on the same line:

```c
#include <stdio.h>

int main() {
    printf("Hello ");
    printf("World");
    return 0;
}
```

Output:

```
Hello World
```

## Special characters (escape sequences)

| Code | Meaning |
|------|---------|
| `\n` | new line |
| `\t` | tab (a wide space) |
| `\\` | prints one backslash |
| `\"` | prints a double quote |

```c
#include <stdio.h>

int main() {
    printf("Name:\tAli\n");
    printf("Path: C:\\Users\\Ali\n");
    printf("He said \"Hello\"\n");
    return 0;
}
```

Output:

```
Name:	Ali
Path: C:\Users\Ali
He said "Hello"
```

## Printing values with format specifiers

A **format specifier** is a placeholder. `printf` replaces it with the value you give after the text.

| Specifier | Prints |
|-----------|--------|
| `%d` | a whole number (int) |
| `%f` | a decimal number (float or double) |
| `%c` | one character |
| `%s` | text (string) |
| `%%` | the percent sign itself |

```c
#include <stdio.h>

int main() {
    int age = 20;
    double price = 9.5;
    char grade = 'A';

    printf("Age: %d\n", age);
    printf("Price: %f\n", price);
    printf("Grade: %c\n", grade);
    printf("Name: %s\n", "Sara");
    printf("Discount: 10%%\n");
    return 0;
}
```

Output:

```
Age: 20
Price: 9.500000
Grade: A
Name: Sara
Discount: 10%
```

## Control the decimal places

Use `%.2f` to show two digits after the decimal point.

```c
#include <stdio.h>

int main() {
    double price = 9.5;
    printf("Price: %.2f\n", price);
    return 0;
}
```

Output:

```
Price: 9.50
```

## Many values in one line

```c
#include <stdio.h>

int main() {
    int a = 5, b = 3;
    printf("%d + %d = %d\n", a, b, a + b);
    return 0;
}
```

Output:

```
5 + 3 = 8
```

The values are matched with the specifiers **in order**: first `a`, then `b`, then `a + b`.

## Common mistakes

- Using `%d` for a decimal number. Use `%f` instead.
- Giving fewer values than specifiers, like `printf("%d %d", a);`.
- Forgetting `\n`, so the output joins the next line.
- Forgetting the `\\` for a backslash in a path.

## Key points

- `printf` prints text and values.
- `\n` is a new line, and `\t` is a tab.
- `%d` is for int, `%f` for decimals, `%c` for characters and `%s` for text.
- `%.2f` controls the decimal places.

## Practice questions

1. Print your name and age on two separate lines using variables.
2. Print the price `49.5` with exactly two decimal places.
3. Print this line exactly: `Use "quotes" and \ here`

<details>
<summary>Show answers</summary>

**1.**

```c
#include <stdio.h>

int main() {
    char name[] = "Ali";
    int age = 21;
    printf("Name: %s\n", name);
    printf("Age: %d\n", age);
    return 0;
}
```

**2.**

```c
#include <stdio.h>

int main() {
    printf("Price: %.2f\n", 49.5);
    return 0;
}
```

**3.**

```c
#include <stdio.h>

int main() {
    printf("Use \"quotes\" and \\ here\n");
    return 0;
}
```

</details>
