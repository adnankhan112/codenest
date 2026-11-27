---
title: C Enums
sidebar_position: 21
---

# C Enums

Sometimes a variable can have only a few fixed values: the days of the week, the states of a traffic light, or the levels of a game. An **enum** (short for *enumeration*) lets you give these values readable names.

## What you will learn

- How to create an enum and use its names
- How enum values are numbered
- How to use enums with `switch`
- Why enums are better than plain numbers

## Create an enum

```c
#include <stdio.h>

enum Day { MON, TUE, WED, THU, FRI };

int main() {
    enum Day today = WED;

    printf("%d\n", today);
    return 0;
}
```

Output:

```
2
```

C gives the names numbers automatically: `MON` is `0`, `TUE` is `1`, `WED` is `2`, and so on.

## Your own numbers

```c
#include <stdio.h>

enum Level { LOW = 1, MEDIUM = 5, HIGH = 10 };

int main() {
    enum Level l = MEDIUM;

    printf("%d\n", l);
    return 0;
}
```

Output:

```
5
```

If you give a value only to the first name, the next names continue counting from it:

```c
#include <stdio.h>

enum Color { RED = 1, GREEN, BLUE };

int main() {
    printf("%d %d %d\n", RED, GREEN, BLUE);
    return 0;
}
```

Output:

```
1 2 3
```

## Enums with switch

Enums and `switch` work very well together, because the code reads like English.

```c
#include <stdio.h>

enum Light { RED, YELLOW, GREEN };

int main() {
    enum Light light = GREEN;

    switch (light) {
        case RED:
            printf("Stop\n");
            break;
        case YELLOW:
            printf("Get ready\n");
            break;
        case GREEN:
            printf("Go\n");
            break;
    }
    return 0;
}
```

Output:

```
Go
```

## A shorter name with typedef

```c
#include <stdio.h>

typedef enum { EASY, NORMAL, HARD } Difficulty;

int main() {
    Difficulty d = HARD;

    if (d == HARD) {
        printf("Good luck!\n");
    }
    return 0;
}
```

Output:

```
Good luck!
```

## Print the name, not the number

An enum value is just a number, so we keep the names in an array and use the number as the index.

```c
#include <stdio.h>

enum Day { MON, TUE, WED, THU, FRI };

int main() {
    const char *names[] = {"Mon", "Tue", "Wed", "Thu", "Fri"};
    enum Day today = WED;

    printf("Today is %s\n", names[today]);
    return 0;
}
```

Output:

```
Today is Wed
```

## Enum or #define?

An enum groups related names together and the compiler can help you check them. With `#define` every value is a separate, unrelated constant. For a group of related constants, an enum is the better choice.

## Common mistakes

- Thinking an enum stores text. It stores whole numbers.
- Using the same name in two different enums.
- Putting a semicolon after the last name instead of after the closing brace.

## Key points

- An enum is a list of named whole-number constants.
- The first name is `0` unless you give another value.
- Enums make code easy to read, especially with `switch`.

## Practice questions

1. Create an enum for the four seasons (`SPRING`, `SUMMER`, `AUTUMN`, `WINTER`) and print the value of `WINTER`.
2. What is the value of the first name in an enum by default?
3. Give `HIGH` the value 100 in the `Level` enum above.

<details>
<summary>Show answers</summary>

**1.**

```c
#include <stdio.h>

enum Season { SPRING, SUMMER, AUTUMN, WINTER };

int main() {
    printf("%d\n", WINTER);
    return 0;
}
```

This prints `3`.

**2.** `0`.

**3.**

```c
enum Level { LOW = 1, MEDIUM = 5, HIGH = 100 };
```

</details>
