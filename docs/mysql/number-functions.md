---
title: "MySQL Number Functions"
sidebar_position: 8
---

# MySQL Number Functions

```sql
SELECT ROUND(4.567, 2);        -- 4.57
SELECT CEIL(4.1);              -- 5
SELECT FLOOR(4.9);             -- 4
SELECT TRUNCATE(4.567, 1);     -- 4.5
SELECT ABS(-10);               -- 10
SELECT MOD(10, 3);             -- 1
SELECT POWER(2, 5);            -- 32
SELECT SQRT(49);               -- 7
SELECT RAND();                 -- random number between 0 and 1
SELECT FLOOR(RAND() * 6) + 1;  -- random dice number
SELECT GREATEST(3, 9, 5);      -- 9
SELECT LEAST(3, 9, 5);         -- 3
```

## Random rows

```sql
SELECT * FROM products ORDER BY RAND() LIMIT 1;
```
