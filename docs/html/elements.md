---
title: HTML Elements
sidebar_position: 4
---

# HTML Elements

An HTML element is made of a start tag, some content and an end tag.

```html
<p>This is a paragraph.</p>
```

- Start tag: `<p>`
- Content: This is a paragraph.
- End tag: `</p>`

## Nested elements

Elements can be placed inside other elements.

```html
<body>
  <h1>My Page</h1>
  <p>Hello <b>world</b>!</p>
</body>
```

## Empty elements

Some elements have no content and no end tag. They are called empty (or void) elements.

```html
<br>
<hr>
<img src="photo.jpg" alt="A photo">
```

## Block and inline

Block elements start on a new line and take the full width (for example `h1`, `p`, `div`). Inline elements stay inside a line of text (for example `a`, `span`, `b`).
