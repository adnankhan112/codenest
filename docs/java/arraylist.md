---
title: Java ArrayList
sidebar_position: 35
---

# Java ArrayList

An `ArrayList` is a list that can grow and shrink.

```java
import java.util.ArrayList;

ArrayList<String> fruits = new ArrayList<>();
fruits.add("Apple");
fruits.add("Banana");
fruits.add(1, "Mango");          // insert at position 1

System.out.println(fruits.get(0));     // Apple
System.out.println(fruits.size());     // 3
fruits.set(0, "Orange");
fruits.remove("Banana");
System.out.println(fruits.contains("Mango"));   // true

for (String f : fruits) {
    System.out.println(f);
}
```

The type in the angle brackets tells which kind of items the list holds.
