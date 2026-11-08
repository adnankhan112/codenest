---
title: "Node.js Installation and First Steps"
sidebar_position: 2
---

# Node.js Installation and First Steps

## Install

1. Go to nodejs.org and download the **LTS** version.
2. Install it with the default options.

## Check

```
node -v
npm -v
```

## Two ways to run code

**1. REPL** (type one line at a time). Type `node`, then:

```
> 2 + 3
5
> console.log("Hi")
Hi
> .exit
```

**2. Files**

```
node app.js
```

## Useful globals

```javascript
console.log(__dirname);      // folder of this file
console.log(__filename);     // path of this file
console.log(process.argv);   // command line arguments
console.log(process.platform);
```
