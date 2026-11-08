---
title: CSS Animations
sidebar_position: 27
---

# CSS Animations

Animations use keyframes to change styles over time.

```css
@keyframes slide {
  from { transform: translateX(-100px); opacity: 0; }
  to   { transform: translateX(0); opacity: 1; }
}

.box {
  animation: slide 1s ease-out;
}
```

## Properties

| Property | Purpose |
| --- | --- |
| `animation-name` | The keyframes to use |
| `animation-duration` | Length of one cycle |
| `animation-delay` | Wait before starting |
| `animation-iteration-count` | Number of repeats, or `infinite` |
| `animation-direction` | normal, reverse, alternate |
