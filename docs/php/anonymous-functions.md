---
title: "PHP Anonymous and Arrow Functions"
sidebar_position: 20
---

# PHP Anonymous and Arrow Functions

```php
<?php
// Anonymous function (closure)
$hello = function ($name) {
    return "Hello, $name";
};
echo $hello("Ali");

// Using a variable from outside with use
$tax = 0.17;
$price = function ($amount) use ($tax) {
    return $amount * (1 + $tax);
};

// Arrow function: short, sees outer variables automatically
$double = fn($n) => $n * 2;
echo $double(5);              // 10

// As a callback
$names = ["ali", "sara"];
print_r(array_map(fn($n) => ucfirst($n), $names));
```
