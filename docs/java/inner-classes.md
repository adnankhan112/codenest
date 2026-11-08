---
title: Java Inner Classes
sidebar_position: 31
---

# Java Inner Classes

A class can be placed inside another class.

```java
class Outer {
    private int x = 10;

    class Inner {
        void show() {
            System.out.println(x);      // can use Outer's data
        }
    }

    static class Nested {
        void hello() { System.out.println("Nested"); }
    }
}

Outer o = new Outer();
Outer.Inner in = o.new Inner();
in.show();

Outer.Nested n = new Outer.Nested();
n.hello();
```

Use inner classes when a class is useful only inside another class.
