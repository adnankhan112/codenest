---
title: "CSS Accessibility and Performance"
sidebar_position: 93
---

# CSS Accessibility and Performance

## Theory

A beautiful page is not enough. A good page must also be **easy to use for everyone** and **fast to load**. CSS has a big effect on both.

- **Accessibility** means people with different abilities and devices can use your page. This includes people with low vision, people who use only a keyboard, and people who are sensitive to motion.
- **Performance** means your page loads and responds quickly, even on a slow phone or a weak internet connection.

### Part 1: Accessibility with CSS

**1. Make text easy to read.**
Use enough contrast between the text color and the background. The WCAG AA standard asks for a contrast ratio of at least **4.5 to 1** for normal text and **3 to 1** for large text. Do not put light gray text on a white background.

```css
/* Weak contrast */
.note {
  color: #aaaaaa;
  background-color: #ffffff;
}

/* Strong contrast */
.note {
  color: #333333;
  background-color: #ffffff;
}
```

**2. Do not use color as the only signal.**
If an error is shown only by a red border, some people cannot see it. Add a message or an icon too.

**3. Use relative sizes for text.**
People change their browser text size. If you set text in `px`, you may ignore their choice. Use `rem` so the text follows their setting.

```css
body {
  font-size: 1rem;
  line-height: 1.6;
}
```

A line height of about 1.5 or more makes paragraphs easier to read.

**4. Never remove the focus outline without a replacement.**
Keyboard users need to see where they are.

```css
/* Bad: removes the outline for everyone */
a:focus {
  outline: none;
}

/* Good: a clear outline for keyboard users */
a:focus-visible,
button:focus-visible {
  outline: 3px solid #0b5cad;
  outline-offset: 3px;
}
```

**5. Make clickable things big enough.**
Small buttons are hard to tap on a phone. A common target is at least 44 by 44 pixels.

```css
button,
.button {
  min-height: 44px;
  padding: 0.5rem 1.25rem;
}
```

**6. Respect reduced motion.**
Some people feel sick when many things move on the screen. Honor their device setting.

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
}
```

**7. Support dark mode and light mode.**
Use custom properties so both modes stay readable.

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

**8. Know the difference between hiding methods.**

- `display: none` and `visibility: hidden` hide an element from **everyone**, including screen readers.
- A "visually hidden" class hides an element from the screen but still lets screen readers read it. This is useful for extra labels.

```css
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

```html
<button type="button">
  <span aria-hidden="true">X</span>
  <span class="visually-hidden">Close menu</span>
</button>
```

**9. Allow zooming and wrapping.**
People zoom the page to 200 percent. Your layout should still work. Let content wrap onto new lines and avoid fixed heights for text boxes.

```css
.card {
  min-height: 8rem;   /* grows if the text needs more space */
}
```

### Part 2: Performance with CSS

**1. Keep your CSS small and clean.**
Delete styles you no longer use. Fewer bytes load faster.

**2. Avoid long chains of imports.**
Each `@import` inside a CSS file makes the browser wait for another file. Link your files in the HTML instead, or combine them.

**3. Animate the cheap properties.**
Animating `transform` and `opacity` is smooth. Animating `width`, `height`, or `margin` makes the browser redo the layout, which can feel slow.

```css
/* Smooth */
.card:hover {
  transform: translateY(-4px);
}

/* Slower */
.card:hover {
  margin-top: -4px;
}
```

**4. Control image size with CSS and HTML together.**
Always set `width` and `height` in HTML, and use CSS to keep images inside their container. This prevents the page from jumping while images load.

```css
img {
  max-width: 100%;
  height: auto;
}
```

**5. Load fonts carefully.**
Each font file costs time. Use only the weights you need, and add `font-display: swap` so text shows right away with a backup font.

```css
@font-face {
  font-family: "MyFont";
  src: url("fonts/myfont.woff2") format("woff2");
  font-display: swap;
}
```

**6. Prefer simple selectors.**
Short selectors such as `.card` are easy to read and fast to match. Very long selectors such as `div div ul li a span` are hard to maintain.

**7. Let the build tool help.**
Tools such as Docusaurus combine and shrink your CSS automatically when you run the build command. This is called minification.

## Practical

### Exercise: fix a weak stylesheet

Here is a weak stylesheet:

```css
body {
  font-size: 14px;
  color: #bbbbbb;
}

a:focus {
  outline: none;
}

.button {
  padding: 2px 6px;
  transition: margin 0.5s;
}

.button:hover {
  margin-top: -3px;
}
```

The problems are: low contrast text, a fixed pixel text size, a removed focus outline, a tiny button, and an animation of `margin` with no reduced-motion rule.

Here is the improved version:

```css
body {
  font-size: 1rem;
  line-height: 1.6;
  color: #333333;
}

a:focus-visible,
.button:focus-visible {
  outline: 3px solid #0b5cad;
  outline-offset: 3px;
}

.button {
  min-height: 44px;
  padding: 0.5rem 1.25rem;
  transition: transform 0.25s ease;
}

.button:hover {
  transform: translateY(-3px);
}

@media (prefers-reduced-motion: reduce) {
  .button {
    transition: none;
  }

  .button:hover {
    transform: none;
  }
}
```

### Your turn: a checklist

Check your own stylesheet against this list.

**Accessibility**

- [ ] Text has strong contrast against its background.
- [ ] Text sizes use `rem`.
- [ ] Every link and button shows a clear focus style.
- [ ] Buttons are at least 44 pixels tall.
- [ ] Animations stop when `prefers-reduced-motion` is set.
- [ ] Information is never shown by color alone.
- [ ] The layout still works when you zoom to 200 percent.

**Performance**

- [ ] There is no unused CSS.
- [ ] There are no long `@import` chains.
- [ ] Animations use `transform` and `opacity`.
- [ ] Images have `width` and `height` in the HTML, and `max-width: 100%` in the CSS.
- [ ] Fonts use `font-display: swap`.

### Free tools to test

- **Chrome DevTools** (press F12): the Lighthouse tab checks Accessibility and Performance. The Elements tab shows contrast information when you inspect a color.
- **WebAIM Contrast Checker** is a free website where you type two colors and see the contrast ratio.
- **Zoom test:** press Ctrl and the plus key until the page is at 200 percent, then check that nothing is cut off.

## Summary

- Accessible CSS means strong contrast, relative text sizes, visible focus, big buttons, and respect for dark mode and reduced motion.
- Fast CSS means small files, simple selectors, cheap animations, and careful font loading.
- Good accessibility and good performance usually help every visitor, not only some.
