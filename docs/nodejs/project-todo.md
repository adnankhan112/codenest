---
title: "Node.js Mini Project: To-Do API"
sidebar_position: 40
---

# Node.js Mini Project: To-Do API

A small API that saves tasks in a file.

```
npm init -y
npm install express
```

**app.js**

```javascript
const express = require("express");
const fs = require("fs/promises");

const app = express();
app.use(express.json());

const FILE = "tasks.json";

async function load() {
  try {
    return JSON.parse(await fs.readFile(FILE, "utf8"));
  } catch {
    return [];
  }
}

async function save(tasks) {
  await fs.writeFile(FILE, JSON.stringify(tasks, null, 2));
}

app.get("/tasks", async (req, res) => res.json(await load()));

app.post("/tasks", async (req, res) => {
  if (!req.body.title) return res.status(400).json({ error: "Title is required" });
  const tasks = await load();
  const task = { id: Date.now(), title: req.body.title, done: false };
  tasks.push(task);
  await save(tasks);
  res.status(201).json(task);
});

app.patch("/tasks/:id", async (req, res) => {
  const tasks = await load();
  const task = tasks.find((t) => t.id === Number(req.params.id));
  if (!task) return res.status(404).json({ error: "Not found" });
  task.done = req.body.done ?? task.done;
  await save(tasks);
  res.json(task);
});

app.delete("/tasks/:id", async (req, res) => {
  const tasks = (await load()).filter((t) => t.id !== Number(req.params.id));
  await save(tasks);
  res.status(204).send();
});

app.listen(3000, () => console.log("Running on http://localhost:3000"));
```

## Ideas to improve it

- Replace the file with MySQL or MongoDB.
- Add user login with JWT.
- Build a web page that uses this API with `fetch`.
