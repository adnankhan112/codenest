---
title: C Error Handling
sidebar_position: 25
---

# C Error Handling

In many languages errors are handled with `try` and `catch`. **C has no such feature.** In C you must **check** whether each risky action succeeded, and decide what to do if it did not. Good error handling is what makes a program reliable.

## What you will learn

- How to check return values
- How to show clear error messages with `perror` and `strerror`
- How to validate user input
- What exit codes mean

## Which actions can fail?

- Opening a file (`fopen`)
- Asking for memory (`malloc`)
- Reading input (`scanf`)
- Dividing by zero or using bad values

## Idea 1: check the return value

Most functions tell you if they succeeded. `fopen` and `malloc` return `NULL` on failure, and `scanf` returns how many values it read.

```c
#include <stdio.h>

int main() {
    FILE *f = fopen("data.txt", "r");

    if (f == NULL) {
        printf("Could not open data.txt\n");
        return 1;
    }
    fclose(f);
    return 0;
}
```

Output:

```
Could not open data.txt
```

## Idea 2: explain the reason

When a function fails, C stores an error number in `errno`. The function `strerror` turns it into readable text.

```c
#include <stdio.h>
#include <errno.h>
#include <string.h>

int main() {
    FILE *f = fopen("missing.txt", "r");

    if (f == NULL) {
        printf("Error: %s\n", strerror(errno));
        return 1;
    }
    fclose(f);
    return 0;
}
```

Output:

```
Error: No such file or directory
```

`perror("message")` does the same but prints on the **error stream**:

```c
perror("Error opening file");
```

```
Error opening file: No such file or directory
```

## Idea 3: return a status from your own functions

A good pattern: return `0` for success and a negative number for failure, and send the answer through a pointer.

```c
#include <stdio.h>

int divide(int a, int b, int *result) {
    if (b == 0) {
        return -1;
    }
    *result = a / b;
    return 0;
}

int main() {
    int answer;

    if (divide(10, 2, &answer) == 0) {
        printf("Result: %d\n", answer);
    }
    if (divide(5, 0, &answer) != 0) {
        printf("Error: division by zero\n");
    }
    return 0;
}
```

Output:

```
Result: 5
Error: division by zero
```

## Idea 4: validate user input

Never trust the user to type the right thing. Keep asking until the input is valid.

```c
#include <stdio.h>

int main() {
    int n;

    while (1) {
        printf("Enter a positive number: ");
        if (scanf("%d", &n) == 1 && n > 0) {
            break;
        }
        printf("Invalid input. Try again.\n");

        int ch;
        while ((ch = getchar()) != '\n' && ch != EOF) {
        }
    }
    printf("You entered %d\n", n);
    return 0;
}
```

Sample run (the user types `-5`, then `abc`, then `7`):

```
Enter a positive number: -5
Invalid input. Try again.
Enter a positive number: abc
Invalid input. Try again.
Enter a positive number: 7
You entered 7
```

After a failed `scanf`, the bad text stays in the input. The small inner loop **throws it away**, otherwise the program would loop forever.

## Idea 5: exit codes

The value returned from `main` is the **exit code**. By convention:

- `0` (or `EXIT_SUCCESS`) means success.
- Any other value (or `EXIT_FAILURE`) means a problem.

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int *p = malloc(100 * sizeof(int));

    if (p == NULL) {
        fprintf(stderr, "Out of memory\n");
        return EXIT_FAILURE;
    }
    printf("Memory allocated\n");
    free(p);
    return EXIT_SUCCESS;
}
```

Output:

```
Memory allocated
```

You can see the exit code of the last program in the terminal. In PowerShell:

```
echo $LASTEXITCODE
```

On Linux or macOS:

```
echo $?
```

## Good habits

1. Check the result of `fopen`, `malloc` and `scanf`.
2. Print clear messages that say **what** went wrong.
3. Close files and free memory before you stop.
4. Send error messages to `stderr`, and normal output to `stdout`.
5. Test your program with bad input on purpose.

## Common mistakes

- Never checking whether `fopen` or `malloc` worked.
- Using a value that `scanf` failed to read.
- Dividing by a number that may be zero.
- Hiding errors instead of reporting them.

## Key points

- C has no `try` and `catch`. You check results yourself.
- `perror` and `strerror` explain why something failed.
- Return `0` for success and a non-zero code for failure.
- Validate all user input.

## Practice questions

1. Write a program that tries to open `data.txt` and prints `Could not open data.txt` if it is missing.
2. What does `return 1;` from `main` usually mean?
3. Which function turns an error number into readable text?

<details>
<summary>Show answers</summary>

**1.**

```c
#include <stdio.h>

int main() {
    FILE *f = fopen("data.txt", "r");
    if (f == NULL) {
        printf("Could not open data.txt\n");
        return 1;
    }
    fclose(f);
    return 0;
}
```

**2.** It tells the system that the program ended with a problem. `0` means success.

**3.** `strerror`.

</details>
