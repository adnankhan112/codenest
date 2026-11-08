---
title: Java Sorting and Collections
sidebar_position: 40
---

# Java Sorting and Collections

```java
import java.util.*;

ArrayList<Integer> nums = new ArrayList<>(List.of(5, 2, 9, 1));

Collections.sort(nums);                       // [1, 2, 5, 9]
Collections.reverse(nums);                    // [9, 5, 2, 1]
System.out.println(Collections.max(nums));    // 9
```

## Sorting your own objects

```java
class Student {
    String name; int marks;
    Student(String n, int m) { name = n; marks = m; }
}

ArrayList<Student> list = new ArrayList<>();
list.add(new Student("Ali", 80));
list.add(new Student("Sara", 92));

list.sort((a, b) -> b.marks - a.marks);       // highest marks first
```

A **Comparator** tells Java how to compare two objects.
