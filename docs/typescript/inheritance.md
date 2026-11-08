---
title: "TypeScript Inheritance"
sidebar_position: 21
---

# TypeScript Inheritance

## Theory

**Inheritance** means a child class gets all the features of a parent class and can add or change features. You use the `extends` keyword.

`super` is used to call the parent class. Changing a parent method in the child is called **overriding**.

## Practical

```typescript
class Animal {
  constructor(protected name: string) {}

  speak(): string {
    return `${this.name} makes a sound`;
  }
}

class Dog extends Animal {
  constructor(name: string, private breed: string) {
    super(name);
  }

  speak(): string {
    return `${this.name} the ${this.breed} says Woof`;
  }
}

const d = new Dog("Rex", "Labrador");
console.log(d.speak());
```
