---
title: "MySQL Users and Privileges"
sidebar_position: 23
---

# MySQL Users and Privileges

Do not use the `root` user in your applications. Create users with limited power.

```sql
CREATE USER 'app_user'@'localhost' IDENTIFIED BY 'StrongPass#123';

GRANT SELECT, INSERT, UPDATE ON shop.* TO 'app_user'@'localhost';
GRANT ALL PRIVILEGES ON school.* TO 'teacher'@'localhost';

SHOW GRANTS FOR 'app_user'@'localhost';

REVOKE INSERT ON shop.* FROM 'app_user'@'localhost';
FLUSH PRIVILEGES;

DROP USER 'app_user'@'localhost';
```

- `shop.*` means all tables in the `shop` database.
- Give each user only the permissions they need.
- Use long, strong passwords.
