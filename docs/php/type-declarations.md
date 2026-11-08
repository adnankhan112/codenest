---
title: "PHP Type Declarations"
sidebar_position: 18
---

# PHP Type Declarations

You can tell PHP what types a function expects and returns.

```php
<?php
declare(strict_types=1);

function add(int $a, int $b): int {
    return $a + $b;
}

function find(array $items, string $key): ?string {   // ? means it may return null
    return $items[$key] ?? null;
}

function show(int|string $value): void {              // union type, returns nothing
    echo $value;
}

echo add(2, 3);
// echo add("2", 3);   // error in strict mode
```

Type declarations make code clearer and catch mistakes early.
