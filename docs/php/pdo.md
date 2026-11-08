---
title: "PHP and MySQL with PDO"
sidebar_position: 42
---

# PHP and MySQL with PDO

PDO is the safe, modern way to talk to databases.

```php
<?php
$dsn = "mysql:host=localhost;dbname=school;charset=utf8mb4";

try {
    $pdo = new PDO($dsn, "root", "", [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}

// SELECT with a prepared statement
$stmt = $pdo->prepare("SELECT * FROM students WHERE marks > ?");
$stmt->execute([80]);
foreach ($stmt as $row) {
    echo $row["name"] . " " . $row["marks"] . "<br>";
}

// One row
$stmt = $pdo->prepare("SELECT * FROM students WHERE id = :id");
$stmt->execute(["id" => 1]);
$student = $stmt->fetch();
```

**Never** put user input directly into the SQL text. Always use `?` or `:name` placeholders.
