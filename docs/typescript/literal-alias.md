---
title: "TypeScript Literal Types and Type Aliases"
sidebar_position: 13
---

# TypeScript Literal Types and Type Aliases

## Theory

A **literal type** is a type that accepts one exact value, such as `"yes"` or `5`. Combined with unions, it allows only a fixed list of choices.

A **type alias** gives a new name to a type, using the `type` keyword. It makes long types short and easy to read.

## Practical

```typescript
let answer: "yes" | "no" = "yes";
// answer = "maybe";    // Error

type Size = "small" | "medium" | "large";
type ID = number | string;
type Point = { x: number; y: number };

function order(size: Size, id: ID) {
  console.log(size, id);
}
order("large", 12);

const p: Point = { x: 1, y: 2 };
```
