---
title: "HTML Exercises"
sidebar_position: 91
---

# HTML Exercises

## Theory

You learn HTML by writing it. Reading is not enough. Each exercise below has three parts:

1. **Remember** is a short reminder of the idea.
2. **Task** is what you must write.
3. **Solution** is one correct answer. Try the task yourself first, then compare.

Create a folder on your computer, make a file called `practice.html` for each exercise, and open it in your browser to see the result. Your answer can look a little different from ours and still be correct.

## Practical

### 1. Basic structure

**Remember:** Every page has a doctype, an `html` element with a language, a `head`, and a `body`.

**Task:** Create a page with the title "My First Page" and a heading that says "Hello, World!".

**Solution:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My First Page</title>
</head>
<body>
  <h1>Hello, World!</h1>
</body>
</html>
```

### 2. Headings

**Remember:** `h1` is the most important heading and `h6` is the least. Do not skip levels.

**Task:** Write one `h1`, two `h2` headings, and one `h3` under the first `h2`.

**Solution:**

```html
<h1>Learning HTML</h1>
<h2>Basics</h2>
<h3>Tags</h3>
<h2>Next steps</h2>
```

### 3. Paragraphs and line breaks

**Remember:** Use `p` for paragraphs, `br` for a line break inside text, and `hr` for a line across the page.

**Task:** Write two paragraphs with a horizontal line between them. Then write an address on three lines using line breaks.

**Solution:**

```html
<p>This is the first paragraph.</p>
<hr>
<p>This is the second paragraph.</p>

<p>
  House 5, Street 10<br>
  Islamabad<br>
  Pakistan
</p>
```

### 4. Text formatting

**Remember:** `strong` means important, `em` means stressed, `mark` highlights, and `sub` and `sup` make small text below or above the line.

**Task:** Write a sentence with an important word, a stressed word, and a highlighted word. Then write the formula for water, H2O, with the 2 below the line.

**Solution:**

```html
<p>This is <strong>important</strong>, this is <em>stressed</em>, and this is <mark>highlighted</mark>.</p>
<p>Water is H<sub>2</sub>O.</p>
```

### 5. Comments

**Remember:** A comment is a note for you. The browser does not show it.

**Task:** Add a comment that says "Main heading". Then hide a paragraph by turning it into a comment.

**Solution:**

```html
<!-- Main heading -->
<h1>My page</h1>

<!-- <p>This paragraph is hidden.</p> -->
```

### 6. Links

**Remember:** The `a` element makes a link. Its `href` attribute holds the address.

**Task:** Make a link to MDN Web Docs that opens in a new tab. Then make a link that jumps to an element with the id `contact`. Then make an email link.

**Solution:**

```html
<a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer">MDN Web Docs</a>

<a href="#contact">Go to contact section</a>
<h2 id="contact">Contact</h2>

<a href="mailto:hello@example.com">Email us</a>
```

### 7. Images

**Remember:** The `img` element needs `src` (the file) and `alt` (a short description). Add `width` and `height` to avoid page jumps while loading.

**Task:** Show an image called `sunset.jpg` from a folder named `images`.

**Solution:**

```html
<img src="images/sunset.jpg" alt="An orange sunset over the sea" width="600" height="400">
```

### 8. Lists

**Remember:** `ul` is a bullet list, `ol` is a numbered list, and `li` is one item.

**Task:** Write a bullet list of three fruits and a numbered list of three steps. Put a nested list inside one fruit.

**Solution:**

```html
<ul>
  <li>Apple</li>
  <li>Mango
    <ul>
      <li>Sindhri</li>
      <li>Chaunsa</li>
    </ul>
  </li>
  <li>Banana</li>
</ul>

<ol>
  <li>Open the editor</li>
  <li>Write the code</li>
  <li>Save and test</li>
</ol>
```

### 9. Tables

**Remember:** A table has rows (`tr`), header cells (`th`), and data cells (`td`). Add a `caption` to describe it.

**Task:** Make a table with the columns Name and Age and two rows of data.

**Solution:**

```html
<table>
  <caption>Student ages</caption>
  <tr>
    <th scope="col">Name</th>
    <th scope="col">Age</th>
  </tr>
  <tr>
    <td>Sara</td>
    <td>20</td>
  </tr>
  <tr>
    <td>Ahmed</td>
    <td>22</td>
  </tr>
</table>
```

### 10. Forms

**Remember:** Every input needs a `label` connected by `for` and `id`.

**Task:** Make a form with a name field, an email field, a message box, and a submit button.

**Solution:**

```html
<form action="#" method="post">
  <label for="name">Name</label>
  <input type="text" id="name" name="name" required>

  <label for="email">Email</label>
  <input type="email" id="email" name="email" required>

  <label for="message">Message</label>
  <textarea id="message" name="message" rows="4"></textarea>

  <button type="submit">Send</button>
</form>
```

:::note
This form only practices the HTML. To receive the messages, you need a server or a form service.
:::

### 11. Div and span

**Remember:** `div` is a block element and starts on a new line. `span` is an inline element and stays inside a line of text.

**Task:** Put two paragraphs inside a `div`. Then wrap one word of a paragraph in a `span`.

**Solution:**

```html
<div>
  <p>First paragraph.</p>
  <p>Second paragraph with a <span>special</span> word.</p>
</div>
```

### 12. Classes and ids

**Remember:** A `class` can be used many times. An `id` must be used only once on a page.

**Task:** Give two paragraphs the class `note` and color them teal. Give one heading the id `title`.

**Solution:**

```html
<style>
  .note { color: #185c5a; }
</style>

<h1 id="title">My page</h1>
<p class="note">This is a note.</p>
<p class="note">This is another note.</p>
```

### 13. CSS in three ways

**Remember:** You can write CSS inline, inside a `style` element, or in an external file. An external file is best for real websites.

**Task:** Use an external file to make every paragraph teal.

**Solution:** In `practice.html`:

```html
<head>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <p>This paragraph is teal.</p>
</body>
```

In `style.css`:

```css
p {
  color: #185c5a;
}
```

### 14. Colors

**Remember:** You can write a color as a name, as a hex code, or as RGB.

**Task:** Give three boxes three different background colors, using a name, a hex code, and RGB.

**Solution:**

```html
<style>
  .a { background-color: tomato; padding: 1rem; }
  .b { background-color: #185c5a; color: #ffffff; padding: 1rem; }
  .c { background-color: rgb(34, 164, 157); color: #000000; padding: 1rem; }
</style>

<div class="a">Name color</div>
<div class="b">Hex color</div>
<div class="c">RGB color</div>
```

### 15. Buttons

**Remember:** Use the `button` element for buttons. Set `type="button"` when it is not a form submit button.

**Task:** Make a button that shows a message when it is clicked.

**Solution:**

```html
<button type="button" onclick="alert('Hello!')">Click me</button>
```

### 16. Iframes

**Remember:** An `iframe` shows another page inside your page. Always add a `title`.

**Task:** Embed a web page of your choice.

**Solution:**

```html
<iframe src="https://example.com" title="Example website" width="600" height="300"></iframe>
```

:::note
Some websites do not allow themselves to be shown inside an iframe. If yours stays empty, that is the reason.
:::

### 17. The head and meta tags

**Remember:** The `head` holds information about the page, such as the character set, viewport, and description.

**Task:** Write a complete `head` for a page called "My Blog".

**Solution:**

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Blog</title>
  <meta name="description" content="A simple blog about learning web development.">
</head>
```

### 18. Semantic layout

**Remember:** Use `header`, `nav`, `main`, `article`, `aside`, and `footer` to describe the parts of a page.

**Task:** Build the skeleton of a blog page using these elements.

**Solution:**

```html
<body>
  <header>
    <h1>My Blog</h1>
    <nav>
      <a href="#">Home</a>
      <a href="#">About</a>
    </nav>
  </header>
  <main>
    <article>
      <h2>My first post</h2>
      <p>Welcome to my blog.</p>
    </article>
    <aside>
      <h2>Links</h2>
    </aside>
  </main>
  <footer>
    <p>Copyright 2026</p>
  </footer>
</body>
```

### 19. Responsive layout

**Remember:** A responsive page works on small and large screens. Flexbox can wrap boxes onto new lines automatically.

**Task:** Make three boxes that sit side by side on a wide screen and stack on a phone.

**Solution:**

```html
<style>
  .boxes { display: flex; flex-wrap: wrap; gap: 1rem; }
  .box { flex: 1 1 250px; padding: 1rem; background-color: #e6f4f3; }
</style>

<div class="boxes">
  <div class="box">Box 1</div>
  <div class="box">Box 2</div>
  <div class="box">Box 3</div>
</div>
```

### 20. Audio and video

**Remember:** Use `video` and `audio` with the `controls` attribute so people can play and pause.

**Task:** Add a video and an audio player.

**Solution:**

```html
<video controls width="480">
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<audio controls>
  <source src="sound.mp3" type="audio/mpeg">
  Your browser does not support the audio tag.
</audio>
```

## Next step

When you finish these exercises, test yourself with the [HTML Quiz](./html-quiz.md).
