---
title: "PHP Magic Methods"
sidebar_position: 39
---

# PHP Magic Methods

Magic methods start with two underscores. PHP calls them automatically.

```php
<?php
class Person {
    private array $data = [];

    public function __construct(public string $name) {}

    public function __toString(): string {          // when printed
        return "Person: " . $this->name;
    }

    public function __get($key) {                   // reading a missing property
        return $this->data[$key] ?? null;
    }

    public function __set($key, $value) {           // writing a missing property
        $this->data[$key] = $value;
    }

    public function __call($method, $args) {        // calling a missing method
        return "Method $method does not exist";
    }

    public function __destruct() {                  // when the object is destroyed
        // clean up
    }
}

$p = new Person("Ali");
echo $p;
$p->city = "Lahore";
echo $p->city;
```

Other useful ones: `__isset`, `__unset`, `__clone`, `__invoke`.
