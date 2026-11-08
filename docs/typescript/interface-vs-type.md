---
title: "TypeScript Interface vs Type"
sidebar_position: 18
---

# TypeScript Interface vs Type

## Theory

Interfaces and type aliases are very similar. The main differences:

- `interface` can be **reopened** and extended by writing it again (declaration merging).
- `type` can name **any** type, including unions and tuples.
- Use `interface` for object shapes and classes. Use `type` for unions, tuples and other special types.

## Practical

```typescript
// Only type can do this
type ID = string | number;
type Pair = [string, number];

// Interfaces merge automatically
interface Box { width: number }
interface Box { height: number }
const b: Box = { width: 1, height: 2 };

// Extending
interface Animal { name: string }
interface Dog extends Animal { breed: string }

type Cat = Animal & { lives: number };
```
