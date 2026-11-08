---
title: "Node.js File System"
sidebar_position: 8
---

# Node.js File System

```javascript
const fs = require("fs");

// Write and append
fs.writeFileSync("notes.txt", "Hello file\n");
fs.appendFileSync("notes.txt", "Second line\n");

// Read
const text = fs.readFileSync("notes.txt", "utf8");
console.log(text);

// Async with a callback (does not block)
fs.readFile("notes.txt", "utf8", (err, data) => {
  if (err) return console.error(err);
  console.log(data);
});

// Check, rename, delete
console.log(fs.existsSync("notes.txt"));
fs.renameSync("notes.txt", "old.txt");
fs.unlinkSync("old.txt");

// Folders
fs.mkdirSync("data", { recursive: true });
console.log(fs.readdirSync("."));
```

**Sync** versions stop the whole program until they finish. In servers, prefer the async versions.
