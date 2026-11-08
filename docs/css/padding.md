---
title: CSS Padding
sidebar_position: 10
---

# CSS Padding

Padding is the space **inside** an element, between its content and its border.

```css
p {
  padding: 15px;
}
```

## Sides and shorthand

```css
padding-top: 10px;
padding: 10px 20px;
padding: 5px 10px 15px 20px;
```

## Padding and size

By default, padding adds to an element's width and height. Use `box-sizing: border-box` to include padding and border inside the width.

```css
* {
  box-sizing: border-box;
}
```
