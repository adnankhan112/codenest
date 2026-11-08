---
title: "Bootstrap Offcanvas and Toasts"
sidebar_position: 23
---

# Bootstrap Offcanvas and Toasts

## Theory

- An **offcanvas** is a panel that slides in from the side of the screen. It is often used for mobile menus and sidebars.
- A **toast** is a small message that appears for a short time and then disappears, like a notification.

## Practical

```html
<button class="btn btn-dark" data-bs-toggle="offcanvas" data-bs-target="#side">
  Open menu
</button>

<div class="offcanvas offcanvas-start" id="side">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title">Menu</h5>
    <button class="btn-close" data-bs-dismiss="offcanvas"></button>
  </div>
  <div class="offcanvas-body">
    <ul class="list-unstyled">
      <li><a href="#">Home</a></li>
      <li><a href="#">Tutorials</a></li>
    </ul>
  </div>
</div>

<button class="btn btn-success" id="toastBtn">Show toast</button>

<div class="toast-container position-fixed bottom-0 end-0 p-3">
  <div id="myToast" class="toast" role="alert">
    <div class="toast-header">
      <strong class="me-auto">CodeNest</strong>
      <button class="btn-close" data-bs-dismiss="toast"></button>
    </div>
    <div class="toast-body">Saved successfully!</div>
  </div>
</div>

<script>
  document.getElementById("toastBtn").addEventListener("click", () => {
    new bootstrap.Toast(document.getElementById("myToast")).show();
  });
</script>
```
