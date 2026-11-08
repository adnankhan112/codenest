---
title: "Bootstrap Display and Flex Utilities"
sidebar_position: 10
---

# Bootstrap Display and Flex Utilities

## Theory

**Flexbox** is a CSS tool for arranging items in a row or a column and for aligning them. Bootstrap gives short classes for it.

The `d-` classes control the `display` property. You can add a breakpoint to show or hide things on certain screens.

## Practical

```html
<!-- Row of items, space between them -->
<div class="d-flex justify-content-between align-items-center p-3 bg-light">
  <span>Left</span>
  <span>Middle</span>
  <span>Right</span>
</div>

<!-- Column -->
<div class="d-flex flex-column gap-2">
  <div>One</div>
  <div>Two</div>
</div>

<!-- Center something both ways -->
<div class="d-flex justify-content-center align-items-center" style="height: 200px;">
  <h3>Centered</h3>
</div>

<!-- Show and hide -->
<p class="d-none d-md-block">Visible only on medium screens and bigger</p>
<p class="d-block d-md-none">Visible only on small screens</p>

<div class="d-flex flex-wrap">
  <div class="flex-fill p-2">A</div>
  <div class="flex-fill p-2">B</div>
</div>
```
