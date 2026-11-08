---
title: "PHP Superglobals"
sidebar_position: 24
---

# PHP Superglobals

Superglobals are built-in arrays you can use anywhere.

| Variable | Holds |
| --- | --- |
| `$_GET` | Data from the address (query string) |
| `$_POST` | Data from a form sent by POST |
| `$_REQUEST` | GET, POST and cookie data together |
| `$_SERVER` | Information about the server and the request |
| `$_SESSION` | Session data |
| `$_COOKIE` | Cookie data |
| `$_FILES` | Uploaded files |
| `$_ENV` | Environment variables |

```php
<?php
echo $_SERVER["REQUEST_METHOD"];
echo $_SERVER["HTTP_USER_AGENT"];
echo $_SERVER["REMOTE_ADDR"];
echo $_GET["id"] ?? "no id";
```
