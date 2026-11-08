---
title: "TypeScript Arrays"
sidebar_position: 7
---

# TypeScript Arrays

## Theory

An **array** is a list of values. In TypeScript, an array can only hold values of one kind, unless you say otherwise.

You write the type of an array in two ways: `number[]` or `Array<number>`. Both mean the same.

## Practical

```typescript
const scores: number[] = [90, 85, 70];
const names: Array<string> = ["Ali", "Sara"];

scores.push(95);
// scores.push("A");        // Error: only numbers allowed

for (const s of scores) {
  console.log(s);
}

const total = scores.reduce((sum, n) => sum + n, 0);
const passed = scores.filter((n) => n >= 75);

const grid: number[][] = [[1, 2], [3, 4]];

const readonlyList: readonly number[] = [1, 2, 3];
// readonlyList.push(4);    // Error
```
