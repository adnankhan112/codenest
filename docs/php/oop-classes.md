---
title: "PHP Classes and Objects"
sidebar_position: 33
---

# PHP Classes and Objects

```php
<?php
class Student {
    public string $name;
    public int $marks;

    public function __construct(string $name, int $marks) {
        $this->name = $name;
        $this->marks = $marks;
    }

    public function isPassed(): bool {
        return $this->marks >= 50;
    }
}

$s = new Student("Ali", 72);
echo $s->name;
var_dump($s->isPassed());
```

## Constructor promotion (PHP 8)

```php
class Point {
    public function __construct(
        public int $x = 0,
        public int $y = 0
    ) {}
}
$p = new Point(3, 4);
```
