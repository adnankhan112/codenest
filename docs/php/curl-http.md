---
title: "PHP cURL and Sending Email"
sidebar_position: 47
---

# PHP cURL and Sending Email

## Calling another API with cURL

```php
<?php
$ch = curl_init("https://jsonplaceholder.typicode.com/posts/1");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);

$post = json_decode($response, true);
echo $post["title"];
```

## Sending an email

```php
mail("friend@example.com", "Subject", "Hello message", "From: me@example.com");
```

The `mail()` function needs a mail server. For real websites, use a library such as **PHPMailer** (installed with Composer) and an SMTP service.
