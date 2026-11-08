---
title: "TypeScript Abstract Classes and implements"
sidebar_position: 22
---

# TypeScript Abstract Classes and implements

## Theory

An **abstract class** is a base class that cannot be used to create objects. It can have **abstract methods** with no body. Child classes must write them.

`implements` makes a class follow an **interface**. The class must have every property and method of the interface.

## Practical

```typescript
abstract class Shape {
  abstract area(): number;

  describe(): string {
    return `Area is ${this.area()}`;
  }
}

class Circle extends Shape {
  constructor(private r: number) { super(); }
  area(): number { return Math.PI * this.r ** 2; }
}

// const s = new Shape();      // Error: abstract

interface Printable {
  print(): void;
}

class Report implements Printable {
  print(): void {
    console.log("Printing report");
  }
}
```
