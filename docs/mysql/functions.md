---
title: "MySQL Stored Functions"
sidebar_position: 15
---

# MySQL Stored Functions

A stored function returns one value, and you can use it inside queries.

```sql
DELIMITER //
CREATE FUNCTION grade(marks INT) RETURNS VARCHAR(10)
DETERMINISTIC
BEGIN
  IF marks >= 90 THEN RETURN 'A';
  ELSEIF marks >= 75 THEN RETURN 'B';
  ELSEIF marks >= 60 THEN RETURN 'C';
  ELSE RETURN 'Fail';
  END IF;
END //
DELIMITER ;

SELECT name, marks, grade(marks) AS grade FROM students;
```

| | Procedure | Function |
| --- | --- | --- |
| Called with | `CALL` | Inside a query |
| Returns | Zero or many values | Exactly one value |
