---
title: "Node.js URL and Query Strings"
sidebar_position: 12
---

# Node.js URL and Query Strings

```javascript
const http = require("http");

http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  console.log(url.pathname);                       // /search
  console.log(url.searchParams.get("q"));          // value of ?q=...

  res.end("You searched for: " + url.searchParams.get("q"));
}).listen(3000);
```

Visit `http://localhost:3000/search?q=node`.

## Reading POST data

```javascript
let body = "";
req.on("data", (chunk) => (body += chunk));
req.on("end", () => {
  const data = JSON.parse(body);
  res.end("Got " + data.name);
});
```
