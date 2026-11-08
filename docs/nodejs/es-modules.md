---
title: "Node.js ES Modules"
sidebar_position: 4
---

# Node.js ES Modules

ES modules use `import` and `export`. This is the modern standard.

## Turn it on

In `package.json` add:

```json
{ "type": "module" }
```

Or name your files with the `.mjs` extension.

**math.js**

```javascript
export function add(a, b) {
  return a + b;
}
export default function greet(name) {
  return `Hello, ${name}`;
}
```

**app.js**

```javascript
import greet, { add } from "./math.js";

console.log(greet("Ali"));
console.log(add(2, 3));
```

You must write the file extension (`.js`) in ES module imports.
