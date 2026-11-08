---
title: "Node.js HTTP Server"
sidebar_position: 11
---

# Node.js HTTP Server

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);

  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Welcome to Node.js</h1>");
  } else if (req.url === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Hello API" }));
  } else {
    res.writeHead(404);
    res.end("Page not found");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
```

Run the file, then open `http://localhost:3000` in your browser. Press `Ctrl + C` to stop the server.
