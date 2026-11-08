---
title: "TypeScript First Program"
sidebar_position: 3
---

# TypeScript First Program

## Theory

A TypeScript program is written in a file with the `.ts` extension. To run it, we first **compile** it to JavaScript, and then run the JavaScript with Node.js.

## Practical

Create `hello.ts`:

```typescript
const message: string = "Hello, TypeScript!";
console.log(message);
```

Compile and run:

```
npx tsc hello.ts
node hello.js
```

## Run directly (easier while learning)

```
npm install -g tsx
tsx hello.ts
```

## Watch mode

```
npx tsc --watch
```

The compiler compiles again every time you save.
