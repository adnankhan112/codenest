---
title: "TypeScript Introduction"
sidebar_position: 1
---

# TypeScript Introduction

## Theory

**TypeScript** is JavaScript with **types**. A type tells us what kind of value something is, such as a number, a text or a list.

JavaScript lets you mix types without warning. This often causes bugs. TypeScript checks your code **before it runs** and shows mistakes early.

Important points:

- TypeScript was made by Microsoft.
- Browsers cannot run TypeScript directly. A tool called the **compiler** turns TypeScript (`.ts` files) into JavaScript (`.js` files).
- Every JavaScript program is also a valid TypeScript program.

## Practical

```typescript
// JavaScript allows this mistake:
// let age = 20; age = "twenty";   // no warning

// TypeScript stops it:
let age: number = 20;
// age = "twenty";   // Error: Type 'string' is not assignable to type 'number'
age = 21;             // OK
```

Many large projects (Angular, Next.js, VS Code itself) use TypeScript.
