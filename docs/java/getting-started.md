---
title: Java Getting Started
sidebar_position: 2
---

# Java Getting Started

## What you need

1. **JDK** (Java Development Kit). Download it from adoptium.net or oracle.com.
2. A code editor such as VS Code, IntelliJ IDEA or Eclipse.

## Check the installation

```
java -version
javac -version
```

## Run your first program

Save this as `Main.java`:

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello Java");
    }
}
```

Compile and run:

```
javac Main.java
java Main
```

- `javac` turns your code into bytecode (a `.class` file).
- `java` runs the bytecode on the Java Virtual Machine (JVM).
- The file name must match the public class name.
