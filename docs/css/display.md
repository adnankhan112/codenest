---
title: CSS Display
sidebar_position: 18
---

# CSS Display

The `display` property controls how an element is shown.

| Value | Behavior |
| --- | --- |
| `block` | Starts on a new line, takes the full width |
| `inline` | Stays in the line, width and height are ignored |
| `inline-block` | Stays in the line, but width and height work |
| `none` | The element is removed from the page |
| `flex` | Starts a flexbox layout |
| `grid` | Starts a grid layout |

```css
span.box {
  display: inline-block;
  width: 100px;
  height: 50px;
}

.hidden {
  display: none;
}
```
