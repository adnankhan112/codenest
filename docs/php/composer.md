---
title: "PHP Composer"
sidebar_position: 45
---

# PHP Composer

Composer is the package manager for PHP. It downloads libraries and creates an autoloader.

## Install

Download it from getcomposer.org.

## Use

```
composer init
composer require monolog/monolog
composer update
```

This creates `composer.json` and a `vendor` folder.

```php
<?php
require __DIR__ . "/vendor/autoload.php";

use Monolog\Logger;
use Monolog\Handler\StreamHandler;

$log = new Logger("app");
$log->pushHandler(new StreamHandler("app.log"));
$log->info("Hello from Composer");
```

## Autoload your own classes

In `composer.json`:

```json
{
  "autoload": { "psr-4": { "App\\": "src/" } }
}
```

Then run `composer dump-autoload`.
