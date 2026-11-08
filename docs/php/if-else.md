---
title: "PHP If Else and Switch"
sidebar_position: 12
---

# PHP If Else and Switch

```php
<?php
$marks = 75;

if ($marks >= 80) {
    echo "Grade A";
} elseif ($marks >= 60) {
    echo "Grade B";
} else {
    echo "Try again";
}

echo $marks >= 50 ? "Pass" : "Fail";        // ternary

$day = 3;
switch ($day) {
    case 1:
        echo "Monday";
        break;
    case 2:
        echo "Tuesday";
        break;
    default:
        echo "Another day";
}

// match (PHP 8): short and strict
$name = match ($day) {
    1 => "Monday",
    2 => "Tuesday",
    3 => "Wednesday",
    default => "Another day",
};
```
