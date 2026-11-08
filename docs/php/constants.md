---
title: "PHP Constants and Magic Constants"
sidebar_position: 10
---

# PHP Constants and Magic Constants

```php
<?php
define("SITE_NAME", "CodeNest");
const MAX_USERS = 100;

echo SITE_NAME;
echo MAX_USERS;
```

A constant has no `$` sign and cannot change.

## Magic constants

| Constant | Value |
| --- | --- |
| `__LINE__` | The current line number |
| `__FILE__` | The full file path |
| `__DIR__` | The folder of the file |
| `__FUNCTION__` | The current function name |
| `__CLASS__` | The current class name |
