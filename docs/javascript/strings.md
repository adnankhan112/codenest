---
title: JavaScript Strings
sidebar_position: 8
---

# JavaScript Strings

```javascript
let text = "Hello World";

console.log(text.length);          // 11
console.log(text.toUpperCase());   // HELLO WORLD
console.log(text.toLowerCase());   // hello world
console.log(text.slice(0, 5));     // Hello
console.log(text.replace("World", "JS")); // Hello JS
console.log(text.includes("World"));      // true
console.log(text.split(" "));      // ["Hello", "World"]
console.log("  hi  ".trim());      // "hi"
```

## Template literals

```javascript
let name = "Ali";
let age = 20;
console.log(`My name is ${name} and I am ${age}.`);
```
