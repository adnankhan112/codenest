---
title: "TypeScript Enums"
sidebar_position: 9
---

# TypeScript Enums

## Theory

An **enum** is a named group of constant values. It helps you avoid "magic numbers" and spelling mistakes.

Numeric enums count from 0. String enums use text values.

## Practical

```typescript
enum Direction {
  Up,        // 0
  Down,      // 1
  Left,      // 2
  Right      // 3
}

let move: Direction = Direction.Up;
console.log(move);              // 0
console.log(Direction[1]);      // "Down"

enum Status {
  Active = "ACTIVE",
  Blocked = "BLOCKED"
}

function show(s: Status) {
  console.log("Status is " + s);
}
show(Status.Active);

// const enum is removed during compile for speed
const enum Level { Low = 1, High = 10 }
```
