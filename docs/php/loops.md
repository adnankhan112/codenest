---
title: "PHP Loops"
sidebar_position: 13
---

# PHP Loops

```php
<?php
// while
$i = 1;
while ($i <= 3) {
    echo $i;
    $i++;
}

// do while
$n = 0;
do {
    echo $n;
    $n++;
} while ($n < 3);

// for
for ($k = 1; $k <= 5; $k++) {
    echo $k;
}

// foreach
$fruits = ["Apple", "Banana", "Mango"];
foreach ($fruits as $fruit) {
    echo $fruit;
}

$ages = ["Ali" => 20, "Sara" => 22];
foreach ($ages as $name => $age) {
    echo "$name is $age";
}

// break and continue
for ($x = 1; $x <= 10; $x++) {
    if ($x == 3) continue;
    if ($x == 7) break;
    echo $x;
}
```
