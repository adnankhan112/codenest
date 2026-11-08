---
title: "Node.js Modules (CommonJS)"
sidebar_position: 3
---

# Node.js Modules (CommonJS)

A module is a file with code you can reuse.

**math.js**

```javascript
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

module.exports = { add, multiply };
```

**app.js**

```javascript
const { add, multiply } = require("./math");

console.log(add(2, 3));         // 5
console.log(multiply(2, 3));    // 6
```

- `module.exports` shares code.
- `require()` loads a module.
- Use `./` for your own files. Built-in modules and npm packages have no `./`.
