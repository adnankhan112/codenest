---
title: "TypeScript Utility Types"
sidebar_position: 26
---

# TypeScript Utility Types

## Theory

**Utility types** are ready-made helpers that make a new type from an old one. They save you from writing similar types again and again.

## Practical

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

type PartialUser = Partial<User>;            // all properties optional
type RequiredUser = Required<User>;          // all properties required
type ReadonlyUser = Readonly<User>;          // cannot be changed
type NameOnly = Pick<User, "name">;          // choose properties
type NoEmail = Omit<User, "email">;          // remove properties
type Scores = Record<string, number>;        // object with text keys

const update: Partial<User> = { name: "New name" };
const marks: Scores = { math: 90, urdu: 85 };

type Fn = (a: number) => string;
type Result = ReturnType<Fn>;                // string
type NotNull = NonNullable<string | null>;   // string
```
