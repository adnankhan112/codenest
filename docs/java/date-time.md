---
title: Java Date and Time
sidebar_position: 44
---

# Java Date and Time

```java
import java.time.*;
import java.time.format.DateTimeFormatter;

LocalDate today = LocalDate.now();
LocalTime time = LocalTime.now();
LocalDateTime now = LocalDateTime.now();

System.out.println(today);

LocalDate birth = LocalDate.of(2000, 5, 20);
System.out.println(birth.plusDays(10));
System.out.println(Period.between(birth, today).getYears());

DateTimeFormatter f = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm");
System.out.println(now.format(f));
```

Use the `java.time` classes. They are simpler and safer than the old `Date` class.
