---
title: C++ Constants and auto
sidebar_position: 7.8
---

# C++ Constants and auto

```cpp
const int MAX = 100;
constexpr double PI = 3.14159;    // known at compile time

auto n = 10;          // int
auto price = 9.5;     // double
auto name = string("Ali");
```

- `const` means the value cannot change.
- `constexpr` means the value is calculated while compiling.
- `auto` lets the compiler find the type. Use it when the type is obvious or very long.
