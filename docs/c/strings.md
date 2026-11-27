---
title: C Strings
sidebar_position: 16
---

# C Strings

A **string** is a piece of text, like a name or a sentence. Many languages have a special string type, but **C does not**. In C, a string is an **array of characters** that ends with a special character `\0`.

## What you will learn

- How strings are stored in C
- The role of the end marker `\0`
- How to read, print, compare and copy strings
- Common string tasks like counting and reversing

## Create a string

```c
#include <stdio.h>

int main() {
    char name[] = "CodeNest";

    printf("Name: %s\n", name);
    printf("First letter: %c\n", name[0]);
    return 0;
}
```

Output:

```
Name: CodeNest
First letter: C
```

We use `%s` to print a whole string and `%c` for one character.

## The hidden \0 character

The text `"CodeNest"` has 8 letters, but C stores **9 characters**: the 8 letters plus `\0` (called the **null character**). It marks the end of the string, so functions like `printf` know where to stop.

```
index:  0   1   2   3   4   5   6   7   8
char:   C   o   d   e   N   e   s   t   \0
```

So to store a string with `n` letters, the array needs **at least `n + 1`** places.

```c
#include <stdio.h>

int main() {
    char word[] = {'H', 'i', '\0'};
    printf("%s\n", word);
    return 0;
}
```

Output:

```
Hi
```

## Length of a string

`strlen()` from `string.h` counts the letters (without `\0`).

```c
#include <stdio.h>
#include <string.h>

int main() {
    char name[] = "CodeNest";

    printf("Letters: %d\n", (int)strlen(name));
    printf("Array size: %d\n", (int)sizeof(name));
    return 0;
}
```

Output:

```
Letters: 8
Array size: 9
```

## Change a character

```c
#include <stdio.h>

int main() {
    char word[] = "cat";

    word[0] = 'b';
    printf("%s\n", word);
    return 0;
}
```

Output:

```
bat
```

## Copy and join strings

You cannot copy a string with `=`. Use `strcpy`. To join, use `strcat`.

```c
#include <stdio.h>
#include <string.h>

int main() {
    char first[20] = "Code";
    char full[20];

    strcpy(full, first);
    strcat(full, "Nest");
    printf("%s\n", full);
    return 0;
}
```

Output:

```
CodeNest
```

The destination array must be **big enough** for the result.

## Compare strings

Never compare strings with `==`. That compares addresses, not text. Use `strcmp`, which returns `0` when the strings are equal.

```c
#include <stdio.h>
#include <string.h>

int main() {
    char a[] = "hello";
    char b[] = "hello";

    if (strcmp(a, b) == 0) {
        printf("Same\n");
    } else {
        printf("Different\n");
    }
    return 0;
}
```

Output:

```
Same
```

## Read a string from the user

Use `fgets` for text that can contain spaces (see the **C User Input** lesson).

```c
#include <stdio.h>
#include <string.h>

int main() {
    char city[50];

    printf("Enter your city: ");
    fgets(city, sizeof(city), stdin);
    city[strcspn(city, "\n")] = '\0';
    printf("You live in %s.\n", city);
    return 0;
}
```

Sample run:

```
Enter your city: Islamabad
You live in Islamabad.
```

## Example: count the vowels

```c
#include <stdio.h>
#include <ctype.h>

int main() {
    char text[] = "Programming in C";
    int vowels = 0;

    for (int i = 0; text[i] != '\0'; i++) {
        char c = tolower(text[i]);
        if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
            vowels++;
        }
    }
    printf("Vowels: %d\n", vowels);
    return 0;
}
```

Output:

```
Vowels: 4
```

The loop stops when it reaches `\0`.

## Example: reverse a string

```c
#include <stdio.h>
#include <string.h>

int main() {
    char s[] = "CodeNest";
    int left = 0, right = (int)strlen(s) - 1;

    while (left < right) {
        char temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
    printf("%s\n", s);
    return 0;
}
```

Output:

```
tseNedoC
```

## Common mistakes

- Forgetting the extra place for `\0`.
- Using `==` to compare strings.
- Using `=` to copy a string.
- Copying a long string into a small array. This overwrites other memory.
- Using single quotes: `'A'` is a character and `"A"` is a string.

## Key points

- A C string is a `char` array that ends with `\0`.
- `strlen` counts letters, `strcpy` copies, `strcat` joins and `strcmp` compares.
- Use `fgets` to read a whole line.

## Practice questions

1. Print the first and last letter of `"Pakistan"`.
2. How many array places do you need to store the word `"Hello"`?
3. Count the length of a string with a loop, without using `strlen`.

<details>
<summary>Show answers</summary>

**1.**

```c
#include <stdio.h>
#include <string.h>

int main() {
    char s[] = "Pakistan";
    printf("%c %c\n", s[0], s[strlen(s) - 1]);
    return 0;
}
```

This prints `P n`.

**2.** Six places: 5 letters plus the `\0` end marker.

**3.**

```c
#include <stdio.h>

int main() {
    char s[] = "Pakistan";
    int length = 0;
    while (s[length] != '\0') {
        length++;
    }
    printf("Length = %d\n", length);
    return 0;
}
```

</details>
