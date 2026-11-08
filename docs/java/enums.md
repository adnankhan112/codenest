---
title: Java Enums
sidebar_position: 32
---

# Java Enums

An enum is a fixed list of constant values.

```java
enum Day { MONDAY, TUESDAY, WEDNESDAY }

Day d = Day.TUESDAY;

switch (d) {
    case MONDAY -> System.out.println("Start");
    case TUESDAY -> System.out.println("Second day");
    default -> System.out.println("Other");
}

for (Day x : Day.values()) {
    System.out.println(x);
}
```

## Enum with values

```java
enum Level {
    LOW(1), HIGH(10);

    private final int number;
    Level(int number) { this.number = number; }
    int getNumber() { return number; }
}
```
