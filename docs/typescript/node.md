---
title: "TypeScript with Node.js"
sidebar_position: 33
---

# TypeScript with Node.js

## Theory

You can write Node.js programs in TypeScript. You only need the **type definitions** for Node (called `@types/node`), because Node itself is written in JavaScript.

A **declaration file** (`.d.ts`) describes the types of a JavaScript library. Many libraries have them in the `@types` packages.

## Practical

```
npm init -y
npm install --save-dev typescript @types/node tsx
npm install express
npm install --save-dev @types/express
npx tsc --init
```

**src/server.ts**

```typescript
import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

interface Student {
  id: number;
  name: string;
}

const students: Student[] = [{ id: 1, name: "Ali" }];

app.get("/students", (req: Request, res: Response) => {
  res.json(students);
});

app.post("/students", (req: Request, res: Response) => {
  const s: Student = { id: Date.now(), name: req.body.name };
  students.push(s);
  res.status(201).json(s);
});

app.listen(3000, () => console.log("Server on http://localhost:3000"));
```

Run it with `npx tsx src/server.ts`.
