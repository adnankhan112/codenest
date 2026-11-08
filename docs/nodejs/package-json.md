---
title: "Node.js package.json"
sidebar_position: 6
---

# Node.js package.json

`package.json` describes your project.

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "description": "My first Node app",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  },
  "dependencies": {
    "express": "^4.19.2"
  },
  "devDependencies": {
    "nodemon": "^3.1.0"
  }
}
```

- **dependencies**: needed to run the app.
- **devDependencies**: only needed while developing.
- `^4.19.2` means "version 4.19.2 or any newer 4.x version".

Someone who gets your project only needs to run `npm install`.
