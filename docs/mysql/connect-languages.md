---
title: "Using MySQL from Programming Languages"
sidebar_position: 29
---

# Using MySQL from Programming Languages

## Python

```python
import mysql.connector

con = mysql.connector.connect(host="localhost", user="app_user",
                              password="StrongPass#123", database="school")
cur = con.cursor()
cur.execute("SELECT name, marks FROM students WHERE marks > %s", (80,))
for row in cur.fetchall():
    print(row)
con.close()
```

## PHP

```php
$pdo = new PDO("mysql:host=localhost;dbname=school;charset=utf8mb4", "app_user", "StrongPass#123");
$stmt = $pdo->prepare("SELECT name FROM students WHERE marks > ?");
$stmt->execute([80]);
foreach ($stmt as $row) {
    echo $row["name"] . "\n";
}
```

## Node.js

```javascript
const mysql = require("mysql2/promise");

async function main() {
  const con = await mysql.createConnection({
    host: "localhost", user: "app_user",
    password: "StrongPass#123", database: "school"
  });
  const [rows] = await con.execute("SELECT name FROM students WHERE marks > ?", [80]);
  console.log(rows);
  await con.end();
}
main();
```

In every language, use **parameters** (`?` or `%s`) and never join user input into the SQL text.
