---
title: "TypeScript Best Practices"
sidebar_position: 36
---

# TypeScript Best Practices

## Theory

Good habits keep TypeScript code safe and easy to read. The main idea: **let the compiler help you**, and do not turn its checks off.

## Practical

- Turn on `"strict": true` in `tsconfig.json`.
- Avoid `any`. Use `unknown` when you do not know the type.
- Let TypeScript infer simple types. Annotate function parameters and public return values.
- Use `interface` for object shapes and `type` for unions.
- Use `readonly` and `as const` for data that must not change.
- Use union types and enums instead of loose text values.
- Use utility types (`Partial`, `Pick`, `Omit`) instead of copying types.
- Avoid type assertions (`as`) unless you are sure.
- Keep types close to the code that uses them.
- Use a linter such as ESLint with TypeScript rules, and Prettier for formatting.
