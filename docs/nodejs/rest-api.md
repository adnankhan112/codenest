---
title: "Node.js REST API (CRUD)"
sidebar_position: 25
---

# Node.js REST API (CRUD)

A complete small API for students, stored in memory.

```javascript
const express = require("express");
const app = express();
app.use(express.json());

let students = [
  { id: 1, name: "Ali", marks: 85 },
  { id: 2, name: "Sara", marks: 92 },
];

// READ all
app.get("/students", (req, res) => res.json(students));

// READ one
app.get("/students/:id", (req, res) => {
  const s = students.find((x) => x.id === Number(req.params.id));
  if (!s) return res.status(404).json({ error: "Not found" });
  res.json(s);
});

// CREATE
app.post("/students", (req, res) => {
  const { name, marks } = req.body;
  if (!name) return res.status(400).json({ error: "Name is required" });
  const s = { id: Date.now(), name, marks };
  students.push(s);
  res.status(201).json(s);
});

// UPDATE
app.put("/students/:id", (req, res) => {
  const s = students.find((x) => x.id === Number(req.params.id));
  if (!s) return res.status(404).json({ error: "Not found" });
  Object.assign(s, req.body);
  res.json(s);
});

// DELETE
app.delete("/students/:id", (req, res) => {
  students = students.filter((x) => x.id !== Number(req.params.id));
  res.status(204).send();
});

app.listen(3000);
```

Test with the browser, Postman or `curl`.
