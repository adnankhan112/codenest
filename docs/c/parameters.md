---
title: C Function Parameters
sidebar_position: 18.5
---

# C Function Parameters

## Pass by value

The function gets a copy, so the original does not change.

```c
void change(int x) {
    x = 99;
}

int n = 5;
change(n);
printf("%d\n", n);   // 5
```

## Pass by pointer

The function gets the address, so it can change the original.

```c
void change(int *x) {
    *x = 99;
}

int n = 5;
change(&n);
printf("%d\n", n);   // 99
```

## Returning more than one value

Use pointer parameters:

```c
void minMax(int a[], int n, int *min, int *max) {
    *min = *max = a[0];
    for (int i = 1; i < n; i++) {
        if (a[i] < *min) *min = a[i];
        if (a[i] > *max) *max = a[i];
    }
}
```
