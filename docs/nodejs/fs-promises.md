---
title: "Node.js fs with Promises"
sidebar_position: 9
---

# Node.js fs with Promises

```javascript
const fs = require("fs/promises");

async function main() {
  try {
    await fs.writeFile("data.json", JSON.stringify({ name: "Ali" }, null, 2));
    const text = await fs.readFile("data.json", "utf8");
    const obj = JSON.parse(text);
    console.log(obj.name);

    const files = await fs.readdir(".");
    console.log(files);

    await fs.unlink("data.json");
  } catch (err) {
    console.error("Error:", err.message);
  }
}

main();
```

This is the best style for most programs: no callbacks, and errors are caught with `try` and `catch`.
