---
title: "Node.js Testing"
sidebar_position: 36
---

# Node.js Testing

Tests make sure your code works, now and after future changes.

```
npm install --save-dev jest supertest
```

**math.js**

```javascript
module.exports.add = (a, b) => a + b;
```

**math.test.js**

```javascript
const { add } = require("./math");

test("adds two numbers", () => {
  expect(add(2, 3)).toBe(5);
});

test("works with negative numbers", () => {
  expect(add(-1, 1)).toBe(0);
});
```

Add `"test": "jest"` to your scripts and run `npm test`.

## Testing an API

```javascript
const request = require("supertest");
const app = require("./app");        // export app without app.listen

test("GET /students", async () => {
  const res = await request(app).get("/students");
  expect(res.statusCode).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
});
```

Node also has a built-in test runner: `node --test`.
