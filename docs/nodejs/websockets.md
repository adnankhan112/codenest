---
title: "Node.js WebSockets and Real-Time Apps (Socket.io)"
sidebar_position: 34
---

# Node.js WebSockets and Real-Time Apps (Socket.io)

WebSockets keep a connection open, so the server and the browser can send messages to each other at any time. They are used for chat, live scores and notifications.

```
npm install express socket.io
```

**server.js**

```javascript
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);             // send to everyone
  });

  socket.on("disconnect", () => console.log("User left"));
});

server.listen(3000);
```

**public/index.html**

```html
<script src="/socket.io/socket.io.js"></script>
<script>
  const socket = io();
  socket.on("chat message", (msg) => console.log(msg));
  socket.emit("chat message", "Hello everyone!");
</script>
```
