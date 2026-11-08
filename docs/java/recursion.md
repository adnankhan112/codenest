---
title: Java Recursion
sidebar_position: 21
---

# Java Recursion

A recursive method calls itself. It needs a **base case** that stops it.

```java
static int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

static int fib(int n) {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
}

System.out.println(factorial(5));   // 120
System.out.println(fib(7));         // 13
```

Very deep recursion causes a `StackOverflowError`.
