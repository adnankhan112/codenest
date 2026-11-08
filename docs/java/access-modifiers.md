---
title: Java Access Modifiers
sidebar_position: 24
---

# Java Access Modifiers

| Modifier | Who can use it |
| --- | --- |
| `public` | Everyone |
| `protected` | Same package and child classes |
| default (no word) | Same package |
| `private` | Only inside the same class |

```java
public class Account {
    private double balance;       // hidden from outside
    public String owner;          // open to everyone
}
```

Make data `private` and give access through methods. This keeps data safe.
