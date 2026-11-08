---
title: CSS Units
sidebar_position: 23
---

# CSS Units

| Unit | Type | Meaning |
| --- | --- | --- |
| `px` | Absolute | Pixels |
| `%` | Relative | Percent of the parent |
| `em` | Relative | Relative to the parent's font size |
| `rem` | Relative | Relative to the root font size |
| `vw` | Relative | 1 percent of the screen width |
| `vh` | Relative | 1 percent of the screen height |

```css
html { font-size: 16px; }
h1 { font-size: 2rem; }   /* 32px */
.hero { height: 100vh; }
.col { width: 50%; }
```

Prefer `rem` and `%` for flexible, accessible designs.
