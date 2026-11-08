---
title: "MySQL Replication and Security"
sidebar_position: 28
---

# MySQL Replication and Security

## Replication (idea)

Replication copies data from one MySQL server (the **source**) to other servers (**replicas**).

- Replicas can answer read queries, so the load is shared.
- A replica is also a live backup.

## Security checklist

- Use strong passwords and different users for different apps.
- Do not allow `root` to connect from the internet.
- Give users only the permissions they need.
- Use prepared statements in your code to stop SQL injection.
- Keep MySQL updated.
- Use **SSL** to encrypt connections.
- Take regular backups.
- Never keep passwords in plain text. Store hashes (for example bcrypt).
