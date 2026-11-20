---
title: "CSS Quiz"
sidebar_position: 92
---

# CSS Quiz

## Theory

A quiz shows you what you really know and what you still need to review. Answer each question on your own first. Write your answers on paper, such as `1-A`, `2-C`, and so on. Then check the **answer key** at the bottom of the page.

How to read your score:

- **22 to 25 correct:** Excellent. You are ready for the project.
- **16 to 21 correct:** Good. Review the topics of the questions you missed.
- **15 or fewer:** Read the chapters again and repeat the exercises. This is normal, and practice makes it easier.

## Practical

### Questions

**1. What does CSS stand for?**

- A. Computer Style Sheets
- B. Cascading Style Sheets
- C. Creative Style System
- D. Colorful Style Sheets

**2. How do you select an element with the class `note`?**

- A. `#note`
- B. `note`
- C. `.note`
- D. `*note`

**3. Which property changes the text color?**

- A. `text-color`
- B. `font-color`
- C. `color`
- D. `foreground`

**4. Which property changes the background color?**

- A. `background-color`
- B. `bgcolor`
- C. `color-background`
- D. `back-color`

**5. Which is the correct order of the box model, from inside to outside?**

- A. Content, margin, border, padding
- B. Content, padding, border, margin
- C. Padding, content, margin, border
- D. Margin, border, padding, content

**6. What does `box-sizing: border-box` do?**

- A. It adds a border to every box
- B. It makes the width include the padding and border
- C. It removes all margins
- D. It makes boxes round

**7. Which code centers a block with a fixed width horizontally?**

- A. `text-align: center`
- B. `margin: 0 auto`
- C. `float: center`
- D. `align: middle`

**8. Which value of `display` hides an element completely?**

- A. `hidden`
- B. `invisible`
- C. `none`
- D. `off`

**9. Which `display` value turns an element into a flex container?**

- A. `display: flex`
- B. `display: flexible`
- C. `display: box`
- D. `display: row`

**10. Which property sets the space between items in Flexbox or Grid?**

- A. `space`
- B. `gap`
- C. `spacing`
- D. `margin-between`

**11. Which code makes a grid with three equal columns?**

- A. `grid-columns: 3`
- B. `grid-template-columns: repeat(3, 1fr)`
- C. `columns: 3 equal`
- D. `display: columns(3)`

**12. What is `rem` based on?**

- A. The width of the parent
- B. The height of the screen
- C. The font size of the root element
- D. The width of the screen

**13. Which media query applies styles to screens at least 768 pixels wide?**

- A. `@media (min-width: 768px)`
- B. `@media (max-width: 768px)`
- C. `@media (width: min-768)`
- D. `@media screen: 768px`

**14. How do you read a custom property named `--brand`?**

- A. `$brand`
- B. `@brand`
- C. `var(--brand)`
- D. `get(--brand)`

**15. Which selector chooses an element while the mouse is over it?**

- A. `:over`
- B. `:mouse`
- C. `:point`
- D. `:hover`

**16. Which property makes a color change happen smoothly?**

- A. `smooth`
- B. `transition`
- C. `fade`
- D. `blend`

**17. Which rule is the most specific?**

- A. `p`
- B. `.note`
- C. `#intro`
- D. `div p`

**18. What is the purpose of `:focus-visible`?**

- A. It hides the focus outline
- B. It shows a focus style, mainly for keyboard users
- C. It makes an element invisible
- D. It zooms the page

**19. Which function sets a size with a minimum, a preferred value, and a maximum?**

- A. `range()`
- B. `between()`
- C. `limit()`
- D. `clamp()`

**20. Which media feature reads the visitor's dark mode setting?**

- A. `prefers-color-scheme`
- B. `dark-mode`
- C. `color-theme`
- D. `prefers-dark`

**21. Which feature lets you style a component based on the width of its parent box?**

- A. Media queries
- B. Container queries
- C. Viewport units
- D. Float

**22. Which code stops an image from becoming wider than its container?**

- A. `max-width: 100%`
- B. `min-width: 100%`
- C. `width: auto-fit`
- D. `overflow: image`

**23. Which `position` value lets you place an element inside a positioned parent using `top` and `right`?**

- A. `position: static`
- B. `position: absolute`
- C. `position: inline`
- D. `position: normal`

**24. What does the `@keyframes` rule do?**

- A. It adds keyboard shortcuts
- B. It describes the steps of an animation
- C. It sets the key colors of a page
- D. It locks a layout

**25. Which setting is best for people who get dizzy from motion?**

- A. `@media (prefers-reduced-motion: reduce)`
- B. `@media (motion: off)`
- C. `@media (animation: none)`
- D. `@media (dizzy: true)`

### Answer key

| Question | Answer | Why |
| --- | --- | --- |
| 1 | B | CSS means Cascading Style Sheets. |
| 2 | C | A class selector starts with a dot. |
| 3 | C | The `color` property sets text color. |
| 4 | A | `background-color` sets the background color. |
| 5 | B | The order is content, padding, border, margin. |
| 6 | B | With `border-box`, the width includes padding and border. |
| 7 | B | A block with a width and `margin: 0 auto` is centered. |
| 8 | C | `display: none` removes the element from the page. |
| 9 | A | `display: flex` creates a flex container. |
| 10 | B | The `gap` property sets space between items. |
| 11 | B | `repeat(3, 1fr)` makes three equal columns. |
| 12 | C | `rem` is relative to the root element font size. |
| 13 | A | `min-width: 768px` means "at least 768 pixels wide". |
| 14 | C | You read a custom property with `var()`. |
| 15 | D | The `:hover` pseudo-class applies while the mouse is over the element. |
| 16 | B | The `transition` property animates changes smoothly. |
| 17 | C | An id selector is more specific than a class or an element. |
| 18 | B | It shows the focus style when it is useful, such as for keyboard users. |
| 19 | D | `clamp()` takes a minimum, a preferred value, and a maximum. |
| 20 | A | `prefers-color-scheme` reads light or dark mode. |
| 21 | B | Container queries react to the size of a parent container. |
| 22 | A | `max-width: 100%` keeps an image inside its container. |
| 23 | B | An absolutely positioned element is placed relative to its closest positioned parent. |
| 24 | B | `@keyframes` describes the steps of an animation. |
| 25 | A | `prefers-reduced-motion: reduce` lets you remove or reduce animations. |

## Next step

Put what you learned into one real project: [Build a Responsive Landing Page](./css-project.md).
