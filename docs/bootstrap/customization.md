---
title: "Bootstrap Customization and Dark Mode"
sidebar_position: 25
---

# Bootstrap Customization and Dark Mode

## Theory

You can change Bootstrap's look in three ways:

1. **Write your own CSS** after the Bootstrap file. Your rules win.
2. **CSS variables**: Bootstrap 5 uses variables (names that start with `--bs-`) that you can change.
3. **Sass**: for big projects, you can change the Sass variables and build your own Bootstrap file.

Bootstrap 5.3 also has built-in **dark mode**, which you switch on with one attribute.

## Practical

```html
<style>
  /* Your own CSS, loaded after Bootstrap */
  .btn-brand {
    background-color: #6f42c1;
    color: white;
  }
  .btn-brand:hover {
    background-color: #5a32a3;
    color: white;
  }

  /* Change Bootstrap's variables */
  :root {
    --bs-primary: #0d9488;
    --bs-primary-rgb: 13, 148, 136;
    --bs-body-font-family: "Segoe UI", sans-serif;
  }
</style>

<button class="btn btn-brand">My own button</button>

<!-- Dark mode for the whole page -->
<html lang="en" data-bs-theme="dark">

<!-- Dark mode for only one part -->
<div data-bs-theme="dark" class="p-3 bg-body text-body">Dark box</div>
```

Switch themes with JavaScript:

```javascript
document.documentElement.setAttribute("data-bs-theme", "dark");
```
