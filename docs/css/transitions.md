---
title: CSS Transitions
sidebar_position: 26
---

# CSS Transitions

Transitions animate a change smoothly.

```css
.button {
  background-color: blue;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: red;
}
```

## Properties

- `transition-property`: what to animate
- `transition-duration`: how long
- `transition-timing-function`: speed curve (`ease`, `linear`, `ease-in-out`)
- `transition-delay`: wait before starting

## Transform

```css
.card:hover {
  transform: scale(1.05) rotate(2deg);
}
```
