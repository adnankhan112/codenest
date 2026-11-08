---
title: Java If Else
sidebar_position: 12
---

# Java If Else

```java
int marks = 75;

if (marks >= 80) {
    System.out.println("Grade A");
} else if (marks >= 60) {
    System.out.println("Grade B");
} else {
    System.out.println("Try again");
}
```

## Short form (ternary)

```java
String result = (marks >= 50) ? "Pass" : "Fail";
```

The condition inside `if ( )` must be `true` or `false`.
