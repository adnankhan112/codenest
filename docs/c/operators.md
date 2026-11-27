---
title: C Operators
sidebar_position: 9
---

# C Operators

**Operators** are symbols that do work on values. You already used `+` to add two numbers. In this lesson we learn all the important operators.

## What you will learn

- Arithmetic operators and integer division
- Assignment and increment operators
- Comparison and logical operators
- The order in which C solves an expression

## Arithmetic operators

- `+` add
- `-` subtract
- `*` multiply
- `/` divide
- `%` remainder (modulus)

```c
#include <stdio.h>

int main() {
    int a = 17, b = 5;
    printf("%d + %d = %d\n", a, b, a + b);
    printf("%d - %d = %d\n", a, b, a - b);
    printf("%d * %d = %d\n", a, b, a * b);
    printf("%d / %d = %d\n", a, b, a / b);
    printf("%d %% %d = %d\n", a, b, a % b);
    return 0;
}
```

Output:

```
17 + 5 = 22
17 - 5 = 12
17 * 5 = 85
17 / 5 = 3
17 % 5 = 2
```

## Careful: integer division

When you divide two whole numbers, C throws away the decimal part. `17 / 5` is `3`, not `3.4`. To get the exact answer, make one number a decimal:

```c
#include <stdio.h>

int main() {
    int a = 17, b = 5;
    printf("%.2f\n", 17.0 / 5);
    printf("%.2f\n", (double)a / b);
    return 0;
}
```

Output:

```
3.40
3.40
```

`(double)a` is called a **cast**. It changes `a` to a decimal for that one calculation.

## The remainder operator %

`%` gives what is left after division. It is great for finding the last digit of a number.

```c
#include <stdio.h>

int main() {
    int n = 358;
    printf("Last digit: %d\n", n % 10);
    printf("Without last digit: %d\n", n / 10);
    return 0;
}
```

Output:

```
Last digit: 8
Without last digit: 35
```

## Assignment operators

```c
#include <stdio.h>

int main() {
    int x = 10;
    x += 5;  printf("%d\n", x);
    x -= 3;  printf("%d\n", x);
    x *= 2;  printf("%d\n", x);
    x /= 4;  printf("%d\n", x);
    x %= 4;  printf("%d\n", x);
    return 0;
}
```

Output:

```
15
12
24
6
2
```

`x += 5` is a short way to write `x = x + 5`.

## Increment and decrement

`x++` adds 1 and `x--` subtracts 1. The place of `++` matters:

- `a++` (post) uses the old value first, then adds 1.
- `++a` (pre) adds 1 first, then uses the new value.

```c
#include <stdio.h>

int main() {
    int a = 5;
    int b = a++;
    int c = ++a;
    printf("a=%d b=%d c=%d\n", a, b, c);
    return 0;
}
```

Output:

```
a=7 b=5 c=7
```

## Comparison operators

The result is `1` for true and `0` for false.

- `==` equal to
- `!=` not equal to
- `>` greater than, `<` less than
- `>=` greater or equal, `<=` less or equal

```c
#include <stdio.h>

int main() {
    printf("%d\n", 5 > 3);
    printf("%d\n", 5 == 3);
    printf("%d\n", 5 != 3);
    return 0;
}
```

Output:

```
1
0
1
```

## Logical operators

- `&&` AND: true only if both sides are true
- `||` OR: true if at least one side is true
- `!` NOT: reverses true and false

```c
#include <stdio.h>

int main() {
    int age = 20, hasId = 1;
    printf("%d\n", age >= 18 && hasId);
    printf("%d\n", age < 18 || !hasId);
    printf("%d\n", !(age >= 18));
    return 0;
}
```

Output:

```
1
0
0
```

## Order of operations

C follows the same order as maths: brackets first, then `*` `/` `%`, then `+` `-`.

```c
#include <stdio.h>

int main() {
    printf("%d\n", 2 + 3 * 4);
    printf("%d\n", (2 + 3) * 4);
    return 0;
}
```

Output:

```
14
20
```

## Real example: Celsius to Fahrenheit

```c
#include <stdio.h>

int main() {
    double celsius = 36.6;
    double fahrenheit = celsius * 9 / 5 + 32;
    printf("%.2f C = %.2f F\n", celsius, fahrenheit);
    return 0;
}
```

Output:

```
36.60 C = 97.88 F
```

## Common mistakes

- Dividing two integers and expecting a decimal answer.
- Writing `=` when you mean `==`.
- Forgetting brackets, so the order of operations gives a wrong answer.
- Dividing by zero. It crashes the program or gives a wrong result.

## Key points

- `/` on two integers gives an integer.
- `%` gives the remainder.
- Comparisons give `1` (true) or `0` (false).
- Use brackets when you are not sure about the order.

## Practice questions

1. Find the average of 10, 20 and 25 as a decimal number.
2. Print the last digit of 4729.
3. What are the values of `10 / 4`, `10 % 4` and `10 / 4.0`?

<details>
<summary>Show answers</summary>

**1.**

```c
#include <stdio.h>

int main() {
    double avg = (10 + 20 + 25) / 3.0;
    printf("Average: %.2f\n", avg);
    return 0;
}
```

This prints `Average: 18.33`.

**2.**

```c
#include <stdio.h>

int main() {
    printf("%d\n", 4729 % 10);
    return 0;
}
```

This prints `9`.

**3.** `10 / 4` is `2`, `10 % 4` is `2` and `10 / 4.0` is `2.5`.

</details>
