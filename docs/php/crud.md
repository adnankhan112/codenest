---
title: "PHP CRUD with MySQL"
sidebar_position: 43
---

# PHP CRUD with MySQL

CRUD means Create, Read, Update, Delete.

```php
<?php
// $pdo is the connection from the previous lesson

// CREATE
$stmt = $pdo->prepare("INSERT INTO students (name, city, marks) VALUES (?, ?, ?)");
$stmt->execute(["Zain", "Peshawar", 70]);
$newId = $pdo->lastInsertId();

// READ
$all = $pdo->query("SELECT * FROM students ORDER BY id DESC")->fetchAll();

// UPDATE
$stmt = $pdo->prepare("UPDATE students SET marks = ? WHERE id = ?");
$stmt->execute([75, $newId]);
echo $stmt->rowCount() . " row updated";

// DELETE
$stmt = $pdo->prepare("DELETE FROM students WHERE id = ?");
$stmt->execute([$newId]);
```

## Transaction

```php
$pdo->beginTransaction();
try {
    $pdo->exec("UPDATE accounts SET balance = balance - 500 WHERE id = 1");
    $pdo->exec("UPDATE accounts SET balance = balance + 500 WHERE id = 2");
    $pdo->commit();
} catch (Exception $e) {
    $pdo->rollBack();
}
```
