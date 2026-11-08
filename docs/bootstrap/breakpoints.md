---
title: "Bootstrap Breakpoints and Responsive Columns"
sidebar_position: 5
---

# Bootstrap Breakpoints and Responsive Columns

## Theory

A **breakpoint** is a screen width where the layout can change. Bootstrap has six sizes:

| Name | Class prefix | Screen width |
| --- | --- | --- |
| Extra small | (none) | Below 576 pixels |
| Small | `sm` | 576 pixels and up |
| Medium | `md` | 768 pixels and up |
| Large | `lg` | 992 pixels and up |
| Extra large | `xl` | 1200 pixels and up |
| Extra extra large | `xxl` | 1400 pixels and up |

A class like `col-md-6` means: "use 6 columns from the medium size and up". Below that, the column takes the full width.

## Practical

```html
<div class="container">
  <div class="row">
    <!-- Phone: 1 per row. Tablet: 2 per row. Computer: 4 per row. -->
    <div class="col-12 col-md-6 col-lg-3">Card 1</div>
    <div class="col-12 col-md-6 col-lg-3">Card 2</div>
    <div class="col-12 col-md-6 col-lg-3">Card 3</div>
    <div class="col-12 col-md-6 col-lg-3">Card 4</div>
  </div>
</div>
```

Resize your browser window to see the columns change.
