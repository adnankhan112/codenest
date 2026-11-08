---
title: "MySQL Relationships and Foreign Keys"
sidebar_position: 20
---

# MySQL Relationships and Foreign Keys

```sql
CREATE TABLE customers (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100)
);

CREATE TABLE orders (
  id INT PRIMARY KEY AUTO_INCREMENT,
  customer_id INT NOT NULL,
  total DECIMAL(10,2),
  FOREIGN KEY (customer_id) REFERENCES customers(id)
    ON DELETE CASCADE
);
```

## Types of relationships

| Type | Example |
| --- | --- |
| One to one | A user and a profile |
| One to many | One customer, many orders |
| Many to many | Students and courses |

## Many to many needs a middle table

```sql
CREATE TABLE enrollments (
  student_id INT,
  course_id INT,
  PRIMARY KEY (student_id, course_id),
  FOREIGN KEY (student_id) REFERENCES students(id),
  FOREIGN KEY (course_id) REFERENCES courses(id)
);
```
