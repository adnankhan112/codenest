---
title: CSS Colors
sidebar_position: 6
---

# CSS Colors

CSS supports several ways to write colors.

```css
p { color: red; }                 /* name */
p { color: #ff0000; }             /* hex */
p { color: rgb(255, 0, 0); }      /* RGB */
p { color: rgba(255, 0, 0, 0.5); }/* RGB with transparency */
p { color: hsl(0, 100%, 50%); }   /* hue, saturation, lightness */
```

## Where to use colors

```css
h1 {
  color: white;
  background-color: darkblue;
  border: 2px solid orange;
}
```

Choose colors with good contrast between text and background so the page is easy to read.
