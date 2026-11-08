---
title: "PHP echo and print"
sidebar_position: 4
---

# PHP echo and print

```php
<?php
echo "Hello";
echo "A", "B", "C";          // many values
print "Hello";               // print returns 1

$name = "Ali";
echo "Hi $name";             // double quotes read variables
echo 'Hi $name';             // single quotes do not: prints Hi $name
echo "Total: " . 5 + 3;      // be careful with dots and plus
echo "Hi {$name}s";          // curly brackets for clear names

echo <<<TEXT
This is a long text
with many lines. Name: $name
TEXT;
```

Use `.` to join text. Use `print_r` and `var_dump` to see the contents of arrays and variables.
