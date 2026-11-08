---
title: "Bootstrap Alerts, Badges and Spinners"
sidebar_position: 17
---

# Bootstrap Alerts, Badges and Spinners

## Theory

- An **alert** shows an important message to the user.
- A **badge** is a small label, such as "New" or a count.
- A **spinner** shows that something is loading.
- A **progress bar** shows how much of a task is done.

## Practical

```html
<div class="alert alert-success">Your message was sent!</div>
<div class="alert alert-danger">Something went wrong.</div>

<div class="alert alert-warning alert-dismissible fade show" role="alert">
  This alert can be closed.
  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
</div>

<h4>Tutorials <span class="badge bg-primary">New</span></h4>
<button class="btn btn-primary">
  Messages <span class="badge text-bg-light">4</span>
</button>

<div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>

<div class="progress">
  <div class="progress-bar bg-success" style="width: 75%;">75%</div>
</div>
```
