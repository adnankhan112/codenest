---
title: "TypeScript Type Guards and Narrowing"
sidebar_position: 27
---

# TypeScript Type Guards and Narrowing

## Theory

**Narrowing** means making a type more exact inside an `if` check. A **type guard** is the check that makes it possible.

Common guards: `typeof`, `instanceof`, the `in` operator, and your own functions.

## Practical

```typescript
function show(value: string | number | null) {
  if (value === null) return "empty";
  if (typeof value === "string") return value.toUpperCase();
  return value.toFixed(1);
}

class Cat { meow() {} }
class Dog { bark() {} }

function speak(pet: Cat | Dog) {
  if (pet instanceof Cat) pet.meow();
  else pet.bark();
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };
function move(animal: Fish | Bird) {
  if ("swim" in animal) animal.swim();
  else animal.fly();
}

// Your own type guard
function isString(x: unknown): x is string {
  return typeof x === "string";
}

// Discriminated union
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number };

function area(s: Shape): number {
  switch (s.kind) {
    case "circle": return Math.PI * s.radius ** 2;
    case "square": return s.side ** 2;
  }
}
```
