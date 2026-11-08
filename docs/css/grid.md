---
title: CSS Grid
sidebar_position: 22
---

# CSS Grid

Grid creates two-dimensional layouts with rows and columns.

```css
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}
```

This makes three equal columns. `fr` means a fraction of the free space.

## Responsive grid

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}
```

## Spanning

```css
.wide { grid-column: span 2; }
```
