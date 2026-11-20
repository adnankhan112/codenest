---
title: "Project: Build Your First Website"
sidebar_position: 94
---

# Project: Build Your First Website

## Theory

In this project you will build a small personal portfolio website **from zero to live**. At the end, anyone in the world can open it with a link.

You will use everything you learned: page structure, semantic elements, links, lists, CSS, responsive layout, accessibility, and SEO.

### What you will build

A one-page website with these parts:

- A header with your name and a menu
- A welcome section
- An "About me" section
- A "Projects" section with cards
- A "Contact" section
- A footer

### Plan before you code

Professional developers plan first. Write down:

1. **Who is it for?** For example, people who want to hire or contact you.
2. **What is the goal?** For example, to show who you are and how to reach you.
3. **What sections do you need?** Use the list above.

### What you need

- A computer
- A code editor such as Visual Studio Code (free)
- A web browser
- A free GitHub account, which you will use at the end to put your site online

## Practical

### Step 1: Create the project folder

1. Create a new folder called `my-portfolio`.
2. Open this folder in your code editor.
3. Create two empty files inside it: `index.html` and `style.css`.

:::warning
The home page file must be named `index.html`, in small letters. Web servers look for this exact name first. On Windows, make sure the file is not secretly named `index.html.txt`. You can turn on "File name extensions" in File Explorer to check.
:::

### Step 2: Write the HTML

Open `index.html` and write this code. Replace "Your Name" and the text with your own.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Name | Web Developer Portfolio</title>
  <meta name="description" content="Portfolio of Your Name, a beginner web developer who builds simple, accessible websites with HTML and CSS.">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <a class="skip-link" href="#main">Skip to main content</a>

  <header>
    <p class="logo">Your Name</p>
    <nav aria-label="Main">
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main id="main">
    <section class="hero">
      <h1>Hi, I am Your Name. I build simple websites.</h1>
      <p>I am learning web development and I enjoy making clear, fast, and accessible pages.</p>
      <a class="button" href="#projects">See my work</a>
    </section>

    <section id="about">
      <h2>About me</h2>
      <p>I am a student who loves technology. I am learning HTML, CSS, and JavaScript, and I build a little more every week.</p>
      <ul>
        <li>I write clean, simple code.</li>
        <li>I care about accessibility.</li>
        <li>I enjoy solving problems.</li>
      </ul>
    </section>

    <section id="projects">
      <h2>Projects</h2>
      <div class="cards">
        <article class="card">
          <h3>Recipe page</h3>
          <p>A simple page with a list of ingredients and steps.</p>
        </article>
        <article class="card">
          <h3>Class timetable</h3>
          <p>A table that shows my weekly lessons.</p>
        </article>
        <article class="card">
          <h3>Contact form</h3>
          <p>A form with labels and clear buttons.</p>
        </article>
      </div>
    </section>

    <section id="contact">
      <h2>Contact</h2>
      <p>Send me an email at <a href="mailto:yourname@example.com">yourname@example.com</a>.</p>
    </section>
  </main>

  <footer>
    <p>&copy; 2026 Your Name. All rights reserved.</p>
  </footer>
</body>
</html>
```

Let us understand the important parts:

- The `skip-link` helps keyboard users jump past the menu.
- `header`, `nav`, `main`, `section`, `article`, and `footer` give the page a clear meaning.
- There is one `h1`, then `h2` for sections and `h3` for cards.
- The `title` and meta description help search engines.
- `&copy;` shows the copyright symbol.

### Step 3: Write the CSS

Open `style.css` and write this code.

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.6;
  color: #1f2933;
  background-color: #ffffff;
}

header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background-color: #185c5a;
  color: #ffffff;
}

.logo {
  margin: 0;
  font-size: 1.25rem;
  font-weight: bold;
}

nav ul {
  display: flex;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

nav a {
  color: #ffffff;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}

main {
  max-width: 900px;
  margin: 0 auto;
  padding: 1rem 1.5rem 3rem;
}

section {
  margin-top: 2.5rem;
}

.hero {
  padding: 2rem 0;
}

.button {
  display: inline-block;
  padding: 0.6rem 1.2rem;
  background-color: #185c5a;
  color: #ffffff;
  border-radius: 6px;
  text-decoration: none;
}

.button:hover {
  background-color: #0f4543;
}

a:focus-visible {
  outline: 3px solid #0b5cad;
  outline-offset: 2px;
}

header a:focus-visible {
  outline-color: #ffffff;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
}

.card {
  border: 1px solid #d0d7de;
  border-radius: 8px;
  padding: 1rem;
}

footer {
  text-align: center;
  padding: 1.5rem;
  background-color: #f1f5f4;
}

.skip-link {
  position: absolute;
  left: -999px;
  top: 0;
  padding: 0.5rem 1rem;
  background-color: #ffffff;
  color: #185c5a;
}

.skip-link:focus {
  left: 0;
  z-index: 10;
}
```

What the important parts do:

- `display: flex` and `display: grid` build the layout.
- `repeat(auto-fit, minmax(240px, 1fr))` makes the cards fit any screen size, so the page is responsive without extra code.
- The dark teal background with white text has strong contrast, which is good for accessibility.
- The skip link stays hidden until a keyboard user focuses it.

### Step 4: Test on your computer

1. Double-click `index.html` to open it in your browser.
2. Make the browser window narrow and wide. The cards should rearrange.
3. Press the **Tab** key. You should see a focus outline move through the links.
4. Click each menu link. The page should jump to each section.

### Step 5: Check quality

- Open Chrome DevTools (press F12), choose the **Lighthouse** tab, and run a report. Try to get a high score for Accessibility and SEO.
- Paste your HTML into the free [W3C Markup Validator](https://validator.w3.org/) to find mistakes.

Fix anything that is reported, then test again.

### Step 6: Put your website online with GitHub Pages

1. Go to [github.com](https://github.com) and sign in. Create a free account if you do not have one.
2. Click the **+** button at the top right and choose **New repository**.
3. Name it `my-portfolio`, choose **Public**, and click **Create repository**.
4. On the new repository page, click **uploading an existing file**.
5. Drag `index.html` and `style.css` into the page, then click **Commit changes**.
6. Open the repository **Settings**, then choose **Pages** in the left menu.
7. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
8. Choose the branch **main** and the folder **/ (root)**, then click **Save**.
9. Wait one or two minutes and refresh the page. GitHub will show your live address.

Your website will be at an address like this, with your own GitHub username:

```
https://YOUR-USERNAME.github.io/my-portfolio/
```

Open that link on your phone too and send it to a friend.

### Step 7: Update your site later

When you change a file, upload the new version to the repository again and commit it. GitHub Pages updates your site after a short wait.

### Challenges

1. Add a photo of yourself with good alt text, width, and height.
2. Add a fourth project card.
3. Change the colors to your favorite color, and check that the contrast is still strong.
4. Add a second page called `about.html` and link to it from the menu.
5. Add Open Graph tags so your link looks good when shared.

## Summary

- You planned, wrote, tested, and published a real website.
- You used semantic HTML, CSS Flexbox and Grid, and a responsive layout.
- You added accessibility and SEO basics from the start.
- You can now update your site any time and show it to the world.

Next, avoid the usual traps by reading [Common HTML Mistakes](./common-mistakes.md).
