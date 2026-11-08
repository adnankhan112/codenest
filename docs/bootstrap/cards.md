---
title: "Bootstrap Cards"
sidebar_position: 16
---

# Bootstrap Cards

## Theory

A **card** is a flexible box with a border that holds content such as an image, a title, text and buttons. Cards are used for products, blog posts and profiles.

## Practical

```html
<div class="card" style="width: 18rem;">
  <img src="photo.jpg" class="card-img-top" alt="Photo">
  <div class="card-body">
    <h5 class="card-title">Python Tutorial</h5>
    <p class="card-text">Learn Python step by step with simple examples.</p>
    <a href="#" class="btn btn-primary">Start learning</a>
  </div>
</div>

<!-- A row of equal cards -->
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <div class="card-header">HTML</div>
      <div class="card-body">
        <p class="card-text">Structure of web pages.</p>
      </div>
      <div class="card-footer text-muted">26 lessons</div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 text-bg-primary">
      <div class="card-body">
        <p class="card-text">CSS makes pages beautiful.</p>
      </div>
    </div>
  </div>
</div>
```
