---
title: "TypeScript Installation and Setup"
sidebar_position: 2
---

# TypeScript Installation and Setup

## Theory

To use TypeScript you need two things: **Node.js** (to run tools) and the **TypeScript compiler** (`tsc`).

The compiler reads your `.ts` files, checks the types, and writes plain JavaScript files.

## Practical

Check that Node.js is installed:

```
node -v
```

Install TypeScript:

```
npm install -g typescript
tsc -v
```

Create a project:

```
mkdir ts-demo
cd ts-demo
npm init -y
npm install --save-dev typescript
npx tsc --init
```

The last command creates `tsconfig.json`, the settings file.
