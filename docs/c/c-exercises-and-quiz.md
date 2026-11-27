---
title: "C Exercises and Quiz"
sidebar_position: 91
---

# C Exercises and Quiz

Reading is not enough to learn programming. You must write code yourself.

- Type the code with your own hands. Do not only copy and paste.
- Try the exercise first. Open the answer only after you have tried.
- If the compiler shows an error, read the first error first. It often causes the others.
- Compile with `gcc -std=c17 -Wall -Wextra file.c -o program` and read every warning.

Each chapter of the C tutorial ends with a small exercise like the ones below. At the end of this page there is a quiz.

## Exercises

### Chapter 1: Variables and printf

**Task:** Make an `int` called `lessons` with the value 1 and a `double` called `price` with the value 49.5. Print: `Lessons: 1, price: 49.50`.

<details>
<summary>Show answer</summary>

```c
#include <stdio.h>

int main(void) {
    int lessons = 1;
    double price = 49.5;

    printf("Lessons: %d, price: %.2f\n", lessons, price);
    return 0;
}
```

</details>

### Chapter 2: If and else

**Task:** Write a program that checks if a number is positive, negative, or zero.

<details>
<summary>Show answer</summary>

```c
#include <stdio.h>

int main(void) {
    int number = -4;

    if (number > 0) {
        printf("Positive\n");
    } else if (number < 0) {
        printf("Negative\n");
    } else {
        printf("Zero\n");
    }
    return 0;
}
```

</details>

### Chapter 3: Loops

**Task:** Print the numbers from 1 to 5, and then print their sum.

<details>
<summary>Show answer</summary>

```c
#include <stdio.h>

int main(void) {
    int sum = 0;

    for (int i = 1; i <= 5; i++) {
        printf("%d\n", i);
        sum += i;
    }
    printf("Sum: %d\n", sum);
    return 0;
}
```

The sum is 15.

</details>

### Chapter 4: Arrays

**Task:** Make an array of five numbers and print the biggest one.

<details>
<summary>Show answer</summary>

```c
#include <stdio.h>

int main(void) {
    int numbers[5] = {12, 7, 30, 4, 18};
    int biggest = numbers[0];

    for (int i = 1; i < 5; i++) {
        if (numbers[i] > biggest) {
            biggest = numbers[i];
        }
    }
    printf("Biggest: %d\n", biggest);
    return 0;
}
```

</details>

### Chapter 5: Functions

**Task:** Write a function `square` that returns the square of an `int`, and call it from `main`.

<details>
<summary>Show answer</summary>

```c
#include <stdio.h>

int square(int n) {
    return n * n;
}

int main(void) {
    printf("%d\n", square(6));
    return 0;
}
```

The output is 36.

</details>

### Chapter 6: Pointers

**Task:** Write a function `add_one` that adds 1 to an `int` using a pointer.

<details>
<summary>Show answer</summary>

```c
#include <stdio.h>

void add_one(int *value) {
    *value = *value + 1;
}

int main(void) {
    int score = 9;
    add_one(&score);
    printf("%d\n", score);
    return 0;
}
```

The output is 10. The `&` gives the address of `score`, and the `*` reaches the value at that address.

</details>

### Chapter 7: Strings

**Task:** Count how many letters `a` are in the text `"banana"`.

<details>
<summary>Show answer</summary>

```c
#include <stdio.h>

int main(void) {
    const char *text = "banana";
    int count = 0;

    for (int i = 0; text[i] != '\0'; i++) {
        if (text[i] == 'a') {
            count++;
        }
    }
    printf("%d\n", count);
    return 0;
}
```

The output is 3. A string in C ends with the special character `'\0'`.

</details>

## Quiz

Choose your answer first, then click "Show answer".

**1. What does `return 0;` at the end of `main` usually mean?**

- A) The program failed
- B) The program finished with success
- C) The program must run again

<details>
<summary>Show answer</summary>

**B)** Zero means success. A different number means that something went wrong.

</details>

**2. What is the result of `7 / 2` when both numbers are `int`?**

- A) `3.5`
- B) `4`
- C) `3`

<details>
<summary>Show answer</summary>

**C) `3`.** Dividing two integers gives an integer. The decimal part is cut off. For `3.5`, write `7 / 2.0`.

</details>

**3. Which function is the safe way to read a line of text?**

- A) `gets`
- B) `fgets`
- C) `read_all`

<details>
<summary>Show answer</summary>

**B) `fgets`.** It takes the size of your array, so it cannot write too much. `gets` was removed from the language because it is not safe.

</details>

**4. Which number is the first place of an array?**

- A) 0
- B) 1
- C) -1

<details>
<summary>Show answer</summary>

**A) 0.** An array of 5 items has the places 0, 1, 2, 3, and 4.

</details>

**5. What does a string in C end with?**

- A) A dot
- B) A space
- C) The character `'\0'`

<details>
<summary>Show answer</summary>

**C)** The null character `'\0'` tells the functions where the text ends.

</details>

**6. How do you compare two strings in C?**

- A) `a == b`
- B) `strcmp(a, b) == 0`
- C) `a.equals(b)`

<details>
<summary>Show answer</summary>

**B) `strcmp(a, b) == 0`.** The `==` sign compares the addresses of the strings, not their letters.

</details>

**7. What must you do with memory that you got from `malloc`?**

- A) Nothing, C cleans it
- B) Give it back with `free`
- C) Close it with `fclose`

<details>
<summary>Show answer</summary>

**B)** C has no automatic clean-up for `malloc`. If you forget `free`, the program has a memory leak.

</details>

**8. What is the difference between `=` and `==`?**

- A) None
- B) `=` gives a value, and `==` compares two values
- C) `==` gives a value, and `=` compares two values

<details>
<summary>Show answer</summary>

**B)** Writing `if (a = 5)` by mistake gives 5 to `a` and is always true. Turn on `-Wall` and the compiler warns you.

</details>

## Quick summary

- Type the code yourself and try before you open the answer.
- Compile with warnings and read them.
- If you got 6 or more answers right, you are ready for the next chapter.
