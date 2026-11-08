---
title: Java Variables
sidebar_position: 6
---

# Java Variables

A variable stores a value. In Java you must tell the **type** of the variable.

```java
int age = 20;
double price = 9.99;
char grade = 'A';
boolean passed = true;
String name = "Ali";

age = 21;                 // change the value
final double PI = 3.14;   // final: cannot be changed
```

## Naming rules

- Use letters, digits, `_` and `$`.
- Do not start with a digit.
- Do not use Java keywords such as `class` or `int`.
- Use camelCase, for example `firstName`.

## Many variables

```java
int a = 1, b = 2, c = 3;
int x, y;
x = y = 10;
```
