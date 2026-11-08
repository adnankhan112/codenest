---
title: "Node.js Authentication (bcrypt and JWT)"
sidebar_position: 30
---

# Node.js Authentication (bcrypt and JWT)

```
npm install bcrypt jsonwebtoken
```

## Register: hash the password

```javascript
const bcrypt = require("bcrypt");

app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  // save email and hash in the database
  res.status(201).json({ message: "Registered" });
});
```

## Login: check the password and give a token

```javascript
const jwt = require("jsonwebtoken");

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await findUserByEmail(email);       // your database function

  if (!user || !(await bcrypt.compare(password, user.hash))) {
    return res.status(401).json({ error: "Wrong email or password" });
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
});
```

## Protect routes

```javascript
function auth(req, res, next) {
  const header = req.headers.authorization || "";
  const token = header.replace("Bearer ", "");
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
}

app.get("/profile", auth, (req, res) => res.json({ userId: req.user.id }));
```

**JWT** (JSON Web Token) is a signed text that proves who the user is. The client sends it with every request.
