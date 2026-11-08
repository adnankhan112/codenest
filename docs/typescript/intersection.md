---
title: "TypeScript Intersection Types"
sidebar_position: 12
---

# TypeScript Intersection Types

## Theory

An **intersection type** combines several types into one. The value must have **all** the properties of all the types. You write it with the `&` sign, which you can read as "and".

## Practical

```typescript
type Person = { name: string; age: number };
type Employee = { company: string; salary: number };

type Worker = Person & Employee;

const w: Worker = {
  name: "Ali",
  age: 25,
  company: "CodeNest",
  salary: 80000
};
// Removing any property gives an error
```
