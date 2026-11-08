---
title: "PHP Arrays"
sidebar_position: 14
---

# PHP Arrays

```php
<?php
// Indexed array
$fruits = ["Apple", "Banana", "Mango"];
echo $fruits[0];                 // Apple
echo count($fruits);             // 3
$fruits[] = "Orange";            // add to the end

// Associative array (key and value)
$student = [
    "name" => "Ali",
    "age" => 20,
    "city" => "Lahore"
];
echo $student["name"];
$student["marks"] = 85;
unset($student["city"]);

// Multidimensional array
$students = [
    ["name" => "Ali", "marks" => 85],
    ["name" => "Sara", "marks" => 92],
];
echo $students[1]["name"];       // Sara

print_r($student);
```
