---
title: "PHP Numbers and Math"
sidebar_position: 9
---

# PHP Numbers and Math

```php
<?php
echo 10 + 3;          // 13
echo 10 / 4;          // 2.5
echo intdiv(10, 4);   // 2
echo 10 % 3;          // 1
echo 2 ** 5;          // 32

echo max(4, 9, 2);    // 9
echo min(4, 9, 2);    // 2
echo abs(-7);         // 7
echo sqrt(64);        // 8
echo round(4.567, 2); // 4.57
echo ceil(4.1);       // 5
echo floor(4.9);      // 4
echo pi();

echo rand(1, 6);              // random from 1 to 6
echo random_int(1, 100);      // safer random number

var_dump(is_numeric("12.5")); // true
var_dump(is_int(5));          // true
```
