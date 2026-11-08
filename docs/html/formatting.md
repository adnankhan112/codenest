---
title: HTML Text Formatting
sidebar_position: 9
---

# HTML Text Formatting

HTML has elements that change how text looks and what it means.

| Element | Meaning |
| --- | --- |
| `<b>` | Bold text (no extra importance). |
| `<strong>` | Important text (usually bold). |
| `<i>` | Italic text (no extra importance). |
| `<em>` | Emphasized text (usually italic). |
| `<mark>` | Highlighted text. |
| `<small>` | Smaller text. |
| `<del>` | Deleted text (struck through). |
| `<ins>` | Inserted text (underlined). |
| `<sub>` | Subscript text. |
| `<sup>` | Superscript text. |

```html
<p>This is <strong>important</strong> and this is <em>emphasized</em>.</p>
<p>Water is H<sub>2</sub>O and 5<sup>2</sup> is 25.</p>
<p>My favorite color is <del>blue</del> <ins>green</ins>.</p>
```

## Tip

Prefer `strong` and `em` over `b` and `i` when the text is truly important, because they carry meaning for search engines and screen readers.
