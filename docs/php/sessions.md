---
title: "PHP Sessions"
sidebar_position: 26
---

# PHP Sessions

A session keeps data about a user on the **server** while they browse your site.

```php
<?php
session_start();                      // must be the first thing

$_SESSION["user"] = "Ali";
$_SESSION["role"] = "admin";

echo $_SESSION["user"];

// Log out
session_unset();
session_destroy();
```

## Protect a page

```php
<?php
session_start();
if (!isset($_SESSION["user"])) {
    header("Location: login.php");
    exit;
}
echo "Welcome " . htmlspecialchars($_SESSION["user"]);
```

After a user logs in, call `session_regenerate_id(true)` to stop session theft.
