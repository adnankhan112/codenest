---
title: How to Add CSS
sidebar_position: 4
---

# How to Add CSS

There are three ways to add CSS to an HTML page.

## 1. External CSS (recommended)

```html
<link rel="stylesheet" href="style.css">
```

All styles live in a separate `style.css` file.

## 2. Internal CSS

```html
<head>
  <style>
    body { background-color: beige; }
  </style>
</head>
```

## 3. Inline CSS

```html
<p style="color: red;">Red text</p>
```

## Which one to use?

Use external CSS for real websites. If styles conflict, inline styles beat internal styles, and internal styles beat external ones when they come later in the page.
