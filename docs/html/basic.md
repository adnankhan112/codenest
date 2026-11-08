---
title: HTML Basic Structure
sidebar_position: 3
---

# HTML Basic Structure

Every HTML page follows the same basic structure.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Page Title</title>
  </head>
  <body>
    <h1>Main Heading</h1>
    <p>Some text.</p>
  </body>
</html>
```

## The parts

| Part | Purpose |
| --- | --- |
| `<!DOCTYPE html>` | Declares the document type (HTML5). |
| `<html lang="en">` | Root element. The `lang` attribute sets the page language. |
| `<head>` | Holds information about the page. It is not displayed. |
| `<meta charset="UTF-8">` | Sets the character encoding so text displays correctly. |
| `<title>` | The title shown in the browser tab. |
| `<body>` | Contains all visible content. |

## Note

HTML is not case sensitive, but lowercase tags are the standard and are recommended.
