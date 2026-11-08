---
title: "PHP Array Functions"
sidebar_position: 15
---

# PHP Array Functions

```php
<?php
$nums = [5, 2, 8, 1];

array_push($nums, 9);               // add to the end
array_pop($nums);                   // remove from the end
array_unshift($nums, 0);            // add to the start
array_shift($nums);                 // remove from the start

echo in_array(8, $nums);            // true
echo array_search(8, $nums);        // position
print_r(array_reverse($nums));
print_r(array_slice($nums, 1, 2));
print_r(array_merge([1, 2], [3, 4]));
print_r(array_unique([1, 2, 2, 3]));
echo array_sum($nums);
print_r(array_keys(["a" => 1, "b" => 2]));
print_r(array_values(["a" => 1, "b" => 2]));
print_r(array_key_exists("a", ["a" => 1]));

// Functional style
$doubled = array_map(fn($n) => $n * 2, $nums);
$even = array_filter($nums, fn($n) => $n % 2 == 0);
$total = array_reduce($nums, fn($c, $n) => $c + $n, 0);

// Destructuring
[$a, $b] = [10, 20];
['name' => $name] = ["name" => "Ali"];
```
