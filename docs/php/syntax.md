---
title: "PHP Syntax"
sidebar_position: 3
---

# PHP Syntax

```php
<?php
echo "Hello";
echo "<br>";
echo "World";
?>
```

- PHP code starts with `<?php` and ends with `?>`. In a file with only PHP, you can leave out the closing `?>`.
- Every statement ends with a semicolon.
- PHP files have the `.php` extension.
- Keywords like `echo` and `if` are not case sensitive, but **variable names are**.

## PHP inside HTML

```php
<!DOCTYPE html>
<html>
<body>
  <h1><?php echo "My page"; ?></h1>
  <p>Today is <?php echo date("d-m-Y"); ?></p>
</body>
</html>
```
