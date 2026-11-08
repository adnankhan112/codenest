---
title: "Bootstrap Tabs and Carousel"
sidebar_position: 22
---

# Bootstrap Tabs and Carousel

## Theory

- **Tabs and pills** let the user switch between panels of content.
- A **carousel** is a slideshow that shows images or text one after another.

## Practical

```html
<ul class="nav nav-tabs" id="myTab">
  <li class="nav-item">
    <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#html">HTML</button>
  </li>
  <li class="nav-item">
    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#css">CSS</button>
  </li>
</ul>
<div class="tab-content p-3">
  <div class="tab-pane fade show active" id="html">HTML content</div>
  <div class="tab-pane fade" id="css">CSS content</div>
</div>

<div id="slider" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="slide1.jpg" class="d-block w-100" alt="Slide 1">
    </div>
    <div class="carousel-item">
      <img src="slide2.jpg" class="d-block w-100" alt="Slide 2">
    </div>
  </div>
  <button class="carousel-control-prev" data-bs-target="#slider" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" data-bs-target="#slider" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>
```
