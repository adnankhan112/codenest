---
title: Java Methods
sidebar_position: 18
---

# Java Methods

A method is a block of code you can run many times.

```java
public class Main {
    static int add(int a, int b) {
        return a + b;
    }

    static void greet(String name) {
        System.out.println("Hello, " + name);
    }

    public static void main(String[] args) {
        greet("Ali");
        int sum = add(2, 3);
        System.out.println(sum);   // 5
    }
}
```

- `static` lets you call the method without making an object.
- `void` means the method returns nothing.
- `return` sends a value back.
