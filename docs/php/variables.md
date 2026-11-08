---
title: "PHP Variables"
sidebar_position: 6
---

# PHP Variables

A variable starts with a dollar sign `$`.

```php
<?php
$name = "Ali";
$age = 20;
$price = 9.99;
$isStudent = true;

echo $name;
$age = 21;                // change the value
```

## Rules

- Start with `$`, then a letter or underscore.
- Use letters, digits and underscores.
- Names are **case sensitive**: `$age` and `$Age` are different.
- You do not need to write the type. PHP finds it.

## Variable variables and references

```php
$a = 5;
$b = &$a;      // $b is another name for $a
$b = 10;
echo $a;       // 10
```
