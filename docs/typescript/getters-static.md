---
title: "TypeScript Getters, Setters and Static Members"
sidebar_position: 23
---

# TypeScript Getters, Setters and Static Members

## Theory

- **Getters and setters** look like properties, but they run code. They let you check values when reading or writing.
- **Static** members belong to the class itself, not to each object.

## Practical

```typescript
class Person {
  private _age = 0;
  static count = 0;

  constructor() {
    Person.count++;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    if (value < 0) throw new Error("Age cannot be negative");
    this._age = value;
  }

  static describe(): string {
    return `Total people: ${Person.count}`;
  }
}

const p = new Person();
p.age = 20;
console.log(p.age);
console.log(Person.describe());
```
