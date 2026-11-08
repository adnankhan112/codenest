---
title: "PHP Namespaces and Autoloading"
sidebar_position: 40
---

# PHP Namespaces and Autoloading

Namespaces group classes and stop name clashes.

**src/Models/User.php**

```php
<?php
namespace App\Models;

class User {
    public function hello() { return "Hi"; }
}
```

**index.php**

```php
<?php
use App\Models\User;

spl_autoload_register(function ($class) {
    $path = __DIR__ . "/src/" . str_replace(["App\\", "\\"], ["", "/"], $class) . ".php";
    if (file_exists($path)) require $path;
});

$u = new User();
echo $u->hello();
```

In real projects, **Composer** creates the autoloader for you (see the Composer lesson).
