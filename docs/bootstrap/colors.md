---
title: "Bootstrap Colors and Backgrounds"
sidebar_position: 7
---

# Bootstrap Colors and Backgrounds

## Theory

Bootstrap has a set of **theme colors**: primary (blue), secondary (gray), success (green), danger (red), warning (yellow), info (light blue), light and dark.

You use them with prefixes: `text-` for text color, `bg-` for background color, and `border-` for borders.

## Practical

```html
<p class="text-primary">Primary text</p>
<p class="text-success">Success text</p>
<p class="text-danger">Danger text</p>

<div class="bg-primary text-white p-3">Blue background</div>
<div class="bg-warning text-dark p-3">Yellow background</div>
<div class="bg-dark text-white p-3">Dark background</div>

<div class="border border-danger border-3 p-2">Red border</div>
<div class="p-3 rounded bg-success-subtle text-success-emphasis">Soft green box</div>
<div class="bg-body-secondary p-3">Light gray box</div>
```
