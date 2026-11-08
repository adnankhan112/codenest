---
title: "Bootstrap Forms"
sidebar_position: 13
---

# Bootstrap Forms

## Theory

A **form** collects information from the user. Bootstrap styles form controls with classes such as `.form-control` (text boxes), `.form-select` (dropdowns), `.form-check` (checkboxes and radio buttons) and `.form-label`.

## Practical

```html
<form>
  <div class="mb-3">
    <label for="email" class="form-label">Email address</label>
    <input type="email" class="form-control" id="email" placeholder="name@example.com">
    <div class="form-text">We will never share your email.</div>
  </div>

  <div class="mb-3">
    <label for="pass" class="form-label">Password</label>
    <input type="password" class="form-control" id="pass">
  </div>

  <div class="mb-3">
    <label for="country" class="form-label">Country</label>
    <select class="form-select" id="country">
      <option selected>Choose...</option>
      <option>Pakistan</option>
      <option>India</option>
    </select>
  </div>

  <div class="mb-3">
    <label for="msg" class="form-label">Message</label>
    <textarea class="form-control" id="msg" rows="3"></textarea>
  </div>

  <div class="form-check">
    <input class="form-check-input" type="checkbox" id="agree">
    <label class="form-check-label" for="agree">I agree</label>
  </div>

  <div class="form-check form-switch my-3">
    <input class="form-check-input" type="checkbox" id="news">
    <label class="form-check-label" for="news">Send me news</label>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```
