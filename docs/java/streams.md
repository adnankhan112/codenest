---
title: Java Streams
sidebar_position: 46
---

# Java Streams

Streams let you process collections in a clean, step by step way.

```java
import java.util.*;
import java.util.stream.*;

List<Integer> nums = List.of(1, 2, 3, 4, 5, 6);

List<Integer> result = nums.stream()
        .filter(n -> n % 2 == 0)      // keep even numbers
        .map(n -> n * n)              // square them
        .collect(Collectors.toList());
System.out.println(result);           // [4, 16, 36]

int sum = nums.stream().mapToInt(Integer::intValue).sum();
long count = nums.stream().filter(n -> n > 3).count();
Optional<Integer> max = nums.stream().max(Integer::compare);

String joined = Stream.of("a", "b", "c").collect(Collectors.joining(", "));
```

A stream does not change the original list.
