---
title: "PHP Variable Scope"
sidebar_position: 19
---

# PHP Variable Scope

```php
<?php
$x = 5;                     // global

function test() {
    // echo $x;             // error: $x is not visible here
    global $x;              // use the global variable
    echo $x;
    echo $GLOBALS["x"];     // another way
}

function counter() {
    static $count = 0;      // keeps its value between calls
    $count++;
    echo $count;
}
counter(); counter(); counter();    // 1 2 3
```

- **Local**: inside a function.
- **Global**: outside functions.
- **Static**: a local variable that remembers its value.
