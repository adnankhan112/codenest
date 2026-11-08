---
title: "TypeScript Classes"
sidebar_position: 19
---

# TypeScript Classes

## Theory

A **class** is a blueprint for making objects. It has **properties** (data) and **methods** (actions). TypeScript adds types to both.

A **constructor** is a special method that runs when you create a new object.

## Practical

```typescript
class Student {
  name: string;
  marks: number;

  constructor(name: string, marks: number) {
    this.name = name;
    this.marks = marks;
  }

  isPassed(): boolean {
    return this.marks >= 50;
  }
}

const s = new Student("Ali", 72);
console.log(s.isPassed());

// Shorter way: parameter properties
class Teacher {
  constructor(public name: string, private salary: number) {}
}
```
