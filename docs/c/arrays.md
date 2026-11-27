---
title: C Arrays
sidebar_position: 15
---

# C Arrays

Imagine you must store the marks of 100 students. Creating 100 separate variables would be painful. An **array** stores many values of the **same type** under one name.

## What you will learn

- How to create an array and read its items
- Why counting starts from 0
- How to loop through an array
- What happens if you go outside the array

## Create an array

```c
#include <stdio.h>

int main() {
    int marks[5] = {70, 85, 90, 60, 75};

    printf("First: %d\n", marks[0]);
    printf("Third: %d\n", marks[2]);
    return 0;
}
```

Output:

```
First: 70
Third: 90
```

Think of an array as a row of boxes. Each box has a number called an **index**, and the **first index is 0**.

```
index:   0    1    2    3    4
value:  70   85   90   60   75
```

## Change an item

```c
#include <stdio.h>

int main() {
    int marks[3] = {10, 20, 30};

    marks[1] = 99;
    printf("%d %d %d\n", marks[0], marks[1], marks[2]);
    return 0;
}
```

Output:

```
10 99 30
```

## Loop through an array

```c
#include <stdio.h>

int main() {
    int marks[5] = {70, 85, 90, 60, 75};
    int sum = 0;

    for (int i = 0; i < 5; i++) {
        sum += marks[i];
    }
    printf("Sum = %d\n", sum);
    printf("Average = %.1f\n", sum / 5.0);
    return 0;
}
```

Output:

```
Sum = 380
Average = 76.0
```

## Find the size of an array

Do not hard-code the length. Let C calculate it.

```c
#include <stdio.h>

int main() {
    int marks[] = {70, 85, 90, 60, 75, 88};
    int size = sizeof(marks) / sizeof(marks[0]);

    printf("Items: %d\n", size);
    return 0;
}
```

Output:

```
Items: 6
```

The total bytes divided by the bytes of one item gives the number of items.

## Example: find the largest item

```c
#include <stdio.h>

int main() {
    int numbers[] = {14, 82, 31, 67, 25};
    int size = sizeof(numbers) / sizeof(numbers[0]);
    int largest = numbers[0];

    for (int i = 1; i < size; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    printf("Largest: %d\n", largest);
    return 0;
}
```

Output:

```
Largest: 82
```

## Example: print an array backwards

```c
#include <stdio.h>

int main() {
    int a[] = {1, 2, 3, 4, 5};

    for (int i = 4; i >= 0; i--) {
        printf("%d ", a[i]);
    }
    printf("\n");
    return 0;
}
```

Output:

```
5 4 3 2 1 
```

## Reading values from the user

```c
#include <stdio.h>

int main() {
    int n[3];

    printf("Enter 3 numbers: ");
    for (int i = 0; i < 3; i++) {
        scanf("%d", &n[i]);
    }
    printf("You entered: %d %d %d\n", n[0], n[1], n[2]);
    return 0;
}
```

Sample run:

```
Enter 3 numbers: 4 8 15
You entered: 4 8 15
```

## Beware: going outside the array

An array of 5 items has indexes 0 to 4. C does **not** check the index for you. Writing `marks[5]` or `marks[10]` touches memory that does not belong to your array. The program may give wrong results or crash.

## Common mistakes

- Thinking the first item is `array[1]`. It is `array[0]`.
- Using `<=` in the loop condition, which goes one step too far.
- Using a variable-size array without understanding the risk.
- Forgetting that an array can hold only one type.

## Key points

- An array stores many values of one type.
- The index starts at 0, and the last index is `size - 1`.
- Use a `for` loop to visit all items.
- Never use an index outside the array.

## Practice questions

1. Store the numbers 5, 12, 8, 20 in an array and print their sum.
2. What is the index of the last item in an array of 8 items?
3. Print only the items greater than 10 from the array `{4, 15, 9, 22, 10, 31}`.

<details>
<summary>Show answers</summary>

**1.**

```c
#include <stdio.h>

int main() {
    int a[] = {5, 12, 8, 20};
    int sum = 0;
    for (int i = 0; i < 4; i++) {
        sum += a[i];
    }
    printf("Sum = %d\n", sum);
    return 0;
}
```

**2.** The index is 7, because counting starts from 0.

**3.**

```c
#include <stdio.h>

int main() {
    int a[] = {4, 15, 9, 22, 10, 31};
    for (int i = 0; i < 6; i++) {
        if (a[i] > 10) {
            printf("%d ", a[i]);
        }
    }
    printf("\n");
    return 0;
}
```

This prints `15 22 31`.

</details>
