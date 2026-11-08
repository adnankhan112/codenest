---
title: "MySQL Control Flow Functions"
sidebar_position: 10
---

# MySQL Control Flow Functions

```sql
-- IF(condition, if_true, if_false)
SELECT name, IF(marks >= 50, 'Pass', 'Fail') AS result FROM students;

-- IFNULL(value, replacement)
SELECT name, IFNULL(marks, 0) FROM students;

-- NULLIF(a, b) gives NULL when a equals b
SELECT NULLIF(10, 10);

-- CASE
SELECT name,
  CASE
    WHEN marks >= 90 THEN 'Excellent'
    WHEN marks >= 60 THEN 'Good'
    ELSE 'Needs work'
  END AS remark
FROM students;
```
