---
title: "PHP include and require"
sidebar_position: 21
---

# PHP include and require

Use `include` and `require` to reuse code from another file, such as a header and footer.

```php
<?php
include "header.php";
require "config.php";
require_once "functions.php";     // load only once
include_once "footer.php";
```

| Keyword | If the file is missing |
| --- | --- |
| `include` | Warning, the script continues |
| `require` | Fatal error, the script stops |
| `_once` versions | Load the file only one time |

Use `require_once` for files that are needed, such as a database connection.
