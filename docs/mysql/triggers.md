---
title: "MySQL Triggers"
sidebar_position: 16
---

# MySQL Triggers

A trigger runs automatically when something happens to a table.

```sql
CREATE TABLE price_log (
  id INT PRIMARY KEY AUTO_INCREMENT,
  product_id INT,
  old_price DECIMAL(10,2),
  new_price DECIMAL(10,2),
  changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DELIMITER //
CREATE TRIGGER log_price_change
AFTER UPDATE ON products
FOR EACH ROW
BEGIN
  IF OLD.price <> NEW.price THEN
    INSERT INTO price_log (product_id, old_price, new_price)
    VALUES (OLD.id, OLD.price, NEW.price);
  END IF;
END //
DELIMITER ;

UPDATE products SET price = 25 WHERE id = 1;
SELECT * FROM price_log;
```

- Timing: `BEFORE` or `AFTER`.
- Event: `INSERT`, `UPDATE` or `DELETE`.
- `OLD` is the row before the change. `NEW` is the row after.

```sql
SHOW TRIGGERS;
DROP TRIGGER IF EXISTS log_price_change;
```
