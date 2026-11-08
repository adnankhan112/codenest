---
title: "MySQL Backup and Restore"
sidebar_position: 24
---

# MySQL Backup and Restore

## Backup with mysqldump

```
mysqldump -u root -p school > school_backup.sql
mysqldump -u root -p --all-databases > all_backup.sql
mysqldump -u root -p school students > students_backup.sql
```

## Restore

```
mysql -u root -p school < school_backup.sql
```

If the database does not exist, create it first with `CREATE DATABASE school;`.

## Good habits

- Take backups every day.
- Keep a copy in another place (another computer or the cloud).
- Test your backup by restoring it sometimes.
