---
title: HTML Semantic Elements
sidebar_position: 20
---

# HTML Semantic Elements

Semantic elements clearly describe their meaning to the browser, search engines and screen readers.

```html
<header>
  <h1>My Website</h1>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</header>

<main>
  <article>
    <h2>Article title</h2>
    <p>Article content.</p>
  </article>
  <aside>
    <p>Related links.</p>
  </aside>
</main>

<footer>
  <p>Copyright 2026</p>
</footer>
```

## Common semantic elements

| Element | Meaning |
| --- | --- |
| `header` | Introductory content or navigation. |
| `nav` | A group of navigation links. |
| `main` | The main content of the page. |
| `section` | A thematic group of content. |
| `article` | Independent content, such as a blog post. |
| `aside` | Side content related to the main content. |
| `footer` | Footer of a page or section. |
| `figure`, `figcaption` | An image or diagram with a caption. |

Using semantic elements instead of many `div` elements makes pages easier to understand and better for SEO and accessibility.
