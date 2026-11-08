---
title: "MySQL Programming: IF, LOOP and Cursors"
sidebar_position: 14
---

# MySQL Programming: IF, LOOP and Cursors

Inside procedures you can use programming features.

```sql
DELIMITER //
CREATE PROCEDURE demo(IN n INT)
BEGIN
  DECLARE i INT DEFAULT 1;
  DECLARE total INT DEFAULT 0;

  WHILE i <= n DO
    SET total = total + i;
    SET i = i + 1;
  END WHILE;

  IF total > 10 THEN
    SELECT 'Big', total;
  ELSE
    SELECT 'Small', total;
  END IF;
END //
DELIMITER ;

CALL demo(5);
```

## Handling errors

```sql
DECLARE EXIT HANDLER FOR SQLEXCEPTION
BEGIN
  ROLLBACK;
  SELECT 'Something went wrong';
END;
```

## Cursor (advanced)

A cursor reads rows one by one.

```sql
DECLARE done INT DEFAULT 0;
DECLARE s_name VARCHAR(50);
DECLARE cur CURSOR FOR SELECT name FROM students;
DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;

OPEN cur;
read_loop: LOOP
  FETCH cur INTO s_name;
  IF done = 1 THEN LEAVE read_loop; END IF;
  -- use s_name here
END LOOP;
CLOSE cur;
```
