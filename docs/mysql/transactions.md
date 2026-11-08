---
title: "MySQL Transactions and Locking"
sidebar_position: 21
---

# MySQL Transactions and Locking

```sql
START TRANSACTION;
UPDATE accounts SET balance = balance - 500 WHERE id = 1;
UPDATE accounts SET balance = balance + 500 WHERE id = 2;
COMMIT;
```

Use `ROLLBACK;` to cancel instead of saving.

## Savepoints

```sql
START TRANSACTION;
INSERT INTO t VALUES (1);
SAVEPOINT step1;
INSERT INTO t VALUES (2);
ROLLBACK TO step1;       -- only the second insert is cancelled
COMMIT;
```

## Locking rows

```sql
START TRANSACTION;
SELECT * FROM accounts WHERE id = 1 FOR UPDATE;   -- other users must wait
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
COMMIT;
```

Autocommit is on by default, so each single statement is saved at once. Transactions need **InnoDB**.
