---
title: "Node.js Security"
sidebar_position: 38
---

# Node.js Security

- Use **helmet** to set safe HTTP headers.
- Use **rate limiting** to stop spam and password guessing.
- **Validate** every input (Joi, Zod or validator).
- Use **prepared statements** with SQL (`?` placeholders). Never join user input into SQL.
- Hash passwords with **bcrypt**.
- Keep secrets in `.env` and never upload it.
- Use **HTTPS** on live sites.
- Set cookies with `httpOnly` and `secure`.
- Keep packages updated and run `npm audit`.
- Do not show error details or stack traces to users.
- Do not use `eval()` on user input.
- Limit the size of request bodies: `express.json({ limit: "1mb" })`.
