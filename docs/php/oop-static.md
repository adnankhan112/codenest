---
title: "PHP Static, Constants and Late Binding"
sidebar_position: 36
---

# PHP Static, Constants and Late Binding

```php
<?php
class Counter {
    public static int $count = 0;
    const MAX = 10;

    public static function add(): void {
        self::$count++;
    }
}

Counter::add();
Counter::add();
echo Counter::$count;      // 2
echo Counter::MAX;         // 10
```

## self and static

```php
class Model {
    public static function create(): static {
        return new static();       // creates the child class when called from a child
    }
}
class User extends Model {}
$u = User::create();               // a User object
```

`::` is called the scope resolution operator.
