---
title: CSS Flexbox
sidebar_position: 21
---

# CSS Flexbox

Flexbox arranges items in a row or column and makes layouts flexible.

```html
<div class="container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

```css
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
}
```

## Container properties

| Property | Purpose |
| --- | --- |
| `flex-direction` | row or column |
| `justify-content` | Alignment along the main axis |
| `align-items` | Alignment along the cross axis |
| `flex-wrap` | Allow items to wrap to the next line |
| `gap` | Space between items |

## Item property

```css
.item { flex: 1; }
```

This makes the item share the free space equally with other items.
