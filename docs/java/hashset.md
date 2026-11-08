---
title: Java HashSet
sidebar_position: 38
---

# Java HashSet

A `HashSet` stores unique items, with no duplicates.

```java
import java.util.HashSet;

HashSet<Integer> set = new HashSet<>();
set.add(3);
set.add(1);
set.add(3);                    // ignored

System.out.println(set.size());       // 2
System.out.println(set.contains(1));  // true
set.remove(1);
```

Other sets:

- `LinkedHashSet` keeps the order you added items.
- `TreeSet` keeps items sorted.
