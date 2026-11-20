---
title: "Project: Build a Responsive Landing Page"
sidebar_position: 94
---

# Project: Build a Responsive Landing Page

## Theory

A **landing page** is a single web page that presents one idea, such as a product or a service, and invites the visitor to take one action. In this project you will build a landing page for a made-up study app called **LearnLoop**.

You will practice:

- A clean reset and `box-sizing: border-box`
- Custom properties (CSS variables)
- Flexbox for the menu and Grid for the cards
- A responsive layout that works on phones and computers
- Hover effects with transitions
- Dark mode and reduced motion
- Strong contrast and visible focus styles

### Plan before you code

Write down the plan first:

1. **Goal:** make visitors click the "Get started" button.
2. **Sections:** header with menu, hero (big welcome area), three feature cards, a call to action, and a footer.
3. **Colors:** one main teal color, white, and a light surface color.

### What you need

- A code editor such as Visual Studio Code
- A web browser
- A free GitHub account (only for the last step)

## Practical

### Step 1: Create the files

1. Create a folder called `learnloop`.
2. Open it in your code editor.
3. Create two empty files: `index.html` and `style.css`.

### Step 2: Write the HTML

Write this code in `index.html`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>LearnLoop | Study Smarter, Not Harder</title>
  <meta name="description" content="LearnLoop is a simple study app with short lessons, practice questions, and progress tracking.">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="#">LearnLoop</a>
      <nav aria-label="Main">
        <ul class="menu">
          <li><a href="#features">Features</a></li>
          <li><a href="#start">Get started</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main>
    <section class="hero">
      <div class="container">
        <h1>Study smarter, not harder</h1>
        <p>Short lessons, practice questions, and progress tracking, all in one simple app.</p>
        <a class="button" href="#start">Get started</a>
      </div>
    </section>

    <section class="features container" id="features">
      <h2>Why students love LearnLoop</h2>
      <div class="grid">
        <article class="card">
          <h3>Short lessons</h3>
          <p>Learn one idea at a time in about five minutes.</p>
        </article>
        <article class="card">
          <h3>Practice questions</h3>
          <p>Check what you learned right away and fix your mistakes.</p>
        </article>
        <article class="card">
          <h3>Track your progress</h3>
          <p>See how much you have learned each week.</p>
        </article>
      </div>
    </section>

    <section class="cta" id="start">
      <div class="container">
        <h2>Ready to begin?</h2>
        <p>Join thousands of students and start your first lesson today.</p>
        <a class="button" href="#">Create a free account</a>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">
      <p>&copy; 2026 LearnLoop. All rights reserved.</p>
    </div>
  </footer>
</body>
</html>
```

### Step 3: Write the CSS

Write this code in `style.css`.

```css
/* 1. Variables */
:root {
  --brand: #185c5a;
  --brand-light: #1b7a76;
  --heading: #185c5a;
  --text: #1f2933;
  --bg: #ffffff;
  --surface: #f1f5f4;
  --focus: #0b5cad;
  --radius: 12px;
}

@media (prefers-color-scheme: dark) {
  :root {
    --heading: #7fd6d0;
    --text: #e8f3f2;
    --bg: #0f1f1e;
    --surface: #162a28;
    --focus: #ffbf47;
  }
}

/* 2. Reset */
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.6;
  color: var(--text);
  background-color: var(--bg);
}

img {
  max-width: 100%;
  height: auto;
}

/* 3. Layout helper */
.container {
  width: min(100% - 2rem, 1000px);
  margin-inline: auto;
}

/* 4. Header */
.site-header {
  background-color: var(--brand);
  color: #ffffff;
}

.header-inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-block: 1rem;
}

.brand {
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: bold;
  text-decoration: none;
}

.menu {
  display: flex;
  gap: 1.25rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.menu a {
  color: #ffffff;
  text-decoration: none;
}

.menu a:hover {
  text-decoration: underline;
}

/* 5. Hero */
.hero {
  padding-block: clamp(3rem, 10vw, 6rem);
  text-align: center;
  color: #ffffff;
  background: linear-gradient(to right, var(--brand), var(--brand-light));
}

.hero h1 {
  margin-top: 0;
  font-size: clamp(2rem, 6vw, 3.25rem);
  line-height: 1.2;
}

.hero p {
  max-width: 40rem;
  margin-inline: auto;
  font-size: 1.125rem;
}

/* 6. Button */
.button {
  display: inline-block;
  min-height: 44px;
  padding: 0.65rem 1.5rem;
  color: var(--brand);
  font-weight: bold;
  text-decoration: none;
  background-color: #ffffff;
  border-radius: 999px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
}

/* 7. Features */
.features {
  padding-block: 3rem;
}

.features h2 {
  margin-top: 0;
  text-align: center;
  color: var(--heading);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}

.card {
  padding: 1.5rem;
  background-color: var(--surface);
  border-radius: var(--radius);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.card h3 {
  margin-top: 0;
  color: var(--heading);
}

/* 8. Call to action */
.cta {
  padding-block: 3rem;
  text-align: center;
  color: #ffffff;
  background-color: var(--brand);
}

.cta h2 {
  margin-top: 0;
}

/* 9. Footer */
.site-footer {
  padding-block: 1.5rem;
  text-align: center;
  background-color: var(--surface);
}

.site-footer p {
  margin: 0;
}

/* 10. Keyboard focus */
a:focus-visible {
  outline: 3px solid var(--focus);
  outline-offset: 3px;
}

.site-header a:focus-visible,
.hero a:focus-visible,
.cta a:focus-visible {
  outline-color: #ffffff;
}

/* 11. Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .button,
  .card {
    transition: none;
  }

  .button:hover,
  .card:hover {
    transform: none;
  }
}
```

Let us understand the important parts:

- **Variables:** colors and the corner radius are defined once in `:root`. The dark mode block only changes the values, so every part of the page updates by itself.
- **`.container`:** `min(100% - 2rem, 1000px)` keeps the content at most 1000 pixels wide, with space on small screens. `margin-inline: auto` centers it.
- **Hero:** `clamp()` makes the spacing and heading size fit every screen without a media query.
- **Grid:** `repeat(auto-fit, minmax(220px, 1fr))` makes cards that rearrange themselves. On a phone you see one column, and on a computer you see three.
- **Gradient:** the gradient goes from `#185c5a` to `#1b7a76`. Both colors are dark enough for white text to be easy to read.
- **Focus and motion:** keyboard users get a clear outline, and people who prefer less motion do not see the hover movement.

### Step 4: Test on your computer

1. Double-click `index.html` to open it in your browser.
2. Make the browser window narrow and wide. The cards should move from three columns to one.
3. Hover over the button and the cards. They should lift smoothly.
4. Press the **Tab** key. You should see a clear outline move through the links.
5. Change your computer to dark mode, then refresh. The colors should change.

### Step 5: Check the quality

- Open Chrome DevTools (press F12), choose **Lighthouse**, and run a report. Try to get a high score for Accessibility, Best Practices, and SEO.
- Zoom the page to 200 percent (Ctrl and the plus key). Nothing should be cut off.

### Step 6: Put it online

Follow the same steps you used for your portfolio project:

1. Create a new public repository on GitHub, for example `learnloop`.
2. Upload `index.html` and `style.css`, then commit.
3. Open **Settings**, then **Pages**. Under **Build and deployment**, set **Source** to **Deploy from a branch**, choose the branch **main** and the folder **/ (root)**, and save.
4. Wait one or two minutes. Your site will be at `https://YOUR-USERNAME.github.io/learnloop/`.

### Challenges

1. Change the brand color to another color and check that the white text is still easy to read.
2. Add a fourth feature card.
3. Add a "Contact" section with an email link.
4. Use `:has()` to give a card without a heading a different look. Check browser support on MDN first.
5. Use a container query so a card shows its content in a row when it is wide.

## Summary

- You built a full responsive page using variables, Flexbox, Grid, `clamp()`, and media features.
- You made it accessible with strong contrast, focus styles, dark mode, and reduced motion.
- You published it so anyone can see it.
