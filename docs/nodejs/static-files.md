---
title: "Express Static Files"
sidebar_position: 24
---

# Express Static Files

Static files are files that do not change: images, CSS and browser JavaScript.

```javascript
const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(3000);
```

Folder layout:

```
my-app/
  app.js
  public/
    index.html
    style.css
    images/logo.png
```

Now `http://localhost:3000/style.css` and `http://localhost:3000/images/logo.png` work.
