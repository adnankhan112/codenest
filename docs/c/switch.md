---
title: C Switch
sidebar_position: 12
---

# C Switch

When you must choose one action out of many fixed options, a long `else if` chain becomes hard to read. The `switch` statement is a cleaner way.

## What you will learn

- The syntax of `switch`, `case`, `break` and `default`
- What happens when you forget `break`
- How to group cases together
- How to build a simple calculator

## Syntax

```
switch (value) {
    case option1:
        // code
        break;
    case option2:
        // code
        break;
    default:
        // code when nothing matches
}
```

## Example: day name

```c
#include <stdio.h>

int main() {
    int day = 3;

    switch (day) {
        case 1:
            printf("Monday\n");
            break;
        case 2:
            printf("Tuesday\n");
            break;
        case 3:
            printf("Wednesday\n");
            break;
        default:
            printf("Another day\n");
    }
    return 0;
}
```

Output:

```
Wednesday
```

## How it works

1. C evaluates `day`.
2. It jumps to the `case` that has the same value.
3. It runs the code until it meets `break`.
4. If no case matches, it runs `default`.

## What if you forget break?

Without `break`, C keeps running the next cases too. This is called **fall-through**.

```c
#include <stdio.h>

int main() {
    int n = 1;

    switch (n) {
        case 1:
            printf("One\n");
        case 2:
            printf("Two\n");
            break;
        case 3:
            printf("Three\n");
    }
    return 0;
}
```

Output:

```
One
Two
```

GCC may show a "this statement may fall through" warning here. That is correct: the warning is telling you about exactly this behaviour.

## Grouping cases on purpose

You can use fall-through to share one action between several cases.

```c
#include <stdio.h>

int main() {
    char letter = 'e';

    switch (letter) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            printf("%c is a vowel\n", letter);
            break;
        default:
            printf("%c is a consonant\n", letter);
    }
    return 0;
}
```

Output:

```
e is a vowel
```

## Example: a small calculator

```c
#include <stdio.h>

int main() {
    double a = 12, b = 4;
    char op = '/';

    switch (op) {
        case '+':
            printf("%.2f\n", a + b);
            break;
        case '-':
            printf("%.2f\n", a - b);
            break;
        case '*':
            printf("%.2f\n", a * b);
            break;
        case '/':
            if (b != 0) {
                printf("%.2f\n", a / b);
            } else {
                printf("Cannot divide by zero\n");
            }
            break;
        default:
            printf("Unknown operator\n");
    }
    return 0;
}
```

Output:

```
3.00
```

## Switch or if-else?

- Use `switch` when you compare **one value** against many fixed options (numbers or characters).
- Use `if-else` for ranges (like `marks >= 80`) or complex conditions.

## Common mistakes

- Forgetting `break`.
- Using `switch` with a decimal number or text. It works only with whole numbers and characters.
- Using the same `case` value twice.
- Forgetting `default`, so unexpected values are ignored silently.

## Key points

- `switch` picks a `case` by matching a value.
- `break` ends the case. `default` handles everything else.
- Missing `break` causes fall-through.

## Practice questions

1. Print the name of the month for the number 3 (1 = January, 2 = February, 3 = March, anything else = Invalid).
2. What does this print when `x = 2`?

```c
switch (x) {
    case 1: printf("A"); break;
    case 2: printf("B");
    case 3: printf("C"); break;
}
```

3. Can you use a `float` in a `switch`?

<details>
<summary>Show answers</summary>

**1.**

```c
#include <stdio.h>

int main() {
    int month = 3;
    switch (month) {
        case 1:
            printf("January\n");
            break;
        case 2:
            printf("February\n");
            break;
        case 3:
            printf("March\n");
            break;
        default:
            printf("Invalid\n");
    }
    return 0;
}
```

**2.** It prints `BC`. Case 2 has no `break`, so it falls into case 3.

**3.** No. `switch` works with whole numbers and characters only.

</details>
