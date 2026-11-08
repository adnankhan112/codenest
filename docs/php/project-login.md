---
title: "PHP Mini Project: Login System"
sidebar_position: 48
---

# PHP Mini Project: Login System

## Database

```sql
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);
```

## register.php

```php
<?php
require "db.php";    // creates $pdo

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = trim($_POST["email"]);
    $pass = $_POST["password"];

    if (!filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($pass) < 8) {
        die("Invalid email or short password");
    }

    $stmt = $pdo->prepare("INSERT INTO users (email, password) VALUES (?, ?)");
    $stmt->execute([$email, password_hash($pass, PASSWORD_DEFAULT)]);
    echo "Registered";
}
```

## login.php

```php
<?php
session_start();
require "db.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->execute([$_POST["email"]]);
    $user = $stmt->fetch();

    if ($user && password_verify($_POST["password"], $user["password"])) {
        session_regenerate_id(true);
        $_SESSION["user_id"] = $user["id"];
        header("Location: dashboard.php");
        exit;
    }
    echo "Wrong email or password";
}
```

## dashboard.php and logout.php

```php
<?php
session_start();
if (!isset($_SESSION["user_id"])) { header("Location: login.php"); exit; }
echo "Welcome to your dashboard";
```

```php
<?php
session_start();
session_destroy();
header("Location: login.php");
```
