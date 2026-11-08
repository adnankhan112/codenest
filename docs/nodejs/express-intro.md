---
title: "Express.js Introduction"
sidebar_position: 19
---

# Express.js Introduction

Express is the most popular framework for Node.js. It makes servers short and easy.

## Install

```
npm init -y
npm install express
```

## First server

```javascript
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.get("/about", (req, res) => {
  res.json({ name: "CodeNest", year: 2026 });
});

app.listen(3000, () => console.log("Server on http://localhost:3000"));
```

Run with `node app.js` and open `http://localhost:3000`.
