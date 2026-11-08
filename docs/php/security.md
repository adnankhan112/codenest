---
title: "PHP Security"
sidebar_position: 44
---

# PHP Security

## 1. SQL injection

Use prepared statements (see the PDO lesson).

## 2. XSS (Cross Site Scripting)

Escape output:

```php
echo htmlspecialchars($userText, ENT_QUOTES, "UTF-8");
```

## 3. Passwords

```php
$hash = password_hash("MyPassword", PASSWORD_DEFAULT);   // save this in the database

if (password_verify("MyPassword", $hash)) {
    echo "Correct password";
}
```

Never store plain passwords. Never use `md5` for passwords.

## 4. CSRF

Add a secret token to every form:

```php
session_start();
if (empty($_SESSION["token"])) {
    $_SESSION["token"] = bin2hex(random_bytes(32));
}
// in the form: <input type="hidden" name="token" value="...the token...">
// on submit:
if (!hash_equals($_SESSION["token"], $_POST["token"] ?? "")) {
    die("Invalid request");
}
```

## 5. Other rules

- Validate all input on the server.
- Check file uploads.
- Use HTTPS.
- Keep PHP updated and hide error messages on a live site.
