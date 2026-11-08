---
title: "Express Error Handling"
sidebar_position: 26
---

# Express Error Handling

```javascript
const express = require("express");
const app = express();

app.get("/crash", (req, res) => {
  throw new Error("Something broke");
});

// async routes need try and catch (or a helper)
app.get("/data", async (req, res, next) => {
  try {
    const data = await loadData();
    res.json(data);
  } catch (err) {
    next(err);                       // send the error to the error handler
  }
});

// 404 handler
app.use((req, res) => res.status(404).json({ error: "Route not found" }));

// Error handler: has 4 parameters, goes last
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: "Server error" });
});
```

Do not send the full error message or stack to users on a live website.
