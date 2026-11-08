---
title: "Bootstrap Spacing (Margin and Padding)"
sidebar_position: 8
---

# Bootstrap Spacing (Margin and Padding)

## Theory

**Margin** is space **outside** an element. **Padding** is space **inside** it.

Bootstrap uses a short pattern: `{property}{sides}-{size}`.

- Property: `m` (margin) or `p` (padding).
- Sides: `t` top, `b` bottom, `s` start (left), `e` end (right), `x` left and right, `y` top and bottom, or nothing for all sides.
- Size: `0` to `5`, or `auto`.

## Practical

```html
<div class="p-3">Padding on all sides</div>
<div class="m-4">Margin on all sides</div>
<div class="mt-5">Margin on top</div>
<div class="mb-2">Margin at the bottom</div>
<div class="px-4 py-2">Padding: left and right 4, top and bottom 2</div>
<div class="mx-auto" style="width: 200px;">Centered with auto margins</div>
<div class="ms-3 me-3">Margin at the start and end</div>
```

| Number | Space |
| --- | --- |
| 0 | 0 |
| 1 | 0.25 rem |
| 2 | 0.5 rem |
| 3 | 1 rem |
| 4 | 1.5 rem |
| 5 | 3 rem |
