---
title: CSS Fonts
sidebar_position: 14
---

# CSS Fonts

```css
body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: bold;
  font-style: italic;
}
```

## Font families

- **Serif**: fonts with small strokes at the letter ends, such as Times New Roman.
- **Sans-serif**: clean fonts, such as Arial.
- **Monospace**: every letter has the same width, such as Courier New.

Always list a fallback generic family at the end.

## Google Fonts

```html
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
```

```css
body { font-family: 'Roboto', sans-serif; }
```
