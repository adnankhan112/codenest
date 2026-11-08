---
title: "MySQL Views"
sidebar_position: 18
---

# MySQL Views

```sql
CREATE VIEW low_stock AS
SELECT id, name, stock FROM products WHERE stock < 20;

SELECT * FROM low_stock;

ALTER VIEW low_stock AS
SELECT id, name, stock FROM products WHERE stock < 10;

DROP VIEW IF EXISTS low_stock;
```

A view saves a query, not the data. It always shows the newest data.
