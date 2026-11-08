---
title: "TypeScript Tuples"
sidebar_position: 8
---

# TypeScript Tuples

## Theory

A **tuple** is an array with a **fixed length** and a **fixed type for each position**. It is useful when each position has its own meaning, such as a name and an age.

## Practical

```typescript
let person: [string, number] = ["Ali", 20];

console.log(person[0]);     // Ali
console.log(person[1]);     // 20
// person = [20, "Ali"];    // Error: wrong order
// person = ["Ali"];        // Error: missing item

// Optional and named items
let point: [x: number, y: number, z?: number] = [1, 2];

// Return two values from a function
function minMax(nums: number[]): [number, number] {
  return [Math.min(...nums), Math.max(...nums)];
}
const [low, high] = minMax([4, 9, 1]);
```
