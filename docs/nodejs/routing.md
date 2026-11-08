---
title: "Express Routing"
sidebar_position: 20
---

# Express Routing

Routing decides what happens for each address and method.

```javascript
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Home"));
app.post("/students", (req, res) => res.send("Create"));
app.put("/students/:id", (req, res) => res.send("Update " + req.params.id));
app.delete("/students/:id", (req, res) => res.send("Delete " + req.params.id));

// Route parameter
app.get("/users/:id", (req, res) => {
  res.send("User " + req.params.id);
});

// Query string: /search?q=node
app.get("/search", (req, res) => {
  res.send("Searching for " + req.query.q);
});

// 404 page (put it last)
app.use((req, res) => res.status(404).send("Not found"));
```

## Router (group routes in files)

```javascript
// routes/students.js
const router = require("express").Router();
router.get("/", (req, res) => res.send("All students"));
router.get("/:id", (req, res) => res.send("One student"));
module.exports = router;

// app.js
app.use("/students", require("./routes/students"));
```
