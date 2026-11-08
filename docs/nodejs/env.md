---
title: "Node.js Environment Variables"
sidebar_position: 27
---

# Node.js Environment Variables

Never write passwords or secret keys inside your code. Put them in a `.env` file.

```
npm install dotenv
```

**.env**

```
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=secret123
JWT_SECRET=a_long_random_text
```

**app.js**

```javascript
require("dotenv").config();

const port = process.env.PORT || 3000;
console.log(process.env.DB_HOST);
```

Add `.env` to your `.gitignore` file, so it is never uploaded to GitHub.

Node 20.6 and later can also read it without a package: `node --env-file=.env app.js`.
