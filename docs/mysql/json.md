---
title: "MySQL JSON"
sidebar_position: 22
---

# MySQL JSON

MySQL can store and search JSON data.

```sql
CREATE TABLE people (
  id INT PRIMARY KEY AUTO_INCREMENT,
  info JSON
);

INSERT INTO people (info)
VALUES ('{"name": "Ali", "age": 20, "skills": ["SQL", "PHP"]}');

SELECT info->>'$.name' AS name FROM people;
SELECT JSON_EXTRACT(info, '$.skills[0]') FROM people;
SELECT * FROM people WHERE info->>'$.age' > 18;

UPDATE people
SET info = JSON_SET(info, '$.age', 21)
WHERE id = 1;
```

Use JSON for flexible data, and normal columns for data you search and join often.
