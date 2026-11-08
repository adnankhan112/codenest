---
title: "MySQL Events"
sidebar_position: 17
---

# MySQL Events

An event runs SQL on a schedule, like a timer.

```sql
SET GLOBAL event_scheduler = ON;

CREATE EVENT delete_old_logs
ON SCHEDULE EVERY 1 DAY
DO
  DELETE FROM logs WHERE created_at < NOW() - INTERVAL 30 DAY;

SHOW EVENTS;
DROP EVENT delete_old_logs;
```

Use events for cleaning old data and making daily reports.
