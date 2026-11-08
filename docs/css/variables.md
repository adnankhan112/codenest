---
title: CSS Variables
sidebar_position: 29
---

# CSS Variables

CSS variables store values you can reuse.

```css
:root {
  --main-color: #2563eb;
  --spacing: 16px;
}

h1 {
  color: var(--main-color);
}

.card {
  padding: var(--spacing);
  border: 1px solid var(--main-color);
}
```

Change the value once in `:root` and every place that uses it updates.
