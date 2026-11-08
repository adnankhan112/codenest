---
title: C Common Errors and Debugging
sidebar_position: 25.5
---

# C Common Errors and Debugging

## Common mistakes

| Mistake | Result |
| --- | --- |
| Missing semicolon | Compile error |
| Using an uninitialized variable | Random value |
| Going outside an array | Wrong data or crash |
| Using `=` instead of `==` in a condition | Wrong logic |
| Forgetting `&` in `scanf` | Crash |
| Not calling `free` | Memory leak |
| Using memory after `free` | Crash |

## Segmentation fault

This error means the program touched memory it should not. Check your pointers and array indexes.

## Debugging tools

- Add `printf` lines to see values.
- Compile with `gcc -Wall -Wextra -g app.c`.
- Run in a debugger: `gdb ./app`.
- Use `valgrind ./app` on Linux to find memory leaks.
