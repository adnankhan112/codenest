---
title: "Bootstrap Input Groups and Form Validation"
sidebar_position: 14
---

# Bootstrap Input Groups and Form Validation

## Theory

An **input group** attaches text or a button to an input. **Validation** shows the user whether the input is correct, using green and red messages.

## Practical

```html
<div class="input-group mb-3">
  <span class="input-group-text">@</span>
  <input type="text" class="form-control" placeholder="Username">
</div>

<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Search">
  <button class="btn btn-outline-secondary" type="button">Go</button>
</div>

<!-- Validation -->
<form class="needs-validation" novalidate>
  <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input type="text" class="form-control" id="name" required>
    <div class="valid-feedback">Looks good!</div>
    <div class="invalid-feedback">Please enter your name.</div>
  </div>
  <button class="btn btn-primary" type="submit">Send</button>
</form>

<script>
  document.querySelectorAll(".needs-validation").forEach((form) => {
    form.addEventListener("submit", (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add("was-validated");
    });
  });
</script>
```
