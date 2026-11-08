---
title: "Express Templates (EJS)"
sidebar_position: 23
---

# Express Templates (EJS)

Templates let you build HTML pages with data from your server.

```
npm install ejs
```

**app.js**

```javascript
const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/students", (req, res) => {
  const students = [
    { name: "Ali", marks: 85 },
    { name: "Sara", marks: 92 },
  ];
  res.render("students", { title: "Students", students });
});

app.listen(3000);
```

**views/students.ejs**

```html
<h1><%= title %></h1>
<ul>
  <% students.forEach(s => { %>
    <li><%= s.name %> - <%= s.marks %></li>
  <% }) %>
</ul>
```

- `<%= %>` prints a value (and escapes it safely).
- `<% %>` runs JavaScript code.
