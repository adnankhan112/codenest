---
title: CSS Overflow
sidebar_position: 20
---

# CSS Overflow

Overflow controls what happens when content is bigger than its box.

```css
.box {
  width: 200px;
  height: 100px;
  overflow: auto;
}
```

| Value | Result |
| --- | --- |
| `visible` | Content spills out (default) |
| `hidden` | Extra content is clipped |
| `scroll` | Scrollbars always shown |
| `auto` | Scrollbars only when needed |
