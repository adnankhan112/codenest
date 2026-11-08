---
title: "TypeScript Configuration (tsconfig.json)"
sidebar_position: 4
---

# TypeScript Configuration (tsconfig.json)

## Theory

`tsconfig.json` is the **settings file** of a TypeScript project. It tells the compiler which files to read, which JavaScript version to create and how strict to be.

The most important setting is `strict`. It turns on all the safety checks. Always keep it on.

## Practical

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*"]
}
```

| Option | Meaning |
| --- | --- |
| `target` | Which JavaScript version to create |
| `module` | Which module system to use |
| `outDir` | Where the compiled `.js` files go |
| `rootDir` | Where your `.ts` files are |
| `strict` | Turn on all strict checks |

With this file, you can just run `npx tsc` to compile the whole project.
