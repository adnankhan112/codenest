---
title: "PHP Forms: GET and POST"
sidebar_position: 22
---

# PHP Forms: GET and POST

**form.html**

```html
<form action="welcome.php" method="post">
  Name: <input type="text" name="name">
  Email: <input type="email" name="email">
  <button type="submit">Send</button>
</form>
```

**welcome.php**

```php
<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"] ?? "";
    $email = $_POST["email"] ?? "";
    echo "Welcome, " . htmlspecialchars($name);
}
```

## GET and POST

| | GET | POST |
| --- | --- | --- |
| Data is shown in the address | Yes | No |
| Good for | Search, filters | Login, forms with private data |
| Size limit | Small | Large |

Always use `htmlspecialchars()` when you print user input. It stops attacks.
