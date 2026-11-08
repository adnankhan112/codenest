---
title: "TypeScript Basic Types"
sidebar_position: 5
---

# TypeScript Basic Types

## Theory

A **type** describes what values a variable can hold. The basic (primitive) types are:

- `string` for text
- `number` for all numbers (whole and decimal)
- `boolean` for `true` or `false`
- `null` and `undefined` for "no value"
- `bigint` for very large whole numbers
- `symbol` for unique identifiers

## Practical

```typescript
let name: string = "Ali";
let age: number = 20;
let price: number = 9.99;
let isStudent: boolean = true;
let nothing: null = null;
let notSet: undefined = undefined;
let big: bigint = 12345678901234567890n;

name = "Sara";        // OK
// age = "twenty";    // Error
```
