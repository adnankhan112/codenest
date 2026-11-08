---
title: "MySQL Indexes and EXPLAIN"
sidebar_position: 19
---

# MySQL Indexes and EXPLAIN

## Create indexes

```sql
CREATE INDEX idx_name ON products (name);
ALTER TABLE products ADD UNIQUE (sku);
SHOW INDEX FROM products;
```

## EXPLAIN shows how MySQL runs your query

```sql
EXPLAIN SELECT * FROM products WHERE name = 'Pen';
```

Look at these columns:

| Column | Good sign |
| --- | --- |
| `type` | `ref`, `const`, `range` (bad: `ALL`, which reads the whole table) |
| `key` | The name of the index being used |
| `rows` | A small number |

## Tips

- Index columns used in `WHERE`, `JOIN` and `ORDER BY`.
- Do not use a function on an indexed column: `WHERE YEAR(date) = 2026` cannot use the index well.
- Check slow queries with `EXPLAIN`.
