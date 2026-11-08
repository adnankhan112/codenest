---
title: "MySQL Data Types"
sidebar_position: 5
---

# MySQL Data Types

## Numbers

| Type | Range or use |
| --- | --- |
| `TINYINT` | -128 to 127 (also used for true or false) |
| `SMALLINT` | About -32 thousand to 32 thousand |
| `INT` | About -2 billion to 2 billion |
| `BIGINT` | Very large whole numbers |
| `DECIMAL(10,2)` | Exact decimals (money) |
| `FLOAT`, `DOUBLE` | Approximate decimals |

## Text

| Type | Use |
| --- | --- |
| `CHAR(n)` | Fixed length text |
| `VARCHAR(n)` | Text up to n characters |
| `TEXT` | Long text |
| `ENUM('a','b')` | One value from a list |

## Date and time

`DATE`, `TIME`, `DATETIME`, `TIMESTAMP`, `YEAR`

## Other

`BOOLEAN` (same as `TINYINT(1)`), `JSON`, `BLOB` (files and images)

```sql
CREATE TABLE users (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  gender ENUM('male','female') NOT NULL,
  active BOOLEAN DEFAULT TRUE
);
```

`UNSIGNED` means only zero and positive numbers.
