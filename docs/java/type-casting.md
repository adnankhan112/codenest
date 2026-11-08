---
title: Java Type Casting
sidebar_position: 8
---

# Java Type Casting

## Widening (automatic)

A small type goes into a bigger type automatically.

```java
int a = 10;
double b = a;      // 10.0
```

## Narrowing (manual)

A big type goes into a smaller type with a cast. You may lose data.

```java
double price = 9.78;
int whole = (int) price;    // 9
```

## Strings and numbers

```java
int n = Integer.parseInt("42");
double d = Double.parseDouble("3.14");
String s = String.valueOf(100);
```
