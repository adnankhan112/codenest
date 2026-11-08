---
title: "PHP Installation"
sidebar_position: 2
---

# PHP Installation

## Easy way: XAMPP

1. Download **XAMPP** from apachefriends.org and install it.
2. Open the XAMPP Control Panel and click **Start** next to **Apache** and **MySQL**.
3. Put your PHP files in the folder `C:\xampp\htdocs`.
4. Open the browser and visit `http://localhost/yourfile.php`.

## Test file

Create `C:\xampp\htdocs\test.php`:

```php
<?php
echo "PHP is working!";
phpinfo();
```

Visit `http://localhost/test.php`.

## Built-in server (without XAMPP)

If PHP is installed, go to your project folder and run:

```
php -S localhost:8000
```

Then visit `http://localhost:8000`.
