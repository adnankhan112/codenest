---
title: "PHP Traits"
sidebar_position: 38
---

# PHP Traits

A trait is a group of methods you can add to many classes. It solves the problem of only having one parent class.

```php
<?php
trait Greeting {
    public function hello(): string {
        return "Hello from " . static::class;
    }
}

trait Timestamps {
    public ?string $createdAt = null;
    public function touch(): void {
        $this->createdAt = date("Y-m-d H:i:s");
    }
}

class User {
    use Greeting, Timestamps;
}

$u = new User();
echo $u->hello();
$u->touch();
```
