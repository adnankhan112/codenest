---
title: CSS Links
sidebar_position: 15
---

# CSS Links

Links can be styled differently for each state.

```css
a:link    { color: blue; }
a:visited { color: purple; }
a:hover   { color: red; text-decoration: underline; }
a:active  { color: orange; }
```

Keep this order: link, visited, hover, active.

## Link as a button

```css
a.button {
  background-color: #2563eb;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 6px;
}
```
