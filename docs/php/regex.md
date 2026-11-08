---
title: "PHP Regular Expressions"
sidebar_position: 30
---

# PHP Regular Expressions

```php
<?php
echo preg_match("/^\d{4}$/", "2026");             // 1 (match)
echo preg_replace("/\d/", "#", "Room 42");        // Room ##

preg_match_all("/\d+/", "a1 b22 c333", $m);
print_r($m[0]);                                   // 1, 22, 333

print_r(preg_split("/[,;]/", "a,b;c"));

$email = "ali@example.com";
if (preg_match("/^[\w.]+@[\w.]+\.\w+$/", $email)) {
    echo "Looks like an email";
}
```

| Pattern | Meaning |
| --- | --- |
| `\d` | A digit |
| `\w` | A letter, digit or underscore |
| `\s` | A space |
| `.` | Any character |
| `+` | One or more |
| `*` | Zero or more |
| `^` and `$` | Start and end |
