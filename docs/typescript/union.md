---
title: "TypeScript Union Types"
sidebar_position: 11
---

# TypeScript Union Types

## Theory

A **union type** means a value can be **one of several types**. You write it with the `|` sign, which you can read as "or".

## Practical

```typescript
let id: number | string;
id = 101;
id = "A-101";
// id = true;           // Error

function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(0));
  }
}

let result: string | null = null;
result = "done";

type Status = "loading" | "success" | "error";
let s: Status = "loading";
```
