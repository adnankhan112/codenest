---
title: "Modern HTML"
sidebar_position: 90
---

# Modern HTML

## Theory

### HTML is a living standard

HTML (HyperText Markup Language) is the language that gives a web page its structure. Years ago, HTML had numbered versions such as HTML 4 and HTML5. Today it does not. HTML is now a **living standard**, which means it is updated step by step and is not released as a new version number.

The word "HTML5" is still used as a nickname for modern HTML. If you see it in a tutorial, it simply means "HTML with the newer features".

:::tip
Browsers add new features at different speeds. Before you use a new feature, search for it on [MDN Web Docs](https://developer.mozilla.org) and check its browser support table.
:::

### The doctype does not mean a version

Every page starts with this line:

```html
<!DOCTYPE html>
```

It does not choose a version of HTML. It only tells the browser to read your page in **standards mode**, which is the correct, modern way. Always write it exactly like this, on the first line.

### What a modern page looks like

A modern page always has a language, a character set, and a viewport setting.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Page</title>
</head>
<body>
  <h1>Hello, world</h1>
</body>
</html>
```

- `lang="en"` tells browsers and screen readers which language the page uses.
- `charset="UTF-8"` makes sure letters from every language show correctly.
- The `viewport` line makes the page fit properly on phones.

### Use semantic elements

A semantic element tells the browser (and search engines and screen readers) what its content means, not only how it looks.

| Element | Use it for |
| --- | --- |
| `header` | The top part of a page or section (logo, title, menu) |
| `nav` | A group of main navigation links |
| `main` | The main content of the page (use it once per page) |
| `section` | A group of related content with a heading |
| `article` | Content that makes sense on its own, such as a blog post |
| `aside` | Side content, such as related links |
| `footer` | The bottom part of a page or section |

### New and useful elements and attributes

**Details and summary** make a simple open and close box with no JavaScript.

```html
<details>
  <summary>What is HTML?</summary>
  <p>HTML is the language that gives a web page its structure.</p>
</details>
```

**Dialog** makes a pop-up window. It needs a little JavaScript to open and close.

```html
<dialog id="infoDialog">
  <p>This is a dialog box.</p>
  <button id="closeButton" type="button">Close</button>
</dialog>

<button id="openButton" type="button">Open dialog</button>

<script>
  const dialog = document.getElementById("infoDialog");
  document.getElementById("openButton").addEventListener("click", function () {
    dialog.showModal();
  });
  document.getElementById("closeButton").addEventListener("click", function () {
    dialog.close();
  });
</script>
```

**Picture** lets you give the browser different image files for different situations.

```html
<picture>
  <source srcset="photo-large.webp" media="(min-width: 800px)" type="image/webp">
  <img src="photo-small.jpg" alt="A mountain lake at sunrise" width="400" height="300">
</picture>
```

**Lazy loading** tells the browser to load an image only when the visitor scrolls close to it. This makes your page faster.

```html
<img src="team.jpg" alt="Our team at work" width="600" height="400" loading="lazy">
```

**Popover** makes a small floating box that opens when a button is clicked, with no JavaScript.

```html
<button popovertarget="helpBox">Help</button>
<div id="helpBox" popover>This is a popover message.</div>
```

**Better form fields.** Modern input types give you helpful keyboards on phones and simple built-in checks.

```html
<label for="email">Email</label>
<input type="email" id="email" name="email" required>

<label for="birthday">Birthday</label>
<input type="date" id="birthday" name="birthday">
```

### Old things you should stop using

Some elements and attributes are **obsolete**. They still work in many browsers, but you should not use them. Use CSS instead.

| Old (do not use) | Modern replacement |
| --- | --- |
| `font` | CSS properties such as `color` and `font-size` |
| `center` | CSS `text-align: center` |
| `big`, `strike`, `tt` | CSS, or `del` and `code` where they fit the meaning |
| `marquee` | CSS animation |
| `frame`, `frameset` | `iframe`, or a normal page layout |
| The `bgcolor` and `align` attributes | CSS `background-color` and `text-align` |
| Tables used for page layout | CSS Flexbox or Grid |

:::note
The elements `b` and `i` are still valid. Use `strong` when something is important and `em` when you want to stress a word. Use `b` and `i` only when you want a different look without extra meaning.
:::

## Practical

### Exercise: update an old page

Here is a page written in the old style. It has several problems.

```html
<html>
<head><title>My Page</title></head>
<body bgcolor="yellow">
<center><font size="5" color="blue">Welcome</font></center>
<img src="cat.jpg">
</body>
</html>
```

The problems are: there is no doctype, no `lang`, no charset, no viewport, the colors use old attributes, the text is not a real heading, and the image has no `alt` text.

Here is the modern version:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Page</title>
  <style>
    body {
      background-color: lightyellow;
      text-align: center;
    }
    h1 {
      color: blue;
      font-size: 2rem;
    }
  </style>
</head>
<body>
  <main>
    <h1>Welcome</h1>
    <img src="cat.jpg" alt="A grey cat sleeping on a sofa" width="400" height="300">
  </main>
</body>
</html>
```

### Your turn

1. Copy the modern version into a file named `modern.html` and open it in your browser.
2. Change the heading text and the background color.
3. Add a `details` box with a question and an answer below the image.
4. Add `loading="lazy"` to the image and explain in one sentence why it helps.

## Summary

- HTML is a living standard, not a numbered version.
- Always start with `<!DOCTYPE html>`, and add `lang`, charset, and viewport.
- Use semantic elements to give your content meaning.
- Use CSS for design and stop using obsolete elements.
- Check MDN before you use a new feature.
