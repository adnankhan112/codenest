---
title: "TypeScript Error Handling"
sidebar_position: 31
---

# TypeScript Error Handling

## Theory

Errors are problems that happen while a program runs. We handle them with `try`, `catch` and `finally`. In TypeScript, the caught error has the type `unknown`, so you must check it before using it.

## Practical

```typescript
function parseAge(text: string): number {
  const n = Number(text);
  if (Number.isNaN(n)) {
    throw new Error("Not a number");
  }
  return n;
}

try {
  parseAge("abc");
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log("Unknown error");
  }
} finally {
  console.log("Always runs");
}

// Custom error
class ValidationError extends Error {
  constructor(message: string, public field: string) {
    super(message);
    this.name = "ValidationError";
  }
}
```
