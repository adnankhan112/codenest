---
title: "PHP Cookies"
sidebar_position: 25
---

# PHP Cookies

A cookie is a small piece of data stored in the visitor's browser.

```php
<?php
// Create (must be done before any output)
setcookie("username", "Ali", time() + 86400 * 7, "/", "", false, true);

// Read
if (isset($_COOKIE["username"])) {
    echo "Hello, " . htmlspecialchars($_COOKIE["username"]);
}

// Delete
setcookie("username", "", time() - 3600, "/");
```

- `time() + 86400 * 7` means 7 days from now.
- The last `true` is **httponly**: JavaScript cannot read the cookie. This is safer.
- Never store passwords or private data in cookies.
