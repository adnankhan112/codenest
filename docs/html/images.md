---
title: HTML Images
sidebar_position: 12
---

# HTML Images

Images are added with the `img` element. It has no end tag.

```html
<img src="cat.jpg" alt="A sleeping cat" width="400" height="300">
```

## Important attributes

- `src`: the path or address of the image.
- `alt`: text shown if the image cannot load. It also helps screen readers and search engines.
- `width` and `height`: the image size in pixels.

## Image as a link

```html
<a href="https://www.example.com">
  <img src="logo.png" alt="Example logo">
</a>
```

## Image formats

| Format | Best for |
| --- | --- |
| JPEG | Photos |
| PNG | Graphics with transparency |
| GIF | Simple animations |
| SVG | Icons and logos that scale without losing quality |
| WebP | Modern, small file size |
