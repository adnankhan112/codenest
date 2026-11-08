---
title: Java HashMap
sidebar_position: 37
---

# Java HashMap

A `HashMap` stores key and value pairs.

```java
import java.util.HashMap;
import java.util.Map;

HashMap<String, Integer> ages = new HashMap<>();
ages.put("Ali", 20);
ages.put("Sara", 22);

System.out.println(ages.get("Ali"));                 // 20
System.out.println(ages.getOrDefault("Zed", 0));     // 0
System.out.println(ages.containsKey("Sara"));        // true
ages.remove("Ali");

for (Map.Entry<String, Integer> e : ages.entrySet()) {
    System.out.println(e.getKey() + " = " + e.getValue());
}
```

Keys are unique. Putting the same key again replaces the old value.
