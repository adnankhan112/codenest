---
title: "MySQL Stored Procedures"
sidebar_position: 13
---

# MySQL Stored Procedures

A stored procedure is a saved set of SQL statements that you can run by name.

```sql
DELIMITER //

CREATE PROCEDURE get_top_students(IN min_marks INT)
BEGIN
  SELECT name, marks FROM students
  WHERE marks >= min_marks
  ORDER BY marks DESC;
END //

DELIMITER ;

CALL get_top_students(80);
```

`DELIMITER //` is needed so MySQL does not end the procedure at the first semicolon.

## OUT parameter

```sql
DELIMITER //
CREATE PROCEDURE count_students(OUT total INT)
BEGIN
  SELECT COUNT(*) INTO total FROM students;
END //
DELIMITER ;

CALL count_students(@n);
SELECT @n;
```

## Remove

```sql
DROP PROCEDURE IF EXISTS get_top_students;
```
