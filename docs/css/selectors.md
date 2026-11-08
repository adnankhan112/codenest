---
title: CSS Selectors
sidebar_position: 3
---

# CSS Selectors

Selectors choose which elements to style.

| Selector | Example | Selects |
| --- | --- | --- |
| Element | `p` | All paragraphs |
| Class | `.note` | Elements with class="note" |
| ID | `#title` | The element with id="title" |
| Universal | `*` | Every element |
| Group | `h1, p` | Both h1 and p |
| Descendant | `div p` | Paragraphs inside a div |
| Child | `div > p` | Paragraphs directly inside a div |
| Attribute | `input[type="text"]` | Text inputs |

```css
.note { color: green; }
#title { font-size: 40px; }
div p { margin: 10px; }
```
