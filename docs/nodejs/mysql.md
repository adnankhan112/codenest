---
title: "Node.js with MySQL"
sidebar_position: 28
---

# Node.js with MySQL

```
npm install mysql2
```

```javascript
const mysql = require("mysql2/promise");

async function main() {
  const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "school",
    waitForConnections: true,
    connectionLimit: 10,
  });

  // SELECT
  const [rows] = await pool.execute("SELECT * FROM students WHERE marks > ?", [80]);
  console.log(rows);

  // INSERT
  const [result] = await pool.execute(
    "INSERT INTO students (name, city, marks) VALUES (?, ?, ?)",
    ["Zain", "Peshawar", 70]
  );
  console.log("New id:", result.insertId);

  // UPDATE and DELETE
  await pool.execute("UPDATE students SET marks = ? WHERE id = ?", [75, result.insertId]);
  await pool.execute("DELETE FROM students WHERE id = ?", [result.insertId]);

  await pool.end();
}
main();
```

Always use `?` placeholders. They protect you from SQL injection.
