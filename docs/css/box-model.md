---
title: CSS Box Model
sidebar_position: 12
---

# CSS Box Model

Every HTML element is a box made of four layers, from inside to outside:

1. **Content**: the text or image.
2. **Padding**: space around the content.
3. **Border**: a line around the padding.
4. **Margin**: space outside the border.

```css
div {
  width: 300px;
  padding: 20px;
  border: 5px solid gray;
  margin: 25px;
}
```

With the default settings, the total width is 300 + 20 + 20 + 5 + 5 = 350px. With `box-sizing: border-box`, the total stays 300px.
