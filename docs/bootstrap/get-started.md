---
title: "Bootstrap Getting Started"
sidebar_position: 2
---

# Bootstrap Getting Started

## Theory

There are two common ways to use Bootstrap:

1. **CDN** (Content Delivery Network): you add a link to a file on the internet. It is the easiest way to start.
2. **Download or npm**: you keep the files in your own project.

The page must also have the `viewport` meta tag, so it works well on phones.

## Practical

Create `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>My Bootstrap Page</title>

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <div class="container">
    <h1 class="text-primary">Hello, Bootstrap!</h1>
    <button class="btn btn-success">Start</button>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

- The CSS link goes in the `head`.
- The JavaScript bundle goes just before `</body>`.

## With npm

```
npm install bootstrap
```
