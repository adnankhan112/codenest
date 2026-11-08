---
title: C Sorting and Searching
sidebar_position: 25.2
---

# C Sorting and Searching

## Bubble sort

```c
void bubbleSort(int a[], int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (a[j] > a[j + 1]) {
                int t = a[j];
                a[j] = a[j + 1];
                a[j + 1] = t;
            }
        }
    }
}
```

## Linear search

```c
int linearSearch(int a[], int n, int key) {
    for (int i = 0; i < n; i++) {
        if (a[i] == key) return i;
    }
    return -1;
}
```

## Binary search (array must be sorted)

```c
int binarySearch(int a[], int n, int key) {
    int low = 0, high = n - 1;
    while (low <= high) {
        int mid = (low + high) / 2;
        if (a[mid] == key) return mid;
        if (a[mid] < key) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}
```

## Built-in sort

```c
#include <stdlib.h>
int cmp(const void *x, const void *y) {
    return *(int *)x - *(int *)y;
}
qsort(a, n, sizeof(int), cmp);
```
