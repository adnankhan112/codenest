---
title: "Node.js Child Processes and Worker Threads"
sidebar_position: 35
---

# Node.js Child Processes and Worker Threads

## Child process

Run another program from Node.

```javascript
const { exec, spawn } = require("child_process");

exec("node -v", (err, stdout) => {
  if (err) return console.error(err);
  console.log("Node version:", stdout.trim());
});

const p = spawn("ping", ["localhost"]);
p.stdout.on("data", (d) => console.log(d.toString()));
```

## Worker threads

Use them for heavy work, so the main thread stays free.

```javascript
const { Worker, isMainThread, parentPort, workerData } = require("worker_threads");

if (isMainThread) {
  const worker = new Worker(__filename, { workerData: 40 });
  worker.on("message", (result) => console.log("Result:", result));
} else {
  function fib(n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
  parentPort.postMessage(fib(workerData));
}
```

## Cluster

The `cluster` module starts many copies of your server (one per CPU core) to use the whole processor.
