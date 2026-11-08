---
title: "Node.js Debugging and Logging"
sidebar_position: 37
---

# Node.js Debugging and Logging

## console methods

```javascript
console.log("normal message");
console.error("error message");
console.warn("warning");
console.table([{ name: "Ali", marks: 85 }]);
console.time("loop");
// ... code ...
console.timeEnd("loop");
```

## The debugger

```
node --inspect app.js
```

Open `chrome://inspect` in Chrome. You can also use the VS Code debugger: click left of a line number to place a **breakpoint**, then press **F5**.

## Logging

For real apps use a logging package such as **winston** or **pino**.

```javascript
const pino = require("pino")();
pino.info("Server started");
pino.error({ err: "bad" }, "Something failed");
```

## Crash handlers

```javascript
process.on("uncaughtException", (err) => {
  console.error("Uncaught:", err);
  process.exit(1);
});
process.on("unhandledRejection", (reason) => {
  console.error("Unhandled promise:", reason);
});
```
