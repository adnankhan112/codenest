---
title: JavaScript Scope
sidebar_position: 15
---

# JavaScript Scope

Scope decides where a variable can be used.

```javascript
let globalVar = "I am global";

function test() {
  let localVar = "I am local";
  console.log(globalVar); // works
  console.log(localVar);  // works
}

test();
// console.log(localVar); // error: not defined here
```

## Block scope

```javascript
if (true) {
  let inside = 1;
  const alsoInside = 2;
}
// inside and alsoInside do not exist here
```

Variables declared with `let` and `const` live only inside their block.
