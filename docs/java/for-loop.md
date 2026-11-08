---
title: Java For Loop
sidebar_position: 15
---

# Java For Loop

```java
for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}
```

## for-each loop

```java
String[] fruits = {"Apple", "Banana", "Mango"};
for (String fruit : fruits) {
    System.out.println(fruit);
}
```

## Nested loops

```java
for (int row = 1; row <= 3; row++) {
    for (int col = 1; col <= row; col++) {
        System.out.print("* ");
    }
    System.out.println();
}
```
