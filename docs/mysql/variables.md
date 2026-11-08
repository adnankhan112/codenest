---
title: "MySQL User Variables"
sidebar_position: 12
---

# MySQL User Variables

A variable stores a value for your session.

```sql
SET @tax = 0.17;
SELECT name, price, price * @tax AS tax_amount FROM products;

SELECT @max := MAX(price) FROM products;
SELECT @max;

SET @row = 0;
SELECT (@row := @row + 1) AS no, name FROM products;
```

Variables that start with `@` last only until you close the connection.
