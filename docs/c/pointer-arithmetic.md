---
title: C Pointers and Arrays
sidebar_position: 17.3
---

# C Pointers and Arrays

The name of an array is the address of its first item.

```c
int nums[4] = {10, 20, 30, 40};
int *p = nums;

printf("%d\n", *p);        // 10
printf("%d\n", *(p + 1));  // 20
printf("%d\n", p[2]);      // 30

p++;                       // move to the next int
printf("%d\n", *p);        // 20
```

## Looping with a pointer

```c
for (int *q = nums; q < nums + 4; q++) {
    printf("%d ", *q);
}
```

When you add 1 to a pointer, it moves by the size of one item, not by one byte.
