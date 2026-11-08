---
title: "TypeScript Interfaces"
sidebar_position: 17
---

# TypeScript Interfaces

## Theory

An **interface** is a named description of an object's shape. It is like a contract: any object that uses it must follow the rules.

Interfaces can have optional properties (`?`), read-only properties (`readonly`) and methods. They can also extend other interfaces.

## Practical

```typescript
interface Student {
  readonly id: number;
  name: string;
  marks: number;
  email?: string;
  greet(): string;
}

const s: Student = {
  id: 1,
  name: "Ali",
  marks: 85,
  greet() {
    return `Hi, I am ${this.name}`;
  }
};

// s.id = 2;      // Error: readonly

// Extending
interface GraduateStudent extends Student {
  thesis: string;
}

// Function shape
interface Compare {
  (a: number, b: number): number;
}
const byValue: Compare = (a, b) => a - b;
```
