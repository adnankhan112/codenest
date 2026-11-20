---
title: "CSS Exercises"
sidebar_position: 91
---

# CSS Exercises

## Theory

You learn CSS by writing it and seeing the result. Each exercise has three parts:

1. **Remember** is a short reminder of the idea.
2. **Task** is what you must write.
3. **Solution** is one correct answer. Try the task yourself first, then compare.

For each exercise, create a file `index.html` and a file `style.css` in the same folder. Link the CSS in the `head` of your HTML:

```html
<link rel="stylesheet" href="style.css">
```

Your answer may look different from ours and still be correct.

## Practical

### 1. Selectors

**Remember:** A selector chooses which elements to style. An element selector uses the tag name, a class selector starts with a dot, and an id selector starts with a hash.

**Task:** Make all `p` elements dark gray, the class `highlight` yellow, and the id `title` teal.

**HTML:**

```html
<h1 id="title">My page</h1>
<p>Normal text.</p>
<p class="highlight">Highlighted text.</p>
```

**Solution:**

```css
p {
  color: #333333;
}

.highlight {
  background-color: yellow;
}

#title {
  color: #185c5a;
}
```

### 2. Colors

**Remember:** A color can be a name, a hex code, RGB, or HSL.

**Task:** Give four boxes four backgrounds using a name, a hex code, `rgb()`, and `hsl()`.

**HTML:**

```html
<div class="a">Name</div>
<div class="b">Hex</div>
<div class="c">RGB</div>
<div class="d">HSL</div>
```

**Solution:**

```css
.a { background-color: tomato; }
.b { background-color: #185c5a; color: #ffffff; }
.c { background-color: rgb(34, 164, 157); color: #000000; }
.d { background-color: hsl(45, 100%, 70%); }
```

### 3. Text and fonts

**Remember:** Use `font-family`, `font-size`, `font-weight`, `line-height`, and `text-align` to style text.

**Task:** Style a paragraph with the Arial font, a size of 1.125rem, a line height of 1.7, and centered text.

**Solution:**

```css
p {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.125rem;
  line-height: 1.7;
  text-align: center;
}
```

### 4. The box model

**Remember:** Every element is a box made of content, padding, border, and margin.

**Task:** Make a box with 1rem of padding, a 2px solid teal border, and 1.5rem of space around it.

**HTML:**

```html
<div class="box">A box</div>
```

**Solution:**

```css
.box {
  padding: 1rem;
  border: 2px solid #185c5a;
  margin: 1.5rem;
}
```

### 5. box-sizing and centering

**Remember:** With `box-sizing: border-box`, the width includes the padding and border. A block with a set width and `margin: 0 auto` is centered.

**Task:** Make a 400 pixel wide box with padding that stays exactly 400 pixels wide, and center it on the page.

**Solution:**

```css
.box {
  box-sizing: border-box;
  width: 400px;
  padding: 1rem;
  border: 2px solid #185c5a;
  margin: 0 auto;
}
```

### 6. Borders and rounded corners

**Remember:** Use `border-radius` for rounded corners. A radius of 50 percent on a square makes a circle.

**Task:** Make a 100 by 100 pixel circle with a teal background.

**Solution:**

```css
.circle {
  width: 100px;
  height: 100px;
  background-color: #185c5a;
  border-radius: 50%;
}
```

### 7. Backgrounds

**Remember:** You can use a color, an image, or a gradient as a background.

**Task:** Give a section a gradient from dark teal to a lighter teal, from left to right.

**Solution:**

```css
.hero {
  background: linear-gradient(to right, #185c5a, #1b7a76);
  color: #ffffff;
  padding: 3rem 1rem;
}
```

### 8. Display

**Remember:** Block elements start on a new line. Inline elements stay in the line. `display: none` hides an element completely.

**Task:** Make three links in a navigation sit side by side as blocks with padding.

**HTML:**

```html
<nav>
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</nav>
```

**Solution:**

```css
nav a {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #185c5a;
  color: #ffffff;
  text-decoration: none;
}
```

### 9. Position

**Remember:** `position: relative` keeps an element in place and lets you move it. `position: absolute` places an element relative to its closest positioned parent.

**Task:** Put a small "New" badge in the top right corner of a card.

**HTML:**

```html
<div class="card">
  <span class="badge">New</span>
  <p>Card content</p>
</div>
```

**Solution:**

```css
.card {
  position: relative;
  padding: 2rem 1rem 1rem;
  border: 1px solid #cccccc;
}

.badge {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0.125rem 0.5rem;
  background-color: #185c5a;
  color: #ffffff;
  border-radius: 6px;
}
```

### 10. Flexbox

**Remember:** `display: flex` puts children in a row. Use `justify-content` for the main direction and `align-items` for the other direction.

**Task:** Make a header with a logo on the left and a menu on the right, both vertically centered.

**HTML:**

```html
<header class="top">
  <p class="logo">MySite</p>
  <nav>Menu</nav>
</header>
```

**Solution:**

```css
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}
```

### 11. Grid

**Remember:** `display: grid` with `grid-template-columns` makes columns.

**Task:** Make a gallery with three equal columns and a gap between the boxes.

**HTML:**

```html
<div class="gallery">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</div>
```

**Solution:**

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.gallery div {
  padding: 2rem;
  background-color: #e6f4f3;
  text-align: center;
}
```

### 12. Responsive design with a media query

**Remember:** A media query applies styles only when a condition is true. Mobile first means you write the phone layout first and add changes for wider screens.

**Task:** Show one column on phones and three columns on screens at least 768 pixels wide.

**Solution:**

```css
.gallery {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 768px) {
  .gallery {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### 13. Custom properties

**Remember:** Define a variable with two dashes and read it with `var()`.

**Task:** Store a brand color once and use it for a heading and a button.

**Solution:**

```css
:root {
  --brand: #185c5a;
}

h1 {
  color: var(--brand);
}

button {
  background-color: var(--brand);
  color: #ffffff;
  border: none;
  padding: 0.5rem 1rem;
}
```

### 14. Hover and transitions

**Remember:** `:hover` styles an element while the mouse is over it. `transition` makes the change smooth.

**Task:** Make a button change color smoothly when the mouse is over it.

**Solution:**

```css
button {
  background-color: #185c5a;
  color: #ffffff;
  border: none;
  padding: 0.5rem 1rem;
  transition: background-color 0.25s ease;
}

button:hover {
  background-color: #22a49d;
  color: #000000;
}
```

### 15. Pseudo-elements

**Remember:** `::before` and `::after` add decoration around an element. They need a `content` property.

**Task:** Add a small arrow symbol after every link inside a menu.

**Solution:**

```css
nav a::after {
  content: " \2192";
}
```

### 16. Units

**Remember:** `px` is a fixed size, `rem` is based on the root font size, `%` is relative to the parent, and `vw` is a part of the screen width.

**Task:** Make a section that is 80 percent as wide as its parent, with a heading sized in `rem`.

**Solution:**

```css
.section {
  width: 80%;
  margin: 0 auto;
}

.section h2 {
  font-size: 1.5rem;
}
```

### 17. Specificity

**Remember:** When two rules compete, the more specific selector wins. An id is stronger than a class, and a class is stronger than an element.

**Task:** Predict the color of the paragraph, then check in your browser.

**HTML:**

```html
<p id="intro" class="note">Hello</p>
```

```css
p { color: red; }
.note { color: blue; }
#intro { color: green; }
```

**Solution:** The paragraph is **green**, because the id selector is the most specific.

### 18. Animation with keyframes

**Remember:** `@keyframes` describes the steps, and the `animation` property plays them.

**Task:** Make a box fade in when the page loads.

**Solution:**

```css
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.box {
  animation: fade-in 1s ease;
}

@media (prefers-reduced-motion: reduce) {
  .box {
    animation: none;
  }
}
```

### 19. Dark mode

**Remember:** `prefers-color-scheme` reads the visitor's light or dark setting.

**Task:** Give the page a light theme by default and a dark theme for visitors who use dark mode.

**Solution:**

```css
:root {
  --bg: #ffffff;
  --text: #1f2933;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #0f1f1e;
    --text: #e8f3f2;
  }
}

body {
  background-color: var(--bg);
  color: var(--text);
}
```

### 20. Container query

**Remember:** A container query reacts to the width of a parent box instead of the whole screen.

**Task:** Show a card as a column by default and as a row when its container is at least 400 pixels wide.

**HTML:**

```html
<div class="card-wrapper">
  <article class="card">
    <h3>Title</h3>
    <p>Some text.</p>
  </article>
</div>
```

**Solution:**

```css
.card-wrapper {
  container-type: inline-size;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@container (min-width: 400px) {
  .card {
    flex-direction: row;
  }
}
```

## Next step

Test yourself with the [CSS Quiz](./css-quiz.md).
