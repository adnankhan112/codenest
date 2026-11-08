---
title: "TypeScript Type Assertions"
sidebar_position: 28
---

# TypeScript Type Assertions

## Theory

A **type assertion** tells the compiler "trust me, I know the type of this value". It does not change the value, only how TypeScript sees it.

Use it carefully. If you are wrong, TypeScript will not warn you.

## Practical

```typescript
const input = document.getElementById("name") as HTMLInputElement;
console.log(input.value);

let value: unknown = "hello";
const length = (value as string).length;

// Non-null assertion: "this is not null"
const el = document.querySelector(".box")!;

// as const: make values exact and read-only
const config = { mode: "dark", size: 10 } as const;
// config.mode = "light";      // Error
```
