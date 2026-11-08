---
title: "Node.js Event Loop"
sidebar_position: 17
---

# Node.js Event Loop

JavaScript runs on **one thread**, but Node can still do many things at once. The **event loop** makes this possible.

## How it works (simple idea)

1. Your code runs line by line.
2. Slow jobs (files, network, timers) are handed to the system.
3. When a job finishes, its callback waits in a queue.
4. When your code is free, the event loop picks callbacks from the queue and runs them.

## See it

```javascript
console.log("1 start");

setTimeout(() => console.log("4 timeout"), 0);

Promise.resolve().then(() => console.log("3 promise"));

process.nextTick(() => console.log("2 nextTick"));

console.log("1 end");
```

Output order: `1 start`, `1 end`, `2 nextTick`, `3 promise`, `4 timeout`.

## Important rule

Never block the event loop with a long, heavy loop. The whole server will freeze. Use worker threads for heavy work.
