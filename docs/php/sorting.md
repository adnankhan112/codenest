---
title: "PHP Sorting Arrays"
sidebar_position: 16
---

# PHP Sorting Arrays

| Function | Sorts | By |
| --- | --- | --- |
| `sort()` | Low to high | Value |
| `rsort()` | High to low | Value |
| `asort()` | Low to high, keeps keys | Value |
| `arsort()` | High to low, keeps keys | Value |
| `ksort()` | Low to high | Key |
| `krsort()` | High to low | Key |

```php
<?php
$nums = [5, 2, 8, 1];
sort($nums);                 // 1, 2, 5, 8

$marks = ["Ali" => 80, "Sara" => 92, "Hina" => 75];
arsort($marks);              // Sara, Ali, Hina

// Sort by your own rule
$students = [
    ["name" => "Ali", "marks" => 80],
    ["name" => "Sara", "marks" => 92],
];
usort($students, fn($a, $b) => $b["marks"] <=> $a["marks"]);
```
