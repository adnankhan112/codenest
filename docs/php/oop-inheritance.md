---
title: "PHP Inheritance"
sidebar_position: 35
---

# PHP Inheritance

```php
<?php
class Animal {
    public function __construct(protected string $name) {}

    public function speak(): string {
        return "$this->name makes a sound";
    }
}

class Dog extends Animal {
    public function speak(): string {            // override
        return "$this->name says Woof";
    }

    public function parentSpeak(): string {
        return parent::speak();                  // call the parent version
    }
}

$d = new Dog("Rex");
echo $d->speak();
```

- `extends` makes a child class.
- `parent::` calls the parent's method.
- Add `final` before a class or method to stop it from being changed.
