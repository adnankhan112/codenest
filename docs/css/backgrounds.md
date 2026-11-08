---
title: CSS Backgrounds
sidebar_position: 7
---

# CSS Backgrounds

```css
body {
  background-color: #f4f4f4;
}

.hero {
  background-image: url("hero.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
```

## Properties

| Property | Purpose |
| --- | --- |
| `background-color` | Solid color |
| `background-image` | Image |
| `background-repeat` | Repeat or not |
| `background-size` | `cover`, `contain` or a size |
| `background-position` | Where the image sits |

## Gradients

```css
.box {
  background: linear-gradient(to right, red, yellow);
}
```
