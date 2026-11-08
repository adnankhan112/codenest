---
title: Java static Keyword
sidebar_position: 26
---

# Java static Keyword

A static member belongs to the class, not to each object.

```java
public class Counter {
    static int count = 0;

    Counter() {
        count++;
    }

    static void show() {
        System.out.println("Objects: " + count);
    }
}

new Counter();
new Counter();
Counter.show();    // Objects: 2
```

## Static block

```java
static {
    System.out.println("Runs once when the class loads");
}
```

A static method cannot use `this` or normal (non-static) members directly.
