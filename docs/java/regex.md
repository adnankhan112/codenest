---
title: Java Regular Expressions
sidebar_position: 49
---

# Java Regular Expressions

A regular expression describes a text pattern.

```java
import java.util.regex.*;

Pattern p = Pattern.compile("\\d{4}");
Matcher m = p.matcher("Year 2026 and 1999");

while (m.find()) {
    System.out.println(m.group());     // 2026, then 1999
}

System.out.println("ali@mail.com".matches("[\\w.]+@[\\w.]+\\.\\w+"));
System.out.println("a1b2".replaceAll("\\d", "#"));    // a#b#
```

| Pattern | Meaning |
| --- | --- |
| `\\d` | A digit |
| `\\w` | A letter, digit or underscore |
| `\\s` | A space |
| `.` | Any character |
| `+` | One or more |
| `*` | Zero or more |

In Java strings, a backslash must be written twice.
