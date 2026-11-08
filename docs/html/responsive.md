---
title: HTML Responsive Design
sidebar_position: 24
---

# HTML Responsive Design

Responsive design means your page looks good on all screen sizes: phones, tablets and computers.

## The viewport meta tag

Add this to the `head` of every page:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## Responsive images

```html
<img src="photo.jpg" alt="A photo" style="max-width: 100%; height: auto;">
```

## Media queries (CSS)

```html
<style>
  .box { width: 50%; }

  @media (max-width: 600px) {
    .box { width: 100%; }
  }
</style>
```

On screens up to 600 pixels wide, the box becomes full width. You will learn more about this in the CSS tutorial.
