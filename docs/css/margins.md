---
title: CSS Margins
sidebar_position: 9
---

# CSS Margins

A margin is the space **outside** an element's border.

```css
div {
  margin: 20px;
}
```

## Sides

```css
div {
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 10px;
  margin-left: 20px;
}
```

## Shorthand

```css
margin: 10px 20px;           /* top and bottom, left and right */
margin: 10px 20px 30px 40px; /* top, right, bottom, left */
```

## Centering a block

```css
.container {
  width: 600px;
  margin: 0 auto;
}
```

Vertical margins of neighbouring elements can collapse into one, taking the larger value.
