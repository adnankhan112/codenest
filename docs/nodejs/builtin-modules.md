---
title: "Node.js Built-in Modules: path and os"
sidebar_position: 7
---

# Node.js Built-in Modules: path and os

Node has many ready tools. You do not need to install them.

## path

```javascript
const path = require("path");

console.log(path.join("folder", "file.txt"));       // folder/file.txt
console.log(path.basename("/a/b/notes.txt"));       // notes.txt
console.log(path.extname("notes.txt"));             // .txt
console.log(path.dirname("/a/b/notes.txt"));        // /a/b
console.log(path.resolve("app.js"));                // full path
```

## os

```javascript
const os = require("os");

console.log(os.platform());                // win32, linux, darwin
console.log(os.cpus().length);             // number of CPU cores
console.log(os.totalmem() / 1024 ** 3);    // total memory in GB
console.log(os.homedir());
```

## util

```javascript
const util = require("util");
const wait = util.promisify(setTimeout);
wait(1000).then(() => console.log("1 second passed"));
```
