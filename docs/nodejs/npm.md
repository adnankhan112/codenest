---
title: "Node.js npm and Packages"
sidebar_position: 5
---

# Node.js npm and Packages

npm (Node Package Manager) installs libraries made by other people.

```
npm init -y                    create package.json
npm install express            install a package
npm install nodemon --save-dev install for development only
npm install -g nodemon         install for the whole computer
npm uninstall express
npm update
npm list
```

## Using a package

```javascript
const _ = require("lodash");
console.log(_.chunk([1, 2, 3, 4], 2));   // [[1, 2], [3, 4]]
```

## Folders

- `node_modules/` holds the packages. Do not upload it to GitHub.
- `package-lock.json` saves exact versions.

## Scripts

In `package.json`:

```json
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js"
}
```

Run with `npm start` or `npm run dev`. **nodemon** restarts your app every time you save a file.
