---
title: "Node.js Streams and Buffers"
sidebar_position: 13
---

# Node.js Streams and Buffers

## Buffer

A buffer holds raw binary data.

```javascript
const buf = Buffer.from("Hello");
console.log(buf);                  // <Buffer 48 65 6c 6c 6f>
console.log(buf.toString());       // Hello
console.log(buf.toString("base64"));
```

## Streams

A stream processes data in small pieces. It is perfect for big files.

```javascript
const fs = require("fs");

const read = fs.createReadStream("big.txt", "utf8");
const write = fs.createWriteStream("copy.txt");

read.pipe(write);        // copy a file piece by piece

read.on("data", (chunk) => console.log("Got", chunk.length, "characters"));
read.on("end", () => console.log("Finished"));
```

Types of streams: **Readable**, **Writable**, **Duplex** and **Transform**.

Reading a 2 GB file with `readFile` would use 2 GB of memory. A stream uses very little.
