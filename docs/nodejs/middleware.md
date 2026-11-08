---
title: "Express Middleware"
sidebar_position: 21
---

# Express Middleware

Middleware is a function that runs **between** the request and the response.

```javascript
const express = require("express");
const app = express();

// Runs for every request
app.use((req, res, next) => {
  console.log(req.method, req.url, new Date().toISOString());
  next();                          // go to the next step
});

// Built-in middleware
app.use(express.json());                          // read JSON bodies
app.use(express.urlencoded({ extended: true })); // read form data
app.use(express.static("public"));                // serve files

// Middleware for one route
function checkLogin(req, res, next) {
  if (req.headers.authorization) return next();
  res.status(401).send("Please log in");
}

app.get("/private", checkLogin, (req, res) => res.send("Secret page"));
```

Think of middleware as a line of workers. Each one checks or changes the request and passes it on with `next()`.
