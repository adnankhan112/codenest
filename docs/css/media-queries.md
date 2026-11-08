---
title: CSS Media Queries
sidebar_position: 28
---

# CSS Media Queries

Media queries apply styles only when a condition is true, such as a screen width.

```css
.container {
  width: 80%;
}

@media (max-width: 768px) {
  .container {
    width: 100%;
  }
  nav ul {
    flex-direction: column;
  }
}
```

## Mobile first

Write the styles for small screens first, then add styles for larger screens:

```css
@media (min-width: 768px) {
  .grid { grid-template-columns: 1fr 1fr; }
}
```

Remember to add the viewport meta tag in your HTML head.
