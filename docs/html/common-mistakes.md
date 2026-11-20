---
title: "Common HTML Mistakes"
sidebar_position: 95
---

# Common HTML Mistakes

## Theory

Every beginner makes mistakes, and that is part of learning. The good news is that most mistakes repeat. If you know the common ones, you can avoid them or fix them fast.

Each mistake below has three parts: what goes **wrong**, how to **fix** it, and **why** it matters.

A helpful habit: when your page looks strange, check these mistakes first. Also paste your code into the free [W3C Markup Validator](https://validator.w3.org/) to find errors.

## Practical

### 1. Forgetting the doctype

**Wrong:**

```html
<html>
<head>
  <title>My page</title>
</head>
```

**Fix:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>My page</title>
</head>
```

**Why:** Without the doctype, the browser may use old "quirks mode" and show your page in unexpected ways.

### 2. Missing language, charset, or viewport

**Wrong:** The `head` has only a title.

**Fix:**

```html
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My page</title>
</head>
```

**Why:** Without charset, special letters can show as strange symbols. Without the viewport tag, phones show a tiny zoomed-out page. Without `lang`, screen readers may pronounce your text wrongly.

### 3. Tags that are not closed or not nested correctly

**Wrong:**

```html
<p>This is <strong>important</p></strong>
<ul>
  <li>One
  <li>Two
</ul>
```

**Fix:**

```html
<p>This is <strong>important</strong></p>
<ul>
  <li>One</li>
  <li>Two</li>
</ul>
```

**Why:** Tags must close in the reverse order they opened. Wrong nesting can break your layout in hard-to-find ways.

### 4. Missing alt text on images

**Wrong:**

```html
<img src="team.jpg">
```

**Fix:**

```html
<img src="team.jpg" alt="Our team smiling in the office" width="600" height="400">
```

**Why:** People who cannot see the image, and search engines, rely on the alt text. If the image is only decoration, use `alt=""`.

### 5. Wrong file names and paths

**Wrong:**

```html
<img src="C:\Users\Ali\Desktop\photo.jpg" alt="My photo">
<img src="My Photo.JPG" alt="My photo">
```

**Fix:**

```html
<img src="images/my-photo.jpg" alt="My photo">
```

**Why:** A path that starts with `C:\` works only on your own computer. On a real website, use a relative path such as `images/my-photo.jpg`. Use small letters, no spaces, and the same spelling as the real file. Many web servers, including GitHub Pages, treat `Photo.JPG` and `photo.jpg` as different files.

### 6. Using more than one id with the same name

**Wrong:**

```html
<p id="note">First</p>
<p id="note">Second</p>
```

**Fix:**

```html
<p class="note">First</p>
<p class="note">Second</p>
```

**Why:** An `id` must be unique on a page. Use a `class` when you need the same name many times.

### 7. Skipping heading levels or using headings for size

**Wrong:**

```html
<h1>My Website</h1>
<h4>Welcome</h4>
<h2 style="font-size: 12px">Small text</h2>
```

**Fix:**

```html
<h1>My Website</h1>
<h2>Welcome</h2>
<p class="small-text">Small text</p>
```

**Why:** Headings show the structure of your page. Screen readers and search engines use that structure. Change the size with CSS, not by choosing a different heading.

### 8. Using `br` for spacing

**Wrong:**

```html
<p>First paragraph.</p>
<br><br><br>
<p>Second paragraph.</p>
```

**Fix:**

```css
p {
  margin-bottom: 1.5rem;
}
```

**Why:** The `br` element is only for line breaks inside text, such as in an address or a poem. Use CSS margin and padding for space.

### 9. Using tables for page layout

**Wrong:** Putting the menu, content, and footer of a page inside table cells.

**Fix:** Use `header`, `nav`, `main`, and `footer`, and use CSS Flexbox or Grid to arrange them.

**Why:** Tables are for data in rows and columns. Layout tables confuse screen readers and do not adapt well to phones.

### 10. Using `div` for everything

**Wrong:**

```html
<div class="header">
  <div class="menu">...</div>
</div>
```

**Fix:**

```html
<header>
  <nav>...</nav>
</header>
```

**Why:** Semantic elements tell browsers, search engines, and screen readers what each part is.

### 11. Using obsolete elements and attributes

**Wrong:**

```html
<center><font color="red" size="5">Welcome</font></center>
<body bgcolor="yellow">
```

**Fix:**

```html
<h1 class="welcome">Welcome</h1>
```

```css
.welcome {
  color: red;
  font-size: 2rem;
  text-align: center;
}
body {
  background-color: lightyellow;
}
```

**Why:** These old tags are obsolete. Use CSS for all design.

### 12. Vague link text

**Wrong:**

```html
<a href="guide.html">Click here</a>
```

**Fix:**

```html
<a href="guide.html">Read the beginner HTML guide</a>
```

**Why:** Link text should make sense even when read alone.

### 13. Inputs without labels

**Wrong:**

```html
<input type="text" placeholder="Your name">
```

**Fix:**

```html
<label for="name">Your name</label>
<input type="text" id="name" name="name">
```

**Why:** A placeholder disappears when you type, and it is not a reliable label for screen readers. The label `for` value must match the input `id`.

### 14. Forgetting the button type

**Wrong:**

```html
<form>
  <button>Cancel</button>
</form>
```

**Fix:**

```html
<form>
  <button type="button">Cancel</button>
  <button type="submit">Send</button>
</form>
```

**Why:** Inside a form, a button with no type works as a submit button. You may send the form by accident.

### 15. Forgetting to save, or editing the wrong file

**Wrong:** You change your code, but the browser shows the old page.

**Fix:**

1. Save the file (Ctrl+S).
2. Refresh the browser. Press Ctrl+Shift+R to refresh and clear the old copy.
3. Check that you are editing the same file you opened in the browser.

**Why:** This simple problem wastes more time than almost any real bug.

### 16. Images without width and height

**Wrong:**

```html
<img src="banner.jpg" alt="Our shop">
```

**Fix:**

```html
<img src="banner.jpg" alt="Our shop" width="800" height="400">
```

**Why:** When the browser knows the size in advance, the page does not jump while images load.

### 17. Home page not named index.html

**Wrong:** The home page is called `Home.html` or `Index.html` and the website shows "404 Not Found".

**Fix:** Rename it to `index.html`, all in small letters.

**Why:** Web servers look for `index.html` by default, and on many servers the name is case sensitive.

### 18. Putting a block element inside a paragraph

**Wrong:**

```html
<p>
  Hello
  <div>World</div>
</p>
```

**Fix:**

```html
<p>Hello</p>
<div>World</div>
```

**Why:** A `p` cannot contain block elements such as `div`. The browser closes the paragraph early, and your layout changes in surprising ways.

## Quick checklist before you publish

- [ ] The page starts with `<!DOCTYPE html>` and has `lang`, charset, and viewport.
- [ ] All tags are closed and correctly nested.
- [ ] Every image has alt text, width, and height.
- [ ] Headings are in order, with one `h1`.
- [ ] Every input has a label.
- [ ] Links have clear text.
- [ ] No obsolete elements are used.
- [ ] File names are in small letters with no spaces, and the home page is `index.html`.
- [ ] The page passes the W3C Markup Validator.

## Summary

- Most mistakes are small, and they repeat. Learn the list and you will avoid them.
- Use semantic elements, clear labels, and good alt text from the start.
- Design with CSS, and structure with HTML.
- When something looks wrong, save, refresh, and validate.

You have now finished the new HTML chapters. Practice again with the [HTML Exercises](./html-exercises.md).
