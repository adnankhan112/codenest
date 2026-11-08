---
title: "TypeScript Practice Questions with Answers"
sidebar_position: 38
---

# TypeScript Practice Questions with Answers

## Theory

Practice makes you strong. Try every question yourself first. Then compare your answer with the solution.

## Practical

**1. Declare a string, a number and a boolean variable.**

```typescript
let name: string = "Ali";
let age: number = 20;
let active: boolean = true;
```

**2. Write a function that returns the square of a number.**

```typescript
const square = (n: number): number => n * n;
```

**3. Make an array of numbers and find the sum.**

```typescript
const nums: number[] = [1, 2, 3, 4];
const sum = nums.reduce((a, b) => a + b, 0);
```

**4. Create an interface `Car` with brand, year and an optional color.**

```typescript
interface Car {
  brand: string;
  year: number;
  color?: string;
}
```

**5. Create a union type that accepts a number or a string.**

```typescript
type Id = number | string;
```

**6. Create an enum for the days Mon, Tue and Wed.**

```typescript
enum Day { Mon, Tue, Wed }
```

**7. Write a generic function that returns the last item of an array.**

```typescript
function last<T>(items: T[]): T | undefined {
  return items[items.length - 1];
}
```

**8. Write a class `Rectangle` with a method that returns its area.**

```typescript
class Rectangle {
  constructor(private w: number, private h: number) {}
  area(): number { return this.w * this.h; }
}
```

**9. Use `Partial` to make an update function.**

```typescript
interface User { name: string; age: number }
function update(user: User, changes: Partial<User>): User {
  return { ...user, ...changes };
}
```

**10. Write a type guard that checks if a value is a string.**

```typescript
function isString(x: unknown): x is string {
  return typeof x === "string";
}
```

**11. Write a function with an optional parameter and a default parameter.**

```typescript
function greet(name: string, greeting = "Hello", end?: string): string {
  return `${greeting}, ${name}${end ?? "!"}`;
}
```

**12. Create an abstract class `Animal` with an abstract method `sound`.**

```typescript
abstract class Animal {
  abstract sound(): string;
}
class Cat extends Animal {
  sound() { return "Meow"; }
}
```

**13. Fetch a todo from an API with the correct types.**

```typescript
interface Todo { id: number; title: string }
async function getTodo(): Promise<Todo> {
  const r = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return r.json();
}
```

**14. Write a tuple type for a name and age, and return it from a function.**

```typescript
function person(): [string, number] {
  return ["Ali", 20];
}
```

## Project ideas

1. A typed calculator.
2. A library system using classes and interfaces.
3. A REST API with Express and TypeScript.
4. A quiz app that runs in the browser.
