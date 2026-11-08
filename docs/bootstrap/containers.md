---
title: "Bootstrap Containers"
sidebar_position: 3
---

# Bootstrap Containers

## Theory

A **container** is a box that holds your page content and keeps it in the middle with some space on the sides. It is the base of every Bootstrap layout.

There are two main kinds:

- `.container` has a fixed maximum width that changes with the screen size.
- `.container-fluid` always takes the full width.

## Practical

```html
<div class="container">
  <p>Fixed width, centered.</p>
</div>

<div class="container-fluid">
  <p>Always full width.</p>
</div>

<!-- Full width until a size, then fixed -->
<div class="container-md">
  <p>Full width on small screens, fixed from the medium size.</p>
</div>
```

| Class | Width |
| --- | --- |
| `.container` | Fixed at each size |
| `.container-fluid` | 100 percent |
| `.container-sm` to `.container-xxl` | 100 percent until that size |
