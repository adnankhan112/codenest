---
title: "TypeScript Declaration Files and Decorators"
sidebar_position: 35
---

# TypeScript Declaration Files and Decorators

## Theory

A **declaration file** (`.d.ts`) describes the types of JavaScript code that has no types. It contains only types, no real code.

A **decorator** is a special function that adds extra behavior to a class or method. It is written with `@`. Decorators are used a lot in frameworks such as Angular and NestJS. (The way they work has changed in newer TypeScript versions, so always read your framework's guide.)

## Practical

**types.d.ts**

```typescript
declare module "old-library" {
  export function doWork(input: string): number;
}

declare const APP_VERSION: string;
```

## Installing types for a library

```
npm install --save-dev @types/lodash
```

## A simple decorator (TypeScript 5)

```typescript
function logCall(target: any, context: ClassMethodDecoratorContext) {
  return function (this: any, ...args: any[]) {
    console.log(`Calling ${String(context.name)}`);
    return target.apply(this, args);
  };
}

class Calculator {
  @logCall
  add(a: number, b: number) {
    return a + b;
  }
}

new Calculator().add(2, 3);
```
