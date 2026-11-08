---
title: "PHP Data Types"
sidebar_position: 7
---

# PHP Data Types

| Type | Example |
| --- | --- |
| String | `"Hello"` |
| Integer | `100` |
| Float | `3.14` |
| Boolean | `true` |
| Array | `[1, 2, 3]` |
| Object | `new Student()` |
| NULL | `null` |

```php
<?php
var_dump("Hello");     // string(5) "Hello"
var_dump(100);         // int(100)
var_dump(3.14);        // float(3.14)
var_dump(true);        // bool(true)
var_dump(null);        // NULL

echo gettype(5);       // integer
```

## Type casting

```php
$n = (int) "42abc";    // 42
$s = (string) 100;     // "100"
$f = (float) "3.5";    // 3.5
$b = (bool) 0;         // false
```
