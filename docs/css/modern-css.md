---
title: "Modern CSS"
sidebar_position: 90
---

# Modern CSS

## Theory

CSS (Cascading Style Sheets) is the language that controls how a web page looks: colors, fonts, spacing, and layout. HTML builds the structure, and CSS makes it beautiful.

CSS keeps growing. In the last few years, browsers added powerful features that make pages easier to build and easier to keep clean. This page teaches the most useful modern features, step by step.

:::tip
Before you use a newer feature on a real website, search for it on [MDN Web Docs](https://developer.mozilla.org) and check the browser support table.
:::

### 1. A small modern reset

Browsers add their own default styles. A short reset gives you a clean start.

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  line-height: 1.6;
}

img,
video {
  max-width: 100%;
  height: auto;
}
```

- `box-sizing: border-box` means the width of a box already includes its padding and border. Without it, adding padding makes a box wider than you planned.
- `max-width: 100%` stops images from becoming wider than their container.

### 2. Custom properties (CSS variables)

A custom property stores a value once so you can reuse it everywhere. Its name starts with two dashes. You read it with `var()`.

```css
:root {
  --brand: #185c5a;
  --radius: 12px;
}

.button {
  background-color: var(--brand);
  border-radius: var(--radius);
}

.card {
  border: 2px solid var(--brand);
  border-radius: var(--radius);
}
```

If you change `--brand` in one place, the whole website changes. You can also give a fallback value: `var(--brand, teal)`.

### 3. Flexible sizes with rem and clamp()

The `rem` unit is based on the root font size, which is usually 16 pixels. So `1.5rem` is 24 pixels. Using `rem` for text respects the font size people choose in their browser.

The `clamp()` function takes three values: a smallest size, a preferred size, and a largest size. The result never goes below the first or above the last.

```css
h1 {
  font-size: clamp(1.75rem, 5vw, 3rem);
}
```

Here the heading grows with the screen width (`5vw` means 5 percent of the width), but it stays between `1.75rem` and `3rem`.

### 4. Layout: Flexbox and Grid

**Flexbox** arranges items in one direction, in a row or a column.

```css
.menu {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
}
```

**Grid** arranges items in rows and columns at the same time. This pattern makes cards that fit any screen with no media query:

```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}
```

It means: make as many columns as will fit, each at least 240 pixels wide, and share the leftover space equally.

### 5. Useful sizing helpers

```css
.container {
  width: min(100% - 2rem, 1000px);
  margin-inline: auto;
}

.video-box {
  aspect-ratio: 16 / 9;
}
```

- `min()` picks the smaller value. The container is never wider than 1000 pixels, and it keeps 1 rem of space on each side on small screens.
- `margin-inline: auto` centers the box horizontally. It is a **logical property**, which means it follows the writing direction of the language, so it also works for right-to-left languages such as Urdu.
- `aspect-ratio` keeps a box in a fixed shape, such as 16 by 9.

### 6. Container queries

A media query looks at the whole screen. A **container query** looks at the size of the box that holds a component. This makes components that adapt wherever you place them.

```css
.card-wrapper {
  container-type: inline-size;
}

.card {
  padding: 1rem;
}

@container (min-width: 400px) {
  .card {
    display: flex;
    gap: 1rem;
  }
}
```

### 7. The :has() selector

The `:has()` selector lets you style an element based on what is inside it. People often call it a "parent selector".

```css
.card:has(img) {
  padding: 0;
}

label:has(input:checked) {
  font-weight: bold;
}
```

The first rule removes padding only from cards that contain an image. The second makes a label bold when its checkbox is checked.

### 8. CSS nesting

You can write a rule inside another rule. This keeps related styles together.

```css
.card {
  padding: 1rem;
  background-color: #f1f5f4;

  & h3 {
    margin-top: 0;
  }

  &:hover {
    background-color: #e0ecea;
  }
}
```

The `&` symbol means "this selector". So `&:hover` means `.card:hover`.

### 9. Respect the user's settings

Visitors can tell their device what they prefer. CSS can read these choices.

```css
@media (prefers-color-scheme: dark) {
  :root {
    --bg: #0f1f1e;
    --text: #e8f3f2;
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

The first block gives a dark theme to people who use dark mode. The second stops animations for people who get dizzy from motion.

### 10. Focus styles for keyboard users

```css
a:focus-visible,
button:focus-visible {
  outline: 3px solid #0b5cad;
  outline-offset: 3px;
}
```

The `:focus-visible` selector shows the outline when it is useful, such as for keyboard users. Never remove the outline without adding a clear replacement.

## Practical

### Exercise: make an old stylesheet modern

Here is some old-style CSS:

```css
.card {
  width: 300px;
  background-color: #185c5a;
  color: #ffffff;
  border-radius: 12px;
  font-size: 16px;
}

.button {
  background-color: #185c5a;
  border-radius: 12px;
}
```

It repeats the same color and radius, uses fixed pixel sizes, and does not adapt to the screen. Here is a modern version:

```css
:root {
  --brand: #185c5a;
  --radius: 12px;
}

.card {
  width: min(100%, 300px);
  background-color: var(--brand);
  color: #ffffff;
  border-radius: var(--radius);
  font-size: 1rem;
}

.button {
  background-color: var(--brand);
  border-radius: var(--radius);
}
```

### Your turn

1. Create `modern.html` and `style.css`, and put a heading, a paragraph, and a button in the HTML.
2. Add the modern reset and a `:root` block with a brand color.
3. Use `clamp()` for the heading size.
4. Add a `:focus-visible` style for the button and test it with the Tab key.
5. Add a dark mode with `prefers-color-scheme`. To test it, change your computer's color mode between light and dark.

## Summary

- Start with a small reset and `box-sizing: border-box`.
- Use custom properties to avoid repeating values.
- Use `rem`, `clamp()`, and `min()` for flexible sizes.
- Use Flexbox for one direction and Grid for rows and columns.
- Use container queries for components, and `:has()` for smart selectors.
- Respect dark mode, reduced motion, and keyboard focus.
