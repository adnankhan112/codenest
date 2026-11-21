---
title: "Accessibility and SEO with JavaScript"
sidebar_position: 92
---

# Accessibility and SEO with JavaScript

## Theory

### What is accessibility?

Accessibility means that everyone can use your website. This includes people who cannot use a mouse, people who use a screen reader (a tool that reads the page aloud), and people who need larger text. JavaScript can make a page better for these people, or it can break the page for them. Your job is to make sure it helps.

### Use real buttons and links

The most common mistake is to make a clickable `div`. A real `button` already works with the keyboard (Tab, Enter, and Space) and is announced correctly by screen readers. A `div` does none of this.

```html
<!-- Bad -->
<div class="btn" id="saveDiv">Save</div>

<!-- Good -->
<button type="button" id="saveButton">Save</button>
```

Use `button` for actions (save, open, close). Use `a` with an `href` for going to another page.

### Everything must work with the keyboard

Try this test: put your mouse away and use only the Tab key. Can you reach every button and link? Can you see which one is selected? If not, fix it.

:::warning
Never remove the focus outline with `outline: none` unless you add your own clear style in its place.
:::

### Tell screen readers what changed

When JavaScript changes the page, a screen reader user may not know. Two simple tools help.

**aria-expanded** tells whether a box is open or closed.

```html
<button type="button" id="menuButton" aria-expanded="false" aria-controls="menu">Menu</button>
<ul id="menu" hidden>
  <li><a href="/docs/html/intro">HTML</a></li>
  <li><a href="/docs/css/modern-css">CSS</a></li>
</ul>

<script>
  const menuButton = document.querySelector("#menuButton");
  const menu = document.querySelector("#menu");

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menu.hidden = isOpen;
  });
</script>
```

**aria-live** makes a screen reader read a message when its text changes.

```html
<p id="status" aria-live="polite"></p>

<script>
  document.querySelector("#status").textContent = "Your file was saved.";
</script>
```

### Manage focus

When you open a pop-up, the focus must move into it. When it closes, the focus must go back to the button that opened it. The built-in `dialog` element does this for you.

```javascript
const dialog = document.querySelector("#infoDialog");
dialog.showModal(); // focus moves inside, and Escape closes it
```

### Respect motion settings

Some people feel sick from animations. They can ask their device to reduce motion. You can check this setting in JavaScript.

```javascript
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduceMotion) {
  // run your animation here
}
```

### What is SEO?

SEO means Search Engine Optimization. It helps Google and other search engines understand your page, so they can show it to the right people.

### JavaScript and SEO

- **Important text should be in the HTML.** Search engines can run JavaScript, but it is slower and less sure. Do not hide your main content behind a script.
- **Use real links.** Write `a href="/page"`. A link that works only through a click event may not be followed.
- **Give every page its own title and description.**

```html
<title>Modern JavaScript Tutorial | CodeNest</title>
<meta name="description" content="Learn modern JavaScript step by step with easy examples and exercises.">
```

- **Use one `h1` per page** and put the other headings in a clear order (`h2`, then `h3`).
- **Page speed matters.** Slow pages rank lower and annoy visitors.

### Load scripts the right way

A normal script can stop the page from showing until it has loaded. Use `defer`.

```html
<script src="app.js" defer></script>
```

A script with `defer` loads while the page is being read and runs after the HTML is ready.

## Practical

### Exercise: make a toggle accessible

This code has three problems for keyboard and screen reader users.

```html
<div id="toggle">Show details</div>
<div id="details" style="display:none">Here are the details.</div>

<script>
  document.querySelector("#toggle").onclick = function () {
    var box = document.querySelector("#details");
    box.style.display = box.style.display === "none" ? "block" : "none";
  };
</script>
```

The problems are: the `div` cannot be reached with the Tab key, nothing tells a screen reader if the box is open, and the code uses `onclick` and `var`.

Here is the fixed version:

```html
<button type="button" id="toggle" aria-expanded="false" aria-controls="details">
  Show details
</button>
<div id="details" hidden>Here are the details.</div>

<script>
  const toggle = document.querySelector("#toggle");
  const details = document.querySelector("#details");

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    details.hidden = isOpen;
  });
</script>
```

### Your turn

1. Put the fixed version in a file and open it in your browser.
2. Use only the Tab and Enter keys to open and close the box.
3. Change the button text to "Hide details" when the box is open.
4. Add an `aria-live="polite"` paragraph that says "Details opened" or "Details closed".

## Summary

- Use `button` for actions and `a href` for links. Do not use a `div` for a button.
- Check that everything works with the keyboard, and keep the focus outline visible.
- Use `aria-expanded` and `aria-live` to tell screen readers what changed.
- Respect the reduced motion setting.
- Keep important text in the HTML, use real links, and give each page its own title and description.
- Load scripts with `defer`.
