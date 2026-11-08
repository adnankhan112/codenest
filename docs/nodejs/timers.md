---
title: "Node.js Timers"
sidebar_position: 18
---

# Node.js Timers

```javascript
setTimeout(() => console.log("After 2 seconds"), 2000);

const id = setInterval(() => console.log("Every second"), 1000);
setTimeout(() => clearInterval(id), 5000);        // stop after 5 seconds

setImmediate(() => console.log("Runs after the current work"));

// Promise style
const { setTimeout: sleep } = require("timers/promises");
async function run() {
  await sleep(1000);
  console.log("Slept 1 second");
}
run();
```

- `setTimeout` runs once.
- `setInterval` repeats.
- `clearTimeout` and `clearInterval` stop them.
