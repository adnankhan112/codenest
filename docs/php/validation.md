---
title: "PHP Form Validation"
sidebar_position: 23
---

# PHP Form Validation

```php
<?php
$errors = [];

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = trim($_POST["name"] ?? "");
    $email = trim($_POST["email"] ?? "");
    $age = $_POST["age"] ?? "";

    if ($name === "") {
        $errors[] = "Name is required";
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Email is not valid";
    }
    if (!filter_var($age, FILTER_VALIDATE_INT, ["options" => ["min_range" => 1, "max_range" => 120]])) {
        $errors[] = "Age must be from 1 to 120";
    }

    if (empty($errors)) {
        echo "Form is valid";
    } else {
        foreach ($errors as $e) {
            echo htmlspecialchars($e) . "<br>";
        }
    }
}
```

Always validate on the **server**. Browser checks can be skipped by attackers.
