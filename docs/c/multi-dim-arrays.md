---
title: C Multi-Dimensional Arrays
sidebar_position: 15.5
---

# C Multi-Dimensional Arrays

```c
#include <stdio.h>

int main() {
    int matrix[2][3] = {
        {1, 2, 3},
        {4, 5, 6}
    };

    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 3; j++) {
            printf("%d ", matrix[i][j]);
        }
        printf("\n");
    }
    return 0;
}
```

## Passing an array to a function

```c
void printAll(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
}
```

An array passed to a function is passed by address, so the function can change the original values.
