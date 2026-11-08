---
title: "Node.js async and await"
sidebar_position: 16
---

# Node.js async and await

`async` and `await` let you write asynchronous code that looks like normal code.

```javascript
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  try {
    console.log("Start");
    await wait(1000);
    console.log("After 1 second");

    const [a, b] = await Promise.all([getUser(1), getUser(2)]);   // run together
    console.log(a.name, b.name);
  } catch (err) {
    console.error("Error:", err.message);
  }
}

main();
```

- `await` can only be used inside an `async` function (or at the top level of an ES module).
- An `async` function always returns a promise.
- Use `Promise.all` when tasks do not depend on each other. It is faster.
