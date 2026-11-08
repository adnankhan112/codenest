---
title: Java Wrapper Classes
sidebar_position: 34
---

# Java Wrapper Classes

Each primitive type has a wrapper class that is an object.

| Primitive | Wrapper |
| --- | --- |
| `int` | `Integer` |
| `double` | `Double` |
| `char` | `Character` |
| `boolean` | `Boolean` |
| `long` | `Long` |

```java
Integer a = 5;           // autoboxing
int b = a;               // unboxing

System.out.println(Integer.MAX_VALUE);
System.out.println(Integer.parseInt("12"));
System.out.println(Character.isDigit('7'));   // true
System.out.println(Double.compare(1.5, 2.5)); // negative

ArrayList<Integer> nums = new ArrayList<>();   // needs wrapper types
```
