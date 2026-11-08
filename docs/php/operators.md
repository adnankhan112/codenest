---
title: "PHP Operators"
sidebar_position: 11
---

# PHP Operators

```php
<?php
$a = 10; $b = 3;

// Arithmetic
echo $a + $b, $a - $b, $a * $b, $a % $b;

// Comparison
var_dump($a == "10");     // true  (value only)
var_dump($a === "10");    // false (value and type)
var_dump($a != $b);
var_dump($a <=> $b);      // 1 (spaceship: -1, 0 or 1)

// Logical
var_dump($a > 5 && $b < 5);
var_dump($a > 50 || $b == 3);
var_dump(!($a > 5));

// Assignment
$a += 5;
$a .= "x";                // join text

// Increment
$b++;
```

## Null operators

```php
$name = $_GET["name"] ?? "Guest";    // use "Guest" if not set
$x = null;
$x ??= 5;                            // set only if null
```

Always prefer `===` over `==`.
