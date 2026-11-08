---
title: CSS Position
sidebar_position: 19
---

# CSS Position

The `position` property sets how an element is placed.

| Value | Behavior |
| --- | --- |
| `static` | Default. Normal flow. |
| `relative` | Moved relative to its normal position. |
| `absolute` | Positioned relative to the nearest positioned parent. |
| `fixed` | Stays in place relative to the screen. |
| `sticky` | Scrolls normally, then sticks at an edge. |

```css
.parent { position: relative; }
.badge {
  position: absolute;
  top: 10px;
  right: 10px;
}

.navbar {
  position: sticky;
  top: 0;
}
```

Use `z-index` to control which overlapping element is on top.
