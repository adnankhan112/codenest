---
title: "PHP Best Practices"
sidebar_position: 49
---

# PHP Best Practices

- Use the newest PHP version that your host supports.
- Use `declare(strict_types=1);` and type declarations.
- Use PDO with prepared statements for every query.
- Escape all output with `htmlspecialchars`.
- Hash passwords with `password_hash`.
- Follow the **PSR-12** coding style.
- Use Composer and autoloading.
- Keep logic and HTML apart (use templates or a framework).
- Keep passwords and keys out of your code. Use environment variables or a `.env` file.
- Turn off `display_errors` on a live website.
- Write small functions and give clear names.
- Learn a framework such as **Laravel** for big projects.
