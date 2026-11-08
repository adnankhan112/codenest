---
title: Java While Loop
sidebar_position: 14
---

# Java While Loop

```java
int i = 1;
while (i <= 5) {
    System.out.println(i);
    i++;
}
```

## do while

The body runs at least once.

```java
int n = 0;
do {
    System.out.println(n);
    n++;
} while (n < 3);
```

If you forget `i++`, the loop never ends. This is called an infinite loop.
