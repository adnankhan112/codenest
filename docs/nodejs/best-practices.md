---
title: "Node.js Best Practices"
sidebar_position: 41
---

# Node.js Best Practices

- Use `const` and `let`, and write async code with `async` and `await`.
- Keep your project organized: `routes`, `controllers`, `models`, `middleware`, `config`.
- Keep secrets in `.env`.
- Handle every error. Never leave a promise without a `catch`.
- Never block the event loop with heavy loops. Use worker threads.
- Validate all input.
- Use `nodemon` while developing and PM2 in production.
- Write tests.
- Use a linter (ESLint) and a formatter (Prettier).
- Keep packages updated and check with `npm audit`.
- Use a logger instead of `console.log` in production.
- Learn TypeScript for big projects.
