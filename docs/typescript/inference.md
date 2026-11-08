---
title: "TypeScript Type Annotations and Inference"
sidebar_position: 6
---

# TypeScript Type Annotations and Inference

## Theory

An **annotation** is when you write the type yourself (`: number`). **Inference** is when TypeScript works out the type automatically from the value.

Good habit: let TypeScript infer when the type is obvious. Write the type yourself when it is not obvious, such as function parameters.

## Practical

```typescript
let city = "Lahore";        // inferred as string
let count = 10;             // inferred as number
// city = 5;                // Error, city is a string

let score: number;          // annotation needed, no value yet
score = 90;

const pi = 3.14;            // inferred as the exact value 3.14 for const

function double(n: number) {   // return type inferred as number
  return n * 2;
}
```

Hover over a variable in VS Code to see its inferred type.
