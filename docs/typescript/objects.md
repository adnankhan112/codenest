---
title: "TypeScript Objects"
sidebar_position: 16
---

# TypeScript Objects

## Theory

An **object** groups related values as properties. In TypeScript you describe the **shape** of an object: which properties it has and their types.

If an object does not match the shape, the compiler shows an error.

## Practical

```typescript
let student: { name: string; age: number; email?: string } = {
  name: "Ali",
  age: 20
};

student.email = "ali@example.com";
// student.phone = "123";      // Error: no such property

function showStudent(s: { name: string; age: number }) {
  console.log(`${s.name} is ${s.age}`);
}
showStudent(student);

// Index signature: any number of text keys
const marks: { [subject: string]: number } = { math: 90, urdu: 85 };
marks.english = 88;
```
