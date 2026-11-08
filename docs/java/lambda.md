---
title: Java Lambda Expressions
sidebar_position: 45
---

# Java Lambda Expressions

A lambda is a short way to write a small function.

```java
import java.util.*;
import java.util.function.*;

Function<Integer, Integer> square = n -> n * n;
System.out.println(square.apply(5));      // 25

BiFunction<Integer, Integer, Integer> add = (a, b) -> a + b;
System.out.println(add.apply(2, 3));      // 5

Predicate<Integer> isEven = n -> n % 2 == 0;
System.out.println(isEven.test(4));       // true

Runnable r = () -> System.out.println("Running");
r.run();

List<String> names = List.of("Ali", "Sara");
names.forEach(n -> System.out.println(n));
```

Lambdas work with **functional interfaces**, which have exactly one abstract method.
