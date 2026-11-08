---
title: Java Iterator
sidebar_position: 39
---

# Java Iterator

An iterator walks through a collection and can safely remove items.

```java
import java.util.ArrayList;
import java.util.Iterator;

ArrayList<Integer> nums = new ArrayList<>();
nums.add(1); nums.add(2); nums.add(3); nums.add(4);

Iterator<Integer> it = nums.iterator();
while (it.hasNext()) {
    int n = it.next();
    if (n % 2 == 0) {
        it.remove();           // safe removal
    }
}
System.out.println(nums);      // [1, 3]
```

Removing items inside a normal for-each loop causes a `ConcurrentModificationException`.
