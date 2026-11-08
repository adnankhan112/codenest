---
title: "TypeScript Optional, Default and Rest Parameters"
sidebar_position: 15
---

# TypeScript Optional, Default and Rest Parameters

## Theory

- An **optional parameter** may be left out. You mark it with `?`.
- A **default parameter** has a value that is used when the caller gives nothing.
- A **rest parameter** collects any number of extra arguments into an array. You write it with `...`.

## Practical

```typescript
function greet(name: string, title?: string): string {
  return title ? `${title} ${name}` : name;
}
greet("Ali");
greet("Ali", "Dr.");

function power(base: number, exponent: number = 2): number {
  return base ** exponent;
}
power(5);        // 25
power(2, 3);     // 8

function sum(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}
sum(1, 2, 3, 4); // 10
```

## Function overloads

Same function name, different input types:

```typescript
function format(value: string): string;
function format(value: number): string;
function format(value: string | number): string {
  return typeof value === "number" ? value.toFixed(2) : value.trim();
}
```
