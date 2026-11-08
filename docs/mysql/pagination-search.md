---
title: "MySQL Pagination and Searching"
sidebar_position: 11
---

# MySQL Pagination and Searching

## Pagination

Show 10 rows per page:

```sql
SELECT * FROM products ORDER BY id LIMIT 10 OFFSET 0;     -- page 1
SELECT * FROM products ORDER BY id LIMIT 10 OFFSET 10;    -- page 2
SELECT * FROM products ORDER BY id LIMIT 10 OFFSET 20;    -- page 3
```

The offset is `(page - 1) * 10`.

## FULLTEXT search

A FULLTEXT index lets you search words inside long text quickly.

```sql
CREATE TABLE articles (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(200),
  body TEXT,
  FULLTEXT (title, body)
);

SELECT * FROM articles
WHERE MATCH(title, body) AGAINST('database tutorial');
```

## REGEXP

```sql
SELECT * FROM students WHERE name REGEXP '^[AB]';      -- starts with A or B
```
