---
title: "MySQL String Functions"
sidebar_position: 7
---

# MySQL String Functions

```sql
SELECT CONCAT('Ali', ' ', 'Khan');                 -- Ali Khan
SELECT CONCAT_WS('-', '2026', '11', '05');         -- 2026-11-05
SELECT UPPER('hello'), LOWER('HELLO');
SELECT LENGTH('Hello'), CHAR_LENGTH('Hello');
SELECT LEFT('Programming', 4);                     -- Prog
SELECT RIGHT('Programming', 3);                    -- ing
SELECT SUBSTRING('Programming', 4, 3);             -- gra
SELECT LOCATE('gram', 'Programming');              -- 4
SELECT REPLACE('Hello World', 'World', 'MySQL');
SELECT REVERSE('abc');                             -- cba
SELECT TRIM('  hi  ');
SELECT LPAD('7', 3, '0');                          -- 007
SELECT REPEAT('ab', 3);                            -- ababab
```

## Use on table data

```sql
SELECT UPPER(name), LENGTH(name) FROM students;
```
