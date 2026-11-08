---
title: "Node.js File Upload (Multer)"
sidebar_position: 32
---

# Node.js File Upload (Multer)

```
npm install multer
```

```javascript
const express = require("express");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 },                       // 2 MB
  fileFilter: (req, file, cb) => {
    const ok = ["image/jpeg", "image/png"].includes(file.mimetype);
    cb(ok ? null : new Error("Only JPG and PNG"), ok);
  },
});

const app = express();

app.post("/photo", upload.single("photo"), (req, res) => {
  res.json({ file: req.file.filename });
});

app.post("/gallery", upload.array("photos", 5), (req, res) => {
  res.json({ count: req.files.length });
});

app.listen(3000);
```

The HTML form needs `enctype="multipart/form-data"`.
