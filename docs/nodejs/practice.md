---
title: "Node.js Practice Questions with Answers"
sidebar_position: 42
---

# Node.js Practice Questions with Answers

Try each question first. Then compare with the answer.

**1. Print "Hello, Node!" to the console.**

```javascript
console.log("Hello, Node!");
```

**2. Write a function in a module and use it in another file.**

```javascript
// greet.js
module.exports = (name) => `Hello, ${name}`;

// app.js
const greet = require("./greet");
console.log(greet("Ali"));
```

**3. Write text to a file and read it back.**

```javascript
const fs = require("fs");
fs.writeFileSync("a.txt", "Hello");
console.log(fs.readFileSync("a.txt", "utf8"));
```

**4. Count the words in a text file.**

```javascript
const fs = require("fs");
const words = fs.readFileSync("a.txt", "utf8").trim().split(/\s+/);
console.log(words.length);
```

**5. Create an HTTP server that answers "Welcome".**

```javascript
require("http").createServer((req, res) => res.end("Welcome")).listen(3000);
```

**6. Make a promise that resolves after 2 seconds, and use `await`.**

```javascript
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
(async () => {
  await wait(2000);
  console.log("2 seconds passed");
})();
```

**7. Make an Express route that returns JSON.**

```javascript
const app = require("express")();
app.get("/hello", (req, res) => res.json({ message: "Hello" }));
app.listen(3000);
```

**8. Make a route with a parameter: `/square/5` returns 25.**

```javascript
app.get("/square/:n", (req, res) => {
  const n = Number(req.params.n);
  res.json({ result: n * n });
});
```

**9. Write middleware that logs the time of every request.**

```javascript
app.use((req, res, next) => {
  console.log(new Date().toISOString(), req.method, req.url);
  next();
});
```

**10. Return a 404 JSON message for unknown routes.**

```javascript
app.use((req, res) => res.status(404).json({ error: "Not found" }));
```

**11. Read all file names in a folder.**

```javascript
const fs = require("fs/promises");
fs.readdir(".").then(console.log);
```

**12. Use an EventEmitter to send a "welcome" event.**

```javascript
const EventEmitter = require("events");
const e = new EventEmitter();
e.on("welcome", (name) => console.log("Welcome " + name));
e.emit("welcome", "Ali");
```

**13. Read MySQL data with `mysql2`.**

```javascript
const [rows] = await pool.execute("SELECT * FROM students");
console.log(rows);
```

**14. Hash a password with bcrypt and check it.**

```javascript
const bcrypt = require("bcrypt");
const hash = await bcrypt.hash("secret", 10);
console.log(await bcrypt.compare("secret", hash));   // true
```

## Project ideas

1. A notes app with an API and a web page.
2. A URL shortener.
3. A live chat room with Socket.io.
4. A blog API with login (JWT) and MySQL.
5. A command line tool that renames many files.
