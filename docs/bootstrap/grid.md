---
title: "Bootstrap Grid System"
sidebar_position: 4
---

# Bootstrap Grid System

## Theory

The **grid** splits a page into **12 equal columns**. You put content in columns, and you choose how many of the 12 columns each piece uses.

- A `.row` holds the columns.
- A `.col` is a column. `col-6` uses 6 of 12 columns (half the width).
- Columns in one row must add up to 12 or less. If they add up to more, the extra ones move to the next line.

## Practical

```html
<div class="container">
  <!-- Equal columns -->
  <div class="row">
    <div class="col">One</div>
    <div class="col">Two</div>
    <div class="col">Three</div>
  </div>

  <!-- Chosen widths: 4 + 8 = 12 -->
  <div class="row">
    <div class="col-4">Sidebar</div>
    <div class="col-8">Main content</div>
  </div>

  <!-- Space between columns -->
  <div class="row g-3">
    <div class="col-6">A</div>
    <div class="col-6">B</div>
  </div>

  <!-- Center and align -->
  <div class="row justify-content-center align-items-center">
    <div class="col-4">Centered</div>
  </div>
</div>
```

`g-3` adds a gap (gutter) between columns.
