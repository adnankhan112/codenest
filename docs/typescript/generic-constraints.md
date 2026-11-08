---
title: "TypeScript Generic Constraints"
sidebar_position: 25
---

# TypeScript Generic Constraints

## Theory

A **constraint** limits which types a generic can accept. You use the `extends` keyword. This lets you safely use properties of the type inside the function.

## Practical

```typescript
function longest<T extends { length: number }>(a: T, b: T): T {
  return a.length >= b.length ? a : b;
}

longest("hello", "hi");        // OK, strings have length
longest([1, 2, 3], [1]);       // OK, arrays have length
// longest(10, 20);            // Error: numbers have no length

// keyof: pick a property name safely
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: "Ali", age: 20 };
getValue(user, "name");        // string
// getValue(user, "phone");    // Error
```
