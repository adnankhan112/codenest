---
title: "PHP Errors and Exceptions"
sidebar_position: 32
---

# PHP Errors and Exceptions

```php
<?php
try {
    $n = 0;
    if ($n === 0) {
        throw new Exception("Cannot divide by zero");
    }
    echo 10 / $n;
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
} finally {
    echo "Done";
}
```

## Custom exception

```php
class AgeException extends Exception {}

function setAge(int $age) {
    if ($age < 0) throw new AgeException("Age cannot be negative");
}
```

## Show or hide errors

```php
error_reporting(E_ALL);
ini_set("display_errors", 1);     // while learning
// On a live website, turn display_errors OFF and log errors instead.
error_log("Something went wrong");
```

PHP 7 and later also has `Error` and `TypeError`. Catch `Throwable` to catch everything.
