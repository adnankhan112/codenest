---
title: Java LinkedList
sidebar_position: 36
---

# Java LinkedList

A `LinkedList` stores items as a chain. It is fast for adding or removing at the start or end.

```java
import java.util.LinkedList;

LinkedList<String> list = new LinkedList<>();
list.add("B");
list.addFirst("A");
list.addLast("C");

System.out.println(list);             // [A, B, C]
list.removeFirst();
System.out.println(list.getFirst());  // B
```

| | ArrayList | LinkedList |
| --- | --- | --- |
| Read by position | Fast | Slow |
| Add or remove in the middle | Slow | Fast |
