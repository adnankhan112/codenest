---
title: "PHP Functions"
sidebar_position: 17
---

# PHP Functions

```php
<?php
function add($a, $b) {
    return $a + $b;
}
echo add(2, 3);                     // 5

function greet($name = "friend") {   // default value
    return "Hello, $name";
}
echo greet();
echo greet("Ali");

function total(...$numbers) {        // any number of arguments
    return array_sum($numbers);
}
echo total(1, 2, 3, 4);              // 10

function addOne(&$x) {               // by reference
    $x++;
}
$n = 5;
addOne($n);                          // $n is 6

echo greet(name: "Sara");            // named argument (PHP 8)
```
