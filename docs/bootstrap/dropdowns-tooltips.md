---
title: "Bootstrap Dropdowns, Tooltips and Popovers"
sidebar_position: 20
---

# Bootstrap Dropdowns, Tooltips and Popovers

## Theory

- A **dropdown** shows a menu when you click a button.
- A **tooltip** is a small hint that appears when you hover over something.
- A **popover** is a bigger box with a title and text that appears when you click.

Tooltips and popovers must be switched on with a little JavaScript.

## Practical

```html
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">
    Choose language
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">English</a></li>
    <li><a class="dropdown-item" href="#">Urdu</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Other</a></li>
  </ul>
</div>

<button class="btn btn-info" data-bs-toggle="tooltip" title="I am a tooltip">
  Hover me
</button>

<button class="btn btn-warning" data-bs-toggle="popover"
        data-bs-title="Popover title" data-bs-content="Some helpful text.">
  Click me
</button>

<script>
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
    .forEach((el) => new bootstrap.Tooltip(el));
  document.querySelectorAll('[data-bs-toggle="popover"]')
    .forEach((el) => new bootstrap.Popover(el));
</script>
```
