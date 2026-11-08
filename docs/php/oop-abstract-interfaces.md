---
title: "PHP Abstract Classes and Interfaces"
sidebar_position: 37
---

# PHP Abstract Classes and Interfaces

## Abstract class

```php
<?php
abstract class Shape {
    abstract public function area(): float;

    public function describe(): string {
        return "Area is " . $this->area();
    }
}

class Circle extends Shape {
    public function __construct(private float $r) {}
    public function area(): float { return pi() * $this->r ** 2; }
}
```

## Interface

```php
interface Loggable {
    public function log(string $message): void;
}

class FileLogger implements Loggable {
    public function log(string $message): void {
        file_put_contents("log.txt", $message . "\n", FILE_APPEND);
    }
}
```

A class can implement **many** interfaces, but extend only one class.
