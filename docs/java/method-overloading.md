---
title: Java Method Overloading
sidebar_position: 19
---

# Java Method Overloading

Methods can share a name if their parameters are different.

```java
static int add(int a, int b) {
    return a + b;
}

static double add(double a, double b) {
    return a + b;
}

static int add(int a, int b, int c) {
    return a + b + c;
}

System.out.println(add(1, 2));        // 3
System.out.println(add(1.5, 2.5));    // 4.0
System.out.println(add(1, 2, 3));     // 6
```

Java chooses the right method by looking at the number and type of the arguments.
