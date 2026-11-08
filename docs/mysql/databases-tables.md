---
title: "MySQL Databases and Tables"
sidebar_position: 4
---

# MySQL Databases and Tables

```sql
CREATE DATABASE IF NOT EXISTS shop CHARACTER SET utf8mb4;
USE shop;

CREATE TABLE products (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO products (name, price, stock)
VALUES ('Pen', 20.00, 100), ('Notebook', 150.50, 40);

SELECT * FROM products;
SHOW TABLES;
DESCRIBE products;
SHOW CREATE TABLE products;
```

`utf8mb4` lets the database store all languages and emoji, including Urdu.
