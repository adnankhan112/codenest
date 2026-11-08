---
title: "Connecting to MySQL"
sidebar_position: 3
---

# Connecting to MySQL

## Command line

```
mysql -u root -p
```

Type your password when asked. You will see the `mysql>` prompt.

## First commands

```sql
SHOW DATABASES;
CREATE DATABASE school;
USE school;
SHOW TABLES;
SELECT VERSION();
SELECT DATABASE();         -- the database you are using
EXIT;
```

## Run a SQL file

```
mysql -u root -p school < myfile.sql
```

Every command must end with a semicolon.
