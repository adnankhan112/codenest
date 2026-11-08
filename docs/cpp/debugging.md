---
title: C++ Common Errors and Debugging
sidebar_position: 27.8
---

# C++ Common Errors and Debugging

## Common mistakes

| Mistake | Result |
| --- | --- |
| Missing semicolon after a class | Compile error |
| Using an uninitialized variable | Random value |
| Going outside an array or vector | Crash or wrong data |
| Forgetting `delete` | Memory leak |
| Returning a reference to a local variable | Crash |
| Comparing floating point numbers with `==` | Unexpected result |

## Safer habits

- Use `vector.at(i)`. It throws an error for a bad index.
- Use `const` and references.
- Use smart pointers.

## Tools

- Compile with `g++ -Wall -Wextra -g app.cpp`.
- Debug with `gdb ./app`.
- Use `std::cerr` to print error messages.
