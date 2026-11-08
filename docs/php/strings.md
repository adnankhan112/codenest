---
title: "PHP Strings"
sidebar_position: 8
---

# PHP Strings

```php
<?php
$text = "Hello World";

echo strlen($text);                  // 11
echo strtoupper($text);              // HELLO WORLD
echo strtolower($text);
echo str_word_count($text);          // 2
echo strrev($text);                  // dlroW olleH
echo strpos($text, "World");         // 6
echo str_replace("World", "PHP", $text);
echo substr($text, 0, 5);            // Hello
echo ucfirst("ali");                 // Ali
echo ucwords("ali khan");            // Ali Khan
echo trim("  hi  ");
echo str_repeat("ab", 3);            // ababab
```

## Split and join

```php
$parts = explode(",", "a,b,c");      // array
echo implode("-", $parts);           // a-b-c
```

## Formatting

```php
printf("Price: %.2f", 9.5);          // Price: 9.50
echo number_format(1234567.891, 2);  // 1,234,567.89
```

## Search helpers (PHP 8)

```php
var_dump(str_contains("Hello", "ell"));       // true
var_dump(str_starts_with("Hello", "He"));     // true
var_dump(str_ends_with("Hello", "lo"));       // true
```
