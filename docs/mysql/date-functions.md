---
title: "MySQL Date Functions"
sidebar_position: 9
---

# MySQL Date Functions

```sql
SELECT NOW();                                   -- date and time
SELECT CURDATE(), CURTIME();
SELECT YEAR(NOW()), MONTH(NOW()), DAY(NOW());
SELECT DAYNAME('2026-11-05');                   -- Thursday
SELECT DATE_ADD('2026-11-05', INTERVAL 10 DAY);
SELECT DATE_SUB('2026-11-05', INTERVAL 1 MONTH);
SELECT DATEDIFF('2026-12-25', '2026-11-05');    -- 50
SELECT TIMESTAMPDIFF(YEAR, '2000-05-20', CURDATE()) AS age;
SELECT DATE_FORMAT(NOW(), '%d-%m-%Y %H:%i');
SELECT STR_TO_DATE('05-11-2026', '%d-%m-%Y');
```

| Code | Meaning |
| --- | --- |
| `%Y` | Year (2026) |
| `%m` | Month number |
| `%d` | Day |
| `%H` | Hour (24 hour) |
| `%i` | Minutes |
| `%s` | Seconds |
| `%W` | Weekday name |
