---
title: "TypeScript any, unknown, void and never"
sidebar_position: 10
---

# TypeScript any, unknown, void and never

## Theory

Some types are special:

- `any` turns off type checking. Avoid it.
- `unknown` means "I do not know the type yet". You must check it before use. It is the **safe** version of `any`.
- `void` means a function returns nothing.
- `never` means something that can **never happen**, for example a function that always throws an error.

## Practical

```typescript
let a: any = 5;
a = "text";            // no error, TypeScript does not help you
a.fly();               // no error here, but it crashes when running

let u: unknown = "hello";
// u.toUpperCase();    // Error: you must check first
if (typeof u === "string") {
  console.log(u.toUpperCase());     // OK
}

function logMessage(msg: string): void {
  console.log(msg);
}

function fail(message: string): never {
  throw new Error(message);
}
```
