---
title: "MySQL Performance Tips"
sidebar_position: 27
---

# MySQL Performance Tips

- Add **indexes** on columns used in `WHERE`, `JOIN` and `ORDER BY`.
- Use `EXPLAIN` to check slow queries.
- Select only the columns you need. Avoid `SELECT *`.
- Use `LIMIT` for big results.
- Use the right data types (do not use `VARCHAR(255)` for everything).
- Avoid functions on indexed columns in `WHERE`.
- Use `JOIN` instead of many small queries from your app.
- Use transactions for many inserts. Or insert many rows in one statement.
- Turn on the **slow query log** to find slow queries:

```sql
SET GLOBAL slow_query_log = 'ON';
SET GLOBAL long_query_time = 1;
```

- Use `OPTIMIZE TABLE` and `ANALYZE TABLE` sometimes on large tables.
