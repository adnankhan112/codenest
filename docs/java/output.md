---
title: Java Output
sidebar_position: 4
---

# Java Output

```java
System.out.println("Hello");        // prints and goes to a new line
System.out.print("Hello ");         // prints without a new line
System.out.print("World\n");

int age = 20;
System.out.println("Age: " + age);

System.out.printf("Price: %.2f%n", 9.5);
```

## printf format codes

| Code | Meaning |
| --- | --- |
| `%d` | Whole number |
| `%f` | Decimal number |
| `%s` | Text |
| `%c` | One character |
| `%n` | New line |

Use `\n` for a new line and `\t` for a tab inside text.
