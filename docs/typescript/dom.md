---
title: "TypeScript with the Browser (DOM)"
sidebar_position: 32
---

# TypeScript with the Browser (DOM)

## Theory

The **DOM** is the page that the browser builds from HTML. JavaScript can read and change it. TypeScript knows all DOM types, such as `HTMLInputElement` and `HTMLButtonElement`, so you get help and safety when you work with the page.

## Practical

**index.html**

```html
<input id="nameInput" placeholder="Your name">
<button id="btn">Say hello</button>
<p id="output"></p>
<script src="app.js"></script>
```

**app.ts**

```typescript
const input = document.getElementById("nameInput") as HTMLInputElement;
const button = document.getElementById("btn") as HTMLButtonElement;
const output = document.getElementById("output") as HTMLParagraphElement;

button.addEventListener("click", (event: MouseEvent) => {
  output.textContent = `Hello, ${input.value || "friend"}!`;
});
```

Compile with `npx tsc app.ts`, then open `index.html` in the browser.
