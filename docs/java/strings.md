---
title: Java Strings
sidebar_position: 10
---

# Java Strings

```java
String text = "Hello World";

System.out.println(text.length());          // 11
System.out.println(text.toUpperCase());     // HELLO WORLD
System.out.println(text.toLowerCase());
System.out.println(text.charAt(0));         // H
System.out.println(text.indexOf("World"));  // 6
System.out.println(text.substring(0, 5));   // Hello
System.out.println(text.replace("World", "Java"));
System.out.println(text.contains("lo"));    // true
System.out.println(text.trim());

String a = "hi";
String b = "hi";
System.out.println(a.equals(b));            // true
System.out.println("a".compareTo("b"));     // negative number
```

## Joining

```java
String full = "Ali" + " " + "Khan";
String joined = String.join("-", "a", "b", "c");   // a-b-c
```

## StringBuilder

Use `StringBuilder` when you change text many times. It is faster.

```java
StringBuilder sb = new StringBuilder();
sb.append("Hello").append(" ").append("World");
System.out.println(sb.toString());
```

Strings in Java are **immutable**: methods return a new String and do not change the old one.
