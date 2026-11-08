---
title: "Bootstrap Icons"
sidebar_position: 24
---

# Bootstrap Icons

## Theory

**Bootstrap Icons** is a free set of more than 2000 small pictures (icons), such as a home, a heart and a search symbol. They are made as an icon font, so you can change their size and color with CSS.

## Practical

Add the icon stylesheet in the `head`:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
```

Use an icon with an `i` tag:

```html
<i class="bi bi-house"></i> Home
<i class="bi bi-search"></i> Search
<i class="bi bi-heart-fill text-danger fs-2"></i>

<button class="btn btn-primary">
  <i class="bi bi-download"></i> Download
</button>
```

Find all names at **icons.getbootstrap.com**.
