---
title: Java Operators
sidebar_position: 9
---

# Java Operators

## Arithmetic

```java
int a = 10, b = 3;
System.out.println(a + b);   // 13
System.out.println(a - b);   // 7
System.out.println(a * b);   // 30
System.out.println(a / b);   // 3  (whole number division)
System.out.println(a % b);   // 1  (remainder)
a++;                         // add 1
a += 5;                      // same as a = a + 5
```

## Comparison

`==  !=  >  <  >=  <=`

## Logical

```java
int x = 5;
System.out.println(x > 3 && x < 10);   // true (and)
System.out.println(x > 8 || x == 5);   // true (or)
System.out.println(!(x > 3));          // false (not)
```

To compare Strings, use `.equals()`, not `==`.
