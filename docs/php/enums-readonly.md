---
title: "PHP 8 Enums, Readonly and New Features"
sidebar_position: 41
---

# PHP 8 Enums, Readonly and New Features

```php
<?php
// Enum (PHP 8.1)
enum Status: string {
    case Active = "active";
    case Blocked = "blocked";

    public function label(): string {
        return ucfirst($this->value);
    }
}
echo Status::Active->value;       // active
echo Status::from("blocked")->label();

// Readonly property (PHP 8.1)
class Product {
    public function __construct(public readonly string $name) {}
}

// Nullsafe operator (PHP 8)
$city = $user?->address?->city;

// First-class callable (PHP 8.1)
$f = strlen(...);
echo $f("hello");        // 5

// Spread with string keys (PHP 8.1)
$a = ["x" => 1];
$b = [...$a, "y" => 2];
```

Other PHP 8 features: named arguments, union types, `match`, constructor promotion and attributes.
