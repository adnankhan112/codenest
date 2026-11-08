---
title: CSS Syntax
sidebar_position: 2
---

# CSS Syntax

A CSS rule has a selector and a declaration block.

```css
h1 {
  color: blue;
  font-size: 32px;
}
```

- `h1` is the **selector**. It points to the HTML element to style.
- Inside the curly braces are **declarations**.
- Each declaration has a **property** (`color`) and a **value** (`blue`), separated by a colon and ended with a semicolon.

## Grouping selectors

```css
h1, h2, p {
  text-align: center;
  color: darkgreen;
}
```
