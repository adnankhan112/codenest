---
title: "MySQL Storage Engines"
sidebar_position: 6
---

# MySQL Storage Engines

A storage engine decides how MySQL stores and reads the data.

| Engine | Good for |
| --- | --- |
| **InnoDB** (default) | Most apps. Supports transactions and foreign keys. |
| **MyISAM** | Old engine. Fast reading, no transactions. |
| **MEMORY** | Temporary data stored in RAM. |

```sql
CREATE TABLE logs (
  id INT PRIMARY KEY,
  message TEXT
) ENGINE = InnoDB;

SHOW ENGINES;
```

Use **InnoDB** unless you have a special reason.
