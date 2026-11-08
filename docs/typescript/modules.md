---
title: "TypeScript Modules"
sidebar_position: 29
---

# TypeScript Modules

## Theory

A **module** is a file with its own code that can **export** things and **import** things from other files. Modules keep code organized and avoid name clashes.

## Practical

**math.ts**

```typescript
export function add(a: number, b: number): number {
  return a + b;
}

export interface Point {
  x: number;
  y: number;
}

export default function greet(name: string): string {
  return `Hello, ${name}`;
}
```

**app.ts**

```typescript
import greet, { add, Point } from "./math";

console.log(greet("Ali"));
console.log(add(2, 3));

const p: Point = { x: 1, y: 2 };

import * as Math2 from "./math";       // import everything
console.log(Math2.add(1, 1));
```
