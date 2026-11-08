---
title: Java Generics
sidebar_position: 47
---

# Java Generics

Generics let you write code that works with many types safely.

```java
class Box<T> {
    private T value;

    Box(T value) { this.value = value; }
    T get() { return value; }
}

Box<Integer> a = new Box<>(5);
Box<String> b = new Box<>("Hello");

static <T> void show(T item) {
    System.out.println(item);
}
```

## Limiting the type

```java
static <T extends Comparable<T>> T bigger(T a, T b) {
    return a.compareTo(b) > 0 ? a : b;
}
System.out.println(bigger(3, 7));     // 7
```

Generics catch type mistakes when you compile, not when the program runs.
