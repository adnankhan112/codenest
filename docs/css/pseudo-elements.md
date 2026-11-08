---
title: CSS Pseudo-elements
sidebar_position: 25
---

# CSS Pseudo-elements

A pseudo-element styles a part of an element.

```css
p::first-letter {
  font-size: 2em;
  color: red;
}

p::first-line {
  font-weight: bold;
}

.required::after {
  content: " *";
  color: red;
}

::selection {
  background: yellow;
}
```

Use two colons for pseudo-elements. The `content` property is required for `::before` and `::after`.
