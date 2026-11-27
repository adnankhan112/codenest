---
title: C File Handling
sidebar_position: 23
---

# C File Handling

Variables disappear when a program ends. To keep data, such as notes, scores or settings, we store it in a **file**. C can create, write and read files using the functions in `stdio.h`.

## What you will learn

- How to open and close a file
- How to write and read text files
- The file modes `r`, `w` and `a`
- How to handle a file that does not exist

## The steps

1. **Open** the file with `fopen`.
2. **Check** that it opened.
3. **Read or write.**
4. **Close** the file with `fclose`.

```
FILE *f = fopen("notes.txt", "w");
```

`FILE *` is a pointer that represents the open file.

## File modes

| Mode | Meaning |
|------|---------|
| `r` | read an existing file |
| `w` | write; creates the file, or **erases** the old content |
| `a` | append; adds new text at the **end** |

## Write and read a text file

```c
#include <stdio.h>

int main() {
    FILE *f = fopen("notes.txt", "w");
    if (f == NULL) {
        printf("Cannot open file\n");
        return 1;
    }
    fprintf(f, "Line one\n");
    fprintf(f, "Line two\n");
    fprintf(f, "Line three\n");
    fclose(f);

    char line[100];
    f = fopen("notes.txt", "r");
    if (f == NULL) {
        printf("Cannot open file\n");
        return 1;
    }
    while (fgets(line, sizeof(line), f) != NULL) {
        printf("%s", line);
    }
    fclose(f);
    return 0;
}
```

Output:

```
Line one
Line two
Line three
```

## How it works

- `fprintf(f, ...)` works like `printf`, but writes into the file.
- `fgets(line, size, f)` reads one line from the file. It returns `NULL` at the end of the file, which stops the loop.
- `fclose(f)` saves the data and releases the file.

## Append: add without erasing

```c
#include <stdio.h>

int main() {
    FILE *f = fopen("fruits.txt", "w");
    if (f == NULL) {
        return 1;
    }
    fprintf(f, "Apple\n");
    fclose(f);

    f = fopen("fruits.txt", "a");
    if (f == NULL) {
        return 1;
    }
    fprintf(f, "Banana\n");
    fclose(f);

    char line[50];
    int count = 0;
    f = fopen("fruits.txt", "r");
    if (f == NULL) {
        return 1;
    }
    while (fgets(line, sizeof(line), f) != NULL) {
        printf("%s", line);
        count++;
    }
    fclose(f);
    printf("Lines: %d\n", count);
    return 0;
}
```

Output:

```
Apple
Banana
Lines: 2
```

If we had used `"w"` the second time, `Apple` would have been erased.

## Read numbers with fscanf

`fscanf` reads from a file the same way `scanf` reads from the keyboard.

```c
#include <stdio.h>

int main() {
    FILE *f = fopen("numbers.txt", "w");
    if (f == NULL) {
        return 1;
    }
    fprintf(f, "10 20 30\n");
    fclose(f);

    int a, b, c;
    f = fopen("numbers.txt", "r");
    if (f == NULL) {
        return 1;
    }
    fscanf(f, "%d %d %d", &a, &b, &c);
    fclose(f);

    printf("Sum = %d\n", a + b + c);
    return 0;
}
```

Output:

```
Sum = 60
```

## What if the file does not exist?

Opening a missing file with `"r"` returns `NULL`. Always check.

```c
#include <stdio.h>

int main() {
    FILE *f = fopen("missing.txt", "r");

    if (f == NULL) {
        printf("Could not open missing.txt\n");
        return 1;
    }
    fclose(f);
    return 0;
}
```

Output:

```
Could not open missing.txt
```

## Where is my file?

A file name like `"notes.txt"` is created in the **folder the program is run from**. If you cannot find it, check the folder in your terminal.

## Common mistakes

- Not checking whether `fopen` returned `NULL`.
- Forgetting `fclose`, so some data may never be saved.
- Using `"w"` when you wanted `"a"` and erasing old data.
- Reading a file that was never created.

## Key points

- Use `fopen`, then read or write, then `fclose`.
- `r` reads, `w` writes (erasing old data) and `a` appends.
- `fgets` returns `NULL` at the end of the file.
- Always check that the file opened.

## Practice questions

1. Write a name and an age into a file, read them back and print `Sara is 21 years old.`
2. What is the difference between mode `w` and mode `a`?
3. Why should you always call `fclose`?

<details>
<summary>Show answers</summary>

**1.**

```c
#include <stdio.h>

int main() {
    FILE *f = fopen("person.txt", "w");
    if (f == NULL) {
        return 1;
    }
    fprintf(f, "%s %d\n", "Sara", 21);
    fclose(f);

    char name[50];
    int age;
    f = fopen("person.txt", "r");
    if (f == NULL) {
        return 1;
    }
    fscanf(f, "%49s %d", name, &age);
    fclose(f);

    printf("%s is %d years old.\n", name, age);
    return 0;
}
```

**2.** `w` erases the old content before writing. `a` keeps the old content and adds new text at the end.

**3.** `fclose` saves any waiting data to the disk and releases the file so other programs can use it.

</details>

For binary data such as images, see the **C Binary Files** lesson.
