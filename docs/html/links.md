---
title: HTML Links
sidebar_position: 11
---

# HTML Links

Links are created with the `a` (anchor) element. The `href` attribute holds the destination.

```html
<a href="https://www.example.com">Visit Example</a>
```

## Open in a new tab

```html
<a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Open in new tab</a>
```

## Link to another page of your site

```html
<a href="about.html">About us</a>
```

## Link to a part of the same page

```html
<a href="#contact">Go to contact</a>

<h2 id="contact">Contact</h2>
```

## Email and phone links

```html
<a href="mailto:name@example.com">Send email</a>
<a href="tel:+1234567890">Call us</a>
```

## Absolute and relative paths

- Absolute: the full address, such as `https://www.example.com/page.html`.
- Relative: a path from the current file, such as `images/photo.jpg`.
