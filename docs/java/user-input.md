---
title: Java User Input
sidebar_position: 42
---

# Java User Input

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter your name: ");
        String name = sc.nextLine();

        System.out.print("Enter your age: ");
        int age = sc.nextInt();

        System.out.println(name + " is " + age);
        sc.close();
    }
}
```

| Method | Reads |
| --- | --- |
| `nextLine()` | A full line |
| `next()` | One word |
| `nextInt()` | A whole number |
| `nextDouble()` | A decimal number |
| `nextBoolean()` | true or false |

After `nextInt()`, call `sc.nextLine()` once to clear the leftover new line.
