---
title: "Express Request and Response"
sidebar_position: 22
---

# Express Request and Response

## Request (req)

```javascript
app.post("/login", (req, res) => {
  console.log(req.body);       // data sent by the client (needs express.json())
  console.log(req.params);     // route parameters
  console.log(req.query);      // query string
  console.log(req.headers);
  console.log(req.method, req.url, req.ip);
});
```

## Response (res)

```javascript
res.send("Text or HTML");
res.json({ ok: true });
res.status(201).json({ id: 1 });          // set a status code
res.status(404).send("Not found");
res.redirect("/login");
res.sendFile(__dirname + "/index.html");
res.cookie("name", "Ali", { httpOnly: true });
res.set("X-Powered-By", "CodeNest");
```

Send only **one** response per request.
