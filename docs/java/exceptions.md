---
title: Java Exceptions
sidebar_position: 41
---

# Java Exceptions

An exception is an error that happens while the program runs.

```java
try {
    int[] a = new int[3];
    System.out.println(a[5]);
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("Bad index");
} catch (Exception e) {
    System.out.println("Error: " + e.getMessage());
} finally {
    System.out.println("Always runs");
}
```

## throw and throws

```java
static void setAge(int age) {
    if (age < 0) {
        throw new IllegalArgumentException("Age cannot be negative");
    }
}

static void readFile() throws java.io.IOException {
    // code that may fail
}
```

## Custom exception

```java
class MyException extends Exception {
    MyException(String message) { super(message); }
}
```

**Checked** exceptions (like `IOException`) must be handled. **Unchecked** ones (like `NullPointerException`) need not be.
