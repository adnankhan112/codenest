---
title: "MySQL Temporary Tables and Prepared Statements"
sidebar_position: 26
---

# MySQL Temporary Tables and Prepared Statements

## Temporary table

It exists only during your session.

```sql
CREATE TEMPORARY TABLE temp_top AS
SELECT * FROM students WHERE marks > 80;

SELECT * FROM temp_top;
```

## Prepared statement

```sql
PREPARE stmt FROM 'SELECT * FROM students WHERE city = ?';
SET @c = 'Lahore';
EXECUTE stmt USING @c;
DEALLOCATE PREPARE stmt;
```

Prepared statements are faster when repeated, and they protect against SQL injection.
