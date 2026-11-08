---
title: "TypeScript Functions"
sidebar_position: 14
---

# TypeScript Functions

## Theory

In TypeScript you write the types of a function's **parameters** (inputs) and its **return value** (output). This lets the compiler catch wrong calls.

## Practical

```typescript
function add(a: number, b: number): number {
  return a + b;
}

const multiply = (a: number, b: number): number => a * b;

console.log(add(2, 3));
// add("2", 3);         // Error

// A function type
let operation: (x: number, y: number) => number;
operation = add;

// Function that returns nothing
function greet(name: string): void {
  console.log(`Hello, ${name}`);
}
```
