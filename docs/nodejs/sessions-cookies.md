---
title: "Express Sessions and Cookies"
sidebar_position: 31
---

# Express Sessions and Cookies

```
npm install express-session cookie-parser
```

```javascript
const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { httpOnly: true, maxAge: 1000 * 60 * 60 },
  })
);

app.get("/visit", (req, res) => {
  req.session.count = (req.session.count || 0) + 1;
  res.send("Visits: " + req.session.count);
});

app.get("/set", (req, res) => {
  res.cookie("theme", "dark", { maxAge: 900000, httpOnly: true });
  res.send("Cookie set");
});

app.get("/read", (req, res) => res.send(req.cookies.theme));
```

Sessions keep data on the server. Cookies keep data in the browser. Use **sessions** for logins. Use **JWT** for APIs.
