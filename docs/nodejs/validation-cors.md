---
title: "Validation, CORS and Rate Limiting"
sidebar_position: 33
---

# Validation, CORS and Rate Limiting

```
npm install joi cors express-rate-limit helmet
```

## Validation with Joi

```javascript
const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  age: Joi.number().integer().min(1).max(120),
});

app.post("/users", (req, res) => {
  const { error, value } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  res.json(value);
});
```

## CORS

CORS decides which websites may call your API from a browser.

```javascript
const cors = require("cors");
app.use(cors({ origin: "https://mywebsite.com" }));
```

## Rate limiting and security headers

```javascript
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");

app.use(helmet());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));   // 100 requests per 15 minutes
```
