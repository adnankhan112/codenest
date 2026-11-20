---
title: "Common CSS Mistakes"
sidebar_position: 95
---

# Common CSS Mistakes

## Theory

Every beginner makes CSS mistakes, and that is part of learning. Most mistakes repeat, so if you know them you can avoid them or fix them fast.

Each mistake below has three parts: what goes **wrong**, how to **fix** it, and **why** it matters.

A helpful habit: when your page looks wrong, open the browser DevTools (press F12), click the element, and look at the **Styles** panel. It shows which rules apply and which are crossed out.

## Practical

### 1. A missing semicolon or bracket

**Wrong:**

```css
p {
  color: red
  font-size: 1.2rem;
}
```

**Fix:**

```css
p {
  color: red;
  font-size: 1.2rem;
}
```

**Why:** Each declaration must end with a semicolon. A missing one can break the line after it, and a missing closing bracket can break every rule that follows.

### 2. A typo in a property or value

**Wrong:**

```css
p {
  colour: red;
  text-align: centre;
}
```

**Fix:**

```css
p {
  color: red;
  text-align: center;
}
```

**Why:** CSS uses American spelling, and it ignores what it does not understand. It will not show an error, so the style just does not work.

### 3. The stylesheet is not linked, or the path is wrong

**Wrong:**

```html
<link rel="stylesheet" href="styles.css">
```

(when the file is really named `style.css`)

**Fix:**

```html
<link rel="stylesheet" href="style.css">
```

**Why:** If the file name or folder is wrong, none of your CSS loads. Check the **Network** tab in DevTools for a red "404" next to your CSS file. File names are also case sensitive on many servers.

### 4. Forgetting the dot or hash in a selector

**Wrong:**

```css
note {
  color: teal;
}
```

**Fix:**

```css
.note {
  color: teal;
}
```

**Why:** Without the dot, CSS looks for an element named `note`, which does not exist. Use a dot for classes and a hash for ids.

### 5. Using px for everything

**Wrong:**

```css
body {
  font-size: 14px;
}
```

**Fix:**

```css
body {
  font-size: 1rem;
}
```

**Why:** Pixel sizes ignore the text size that visitors choose in their browser. Use `rem` for text and for most spacing.

### 6. Forgetting box-sizing

**Wrong:**

```css
.box {
  width: 100%;
  padding: 2rem;
}
```

**Fix:**

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

.box {
  width: 100%;
  padding: 2rem;
}
```

**Why:** Without `border-box`, the padding is added on top of the width, so the box becomes wider than its parent and causes a sideways scrollbar.

### 7. Fighting specificity with !important

**Wrong:**

```css
.button {
  color: white !important;
}
.nav .button {
  color: black !important;
}
```

**Fix:** Make your selectors clear and simple, and put the rules in a sensible order.

```css
.button {
  color: white;
}
.nav .button {
  color: black;
}
```

**Why:** `!important` is a last resort. Once it appears everywhere, you can no longer predict which rule will win.

### 8. Centering with the wrong tool

**Wrong:**

```css
.box {
  text-align: center;
}
```

(when you wanted to center the box itself)

**Fix:**

```css
.box {
  width: 300px;
  margin: 0 auto;
}
```

**Why:** `text-align: center` centers the text inside a box. To center a block, give it a width and use `margin: 0 auto`, or use Flexbox:

```css
.wrapper {
  display: flex;
  justify-content: center;
}
```

### 9. Collapsing margins surprise

**Wrong:** Two paragraphs, each with `margin: 20px`, and you expect 40 pixels between them.

**Fix:** Know that vertical margins between neighbors merge into the larger one, so the gap is 20 pixels. Use `gap` in Flexbox or Grid, or set margin on one side only.

```css
.stack {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
```

**Why:** Collapsing margins confuse many beginners. Using `gap` avoids the problem.

### 10. Giving an element a fixed height

**Wrong:**

```css
.card {
  height: 150px;
}
```

**Fix:**

```css
.card {
  min-height: 150px;
}
```

**Why:** A fixed height makes the text spill out of the box when it is longer or when the screen is narrow. `min-height` lets the box grow.

### 11. Images that overflow

**Wrong:**

```css
img {
  width: 800px;
}
```

**Fix:**

```css
img {
  max-width: 100%;
  height: auto;
}
```

**Why:** A fixed width breaks the layout on small screens. `max-width: 100%` keeps the image inside its container.

### 12. Forgetting the viewport tag

**Wrong:** Your media queries do not seem to work on a phone.

**Fix:** Add this to the `head` of your HTML:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

**Why:** Without it, phones show a tiny zoomed-out version of the desktop page, so the media queries never match as you expect.

### 13. Media queries in the wrong order

**Wrong:**

```css
@media (min-width: 768px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
}

.grid { grid-template-columns: 1fr; }
```

**Fix:** Write the base style first and the media query after it.

```css
.grid { grid-template-columns: 1fr; }

@media (min-width: 768px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
}
```

**Why:** When two rules have the same specificity, the later one wins. The first example always ends up with one column.

### 14. Removing the focus outline

**Wrong:**

```css
button:focus {
  outline: none;
}
```

**Fix:**

```css
button:focus-visible {
  outline: 3px solid #0b5cad;
  outline-offset: 3px;
}
```

**Why:** Keyboard users cannot see where they are without a focus style.

### 15. Low contrast colors

**Wrong:**

```css
.note {
  color: #aaaaaa;
  background-color: #ffffff;
}
```

**Fix:**

```css
.note {
  color: #333333;
  background-color: #ffffff;
}
```

**Why:** Light gray on white is hard to read for many people. Aim for a contrast ratio of at least 4.5 to 1 for normal text.

### 16. Using display: none to hide text that screen readers need

**Wrong:**

```css
.label {
  display: none;
}
```

**Fix:** Use a visually hidden class when you want a text label that only screen readers read.

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

**Why:** `display: none` hides the element from everyone, including screen readers.

### 17. Changes are not showing in the browser

**Wrong:** You changed your CSS, but the page looks the same.

**Fix:**

1. Save the file (Ctrl+S).
2. Refresh the page with Ctrl+Shift+R to clear the old copy.
3. Check that you edited the same file that the page links to.

**Why:** This simple problem wastes more time than almost any real bug.

## Quick checklist before you publish

- [ ] Every declaration ends with a semicolon and every rule has a closing bracket.
- [ ] The stylesheet is linked and the file name is correct.
- [ ] `box-sizing: border-box` is set.
- [ ] Text uses `rem`, and images use `max-width: 100%`.
- [ ] There is a viewport tag in the HTML.
- [ ] Media queries come after the base styles.
- [ ] Every link and button shows a focus style.
- [ ] Text has strong contrast.
- [ ] You tested on a narrow screen and at 200 percent zoom.

## Summary

- Most CSS mistakes are small: a typo, a missing semicolon, or a wrong path.
- Use DevTools to see which rules apply and which are ignored.
- Use `rem`, `box-sizing: border-box`, `gap`, `min-height`, and `max-width: 100%` to avoid the most common layout problems.
- Keep your design accessible with strong contrast and visible focus styles.

You have now finished the new CSS chapters. Practice again with the [CSS Exercises](./css-exercises.md).
