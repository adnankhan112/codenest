---
title: JavaScript Where To
sidebar_position: 2
---

# JavaScript Where To

## Internal script

```html
<script>
  console.log("Hello from the page");
</script>
```

## External script (recommended)

```html
<script src="app.js" defer></script>
```

The `defer` attribute loads the script after the HTML is ready.

## Tip

Put script tags at the end of the body, or use `defer` in the head, so the page content loads first.
