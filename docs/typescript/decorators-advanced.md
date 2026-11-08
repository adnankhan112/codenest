---
title: "TypeScript Advanced Types: mapped, conditional and template literal"
sidebar_position: 34
---

# TypeScript Advanced Types: mapped, conditional and template literal

## Theory

These are advanced tools for building flexible types.

- **Mapped types** make a new type by looping over the keys of another type.
- **Conditional types** choose a type with an if-else rule: `T extends U ? X : Y`.
- **Template literal types** build text types from other text types.
- `keyof` gives all the keys of a type. `typeof` gives the type of a value.

## Practical

```typescript
interface User { id: number; name: string }

// Mapped type
type Optional<T> = { [K in keyof T]?: T[K] };
type Flags<T> = { [K in keyof T]: boolean };

type U1 = Optional<User>;       // { id?: number; name?: string }

// Conditional type
type IsString<T> = T extends string ? "yes" : "no";
type A = IsString<string>;      // "yes"
type B = IsString<number>;      // "no"

// Template literal type
type Event = "click" | "hover";
type Handler = `on${Capitalize<Event>}`;     // "onClick" | "onHover"

// keyof and typeof
const settings = { theme: "dark", size: 12 };
type SettingsKeys = keyof typeof settings;   // "theme" | "size"

// infer: pull a type out of another type
type ElementType<T> = T extends (infer U)[] ? U : never;
type N = ElementType<number[]>;              // number
```

Do not worry if this looks hard at first. You will use these tools mainly when you build libraries.
