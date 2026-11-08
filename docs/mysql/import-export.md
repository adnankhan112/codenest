---
title: "MySQL Import and Export"
sidebar_position: 25
---

# MySQL Import and Export

## Export to a CSV file

```sql
SELECT * FROM students
INTO OUTFILE '/var/lib/mysql-files/students.csv'
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n';
```

## Import from a CSV file

```sql
LOAD DATA INFILE '/var/lib/mysql-files/students.csv'
INTO TABLE students
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;
```

`IGNORE 1 ROWS` skips the header line.

## Easy way

MySQL Workbench and phpMyAdmin both have **Import** and **Export** buttons. This is easier for beginners.

MySQL only reads and writes files in the folder shown by `SHOW VARIABLES LIKE 'secure_file_priv';`.
