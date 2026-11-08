---
title: "TypeScript Generics"
sidebar_position: 24
---

# TypeScript Generics

## Theory

**Generics** let you write one piece of code that works with **many types**, and still keeps the types safe.

You write a **type variable** inside angle brackets, usually named `T`. Think of `T` as a placeholder that is filled in later.

## Practical

```typescript
function firstItem<T>(items: T[]): T {
  return items[0];
}

const n = firstItem([10, 20, 30]);       // number
const s = firstItem(["a", "b"]);         // string

// Generic interface
interface Box<T> {
  value: T;
}
const b: Box<string> = { value: "Hello" };

// Generic class
class Stack<T> {
  private items: T[] = [];
  push(item: T) { this.items.push(item); }
  pop(): T | undefined { return this.items.pop(); }
}

const numbers = new Stack<number>();
numbers.push(1);
// numbers.push("x");        // Error

// Two type variables
function pair<K, V>(key: K, value: V): [K, V] {
  return [key, value];
}
```
