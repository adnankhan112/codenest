---
title: Java Scope
sidebar_position: 20
---

# Java Scope

Scope decides where a variable can be used.

```java
public class Main {
    static int shared = 10;            // class level

    public static void main(String[] args) {
        int local = 5;                 // method level

        if (local > 3) {
            int inside = 1;            // block level
            System.out.println(inside + local + shared);
        }
        // inside does not exist here
    }
}
```

A variable lives only inside the braces where it was created.
