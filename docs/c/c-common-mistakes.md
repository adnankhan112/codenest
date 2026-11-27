---
title: "Common C Mistakes"
sidebar_position: 94
---

# Common C Mistakes

Everyone makes mistakes when learning C. The good news is that most mistakes repeat. If you know them, you can avoid them. For each mistake below you will see the wrong code, the right code, and the reason.

C does not protect you like some other languages. Some mistakes give no error at all. The program may seem to work, and then fail later. This is called **undefined behavior**. Always compile with `-Wall -Wextra` and read every warning.

## Mistake 1: Using = instead of ==

```c
// Wrong
if (score = 100) {
    printf("Perfect\n");
}

// Right
if (score == 100) {
    printf("Perfect\n");
}
```

**Why:** A single `=` gives the value 100 to `score`, and the condition is then always true. Two equal signs `==` compare. The compiler warns you when you use `-Wall`.

## Mistake 2: Dividing two integers

```c
// Wrong
double average = 5 / 2;
printf("%f\n", average);   // 2.000000

// Right
double average = 5 / 2.0;
printf("%f\n", average);   // 2.500000
```

**Why:** When both numbers are `int`, the result is also an `int`, and the decimal part is cut off. Make at least one of the numbers a `double`.

## Mistake 3: Using a variable that has no value

```c
// Wrong
int total;
total += 10;       // total had a random value

// Right
int total = 0;
total += 10;
```

**Why:** A local variable in C does not start at zero. It holds whatever was in that memory before. Always give a value when you make a variable.

## Mistake 4: Going outside an array

```c
// Wrong
int numbers[3] = {10, 20, 30};
for (int i = 0; i <= 3; i++) {   // reads numbers[3], which does not exist
    printf("%d\n", numbers[i]);
}

// Right
for (int i = 0; i < 3; i++) {
    printf("%d\n", numbers[i]);
}
```

**Why:** An array of 3 items has the places 0, 1, and 2. The place 3 is outside the array. C does not stop you, so the program reads or writes memory that is not yours.

## Mistake 5: Comparing strings with ==

```c
// Wrong
if (name == "Ali") {
    printf("Hello Ali\n");
}

// Right
#include <string.h>

if (strcmp(name, "Ali") == 0) {
    printf("Hello Ali\n");
}
```

**Why:** The `==` sign compares the addresses of the two strings, not their letters. `strcmp` compares the letters and gives 0 when they are equal.

## Mistake 6: Forgetting & in scanf

```c
// Wrong
int age;
scanf("%d", age);

// Right
int age;
scanf("%d", &age);
```

**Why:** `scanf` needs the address of the variable, so that it can put the value there. The `&` sign gives the address. For text, never use `%s` alone, because it has no size limit. Use `fgets`.

## Mistake 7: Copying text into a box that is too small

```c
// Wrong
char name[4];
strcpy(name, "Alexander");   // 10 bytes in a 4 byte box

// Right
char name[20];
snprintf(name, sizeof name, "%s", "Alexander");
```

**Why:** The text "Alexander" needs 10 bytes, with the ending `'\0'`. A box of 4 bytes is too small, so the extra bytes damage other memory. This is called a buffer overflow, and it is a very common cause of security problems. `snprintf` never writes more than the size you give it.

## Mistake 8: Forgetting to free memory

```c
// Wrong
int *numbers = malloc(100 * sizeof *numbers);
// ... use numbers ...
// the program ends the function without free

// Right
int *numbers = malloc(100 * sizeof *numbers);
if (numbers == NULL) {
    return 1;
}
// ... use numbers ...
free(numbers);
```

**Why:** Memory from `malloc` stays taken until you call `free`. If you forget, the program has a memory leak. A long program can then run out of memory. Also always check that `malloc` did not give `NULL`.

## Mistake 9: Using memory after free

```c
// Wrong
free(numbers);
numbers[0] = 5;   // numbers points to memory that is not yours any more

// Right
free(numbers);
numbers = NULL;   // now a mistake is easy to find
```

**Why:** After `free`, the pointer still holds the old address, but the memory is not yours. Using it is undefined behavior. Setting the pointer to `NULL` after `free` is a good habit.

## Mistake 10: Returning the address of a local variable

```c
// Wrong
int *make_number(void) {
    int value = 42;
    return &value;   // value disappears when the function ends
}

// Right
int make_number(void) {
    int value = 42;
    return value;    // return the value itself
}
```

**Why:** A local variable lives only while its function runs. After the function ends, its memory is reused, so the returned address is not safe. Return the value, or use `malloc`, or give the function a pointer to fill.

## Mistake 11: Forgetting break in a switch

```c
// Wrong
int day = 2;
switch (day) {
    case 1: printf("One\n");
    case 2: printf("Two\n");
    case 3: printf("Three\n");
}
// prints Two and Three

// Right
switch (day) {
    case 1: printf("One\n"); break;
    case 2: printf("Two\n"); break;
    case 3: printf("Three\n"); break;
}
// prints Two
```

**Why:** Without `break`, C keeps running the next cases too. This is called fall-through.

## Mistake 12: Using sizeof on an array inside a function

```c
// Wrong
void print_size(int numbers[]) {
    printf("%zu\n", sizeof numbers);   // size of a pointer, usually 8
}

// Right
void print_count(const int *numbers, size_t count) {
    for (size_t i = 0; i < count; i++) {
        printf("%d\n", numbers[i]);
    }
}
```

**Why:** When you give an array to a function, it becomes a pointer, and `sizeof` gives the size of the pointer, not of the array. Always give the function the number of items as a second value.

## Exercise: find and fix the bugs

This program has four mistakes from the list above. Find them before you open the answer.

```c
#include <stdio.h>

int main(void) {
    int numbers[3] = {10, 20, 30};
    int total;

    for (int i = 0; i <= 3; i++) {
        total += numbers[i];
    }

    double average = total / 3;

    char name[] = "Ali";
    if (name == "Ali") {
        printf("Hello Ali\n");
    }

    printf("Total: %d, average: %.2f\n", total, average);
    return 0;
}
```

<details>
<summary>Show answer</summary>

The mistakes are: `total` has no starting value, the loop goes to `i <= 3` and reads outside the array, `total / 3` is an integer division, and `name == "Ali"` compares addresses instead of letters.

```c
#include <stdio.h>
#include <string.h>

int main(void) {
    int numbers[3] = {10, 20, 30};
    int total = 0;

    for (int i = 0; i < 3; i++) {
        total += numbers[i];
    }

    double average = total / 3.0;

    char name[] = "Ali";
    if (strcmp(name, "Ali") == 0) {
        printf("Hello Ali\n");
    }

    printf("Total: %d, average: %.2f\n", total, average);
    return 0;
}
```

The output is:

```text
Hello Ali
Total: 60, average: 20.00
```

</details>

## Try it yourself

1. Put the fixed code in a file named `fixed.c` and compile it with `gcc -std=c17 -Wall -Wextra fixed.c -o fixed`.
2. Compile the wrong version too, and read the warnings that the compiler gives.
3. Write down three mistakes from this page that you have made before.

## Quick summary

- Use `==` to compare, and `=` only to give a value.
- Divide with at least one `double` to keep the decimals.
- Always give a variable a starting value.
- Stay inside the array, and keep text boxes big enough.
- Compare strings with `strcmp`, and use `fgets` and `snprintf`.
- Check `malloc` for `NULL`, call `free`, and never use memory after `free`.
- Do not return the address of a local variable.
- Write `break` in a `switch`, and give functions the size of an array.
