---
title: C++ Type Conversion
sidebar_position: 7.5
---

# C++ Type Conversion

## Implicit conversion

```cpp
int a = 5;
double b = a;        // 5.0
```

## Explicit conversion

```cpp
int x = 7, y = 2;
cout << x / y << endl;                       // 3
cout << static_cast<double>(x) / y << endl;  // 3.5
```

## Strings and numbers

```cpp
#include <string>

int n = stoi("42");
double d = stod("3.14");
string s = to_string(100);
```

Prefer `static_cast` in C++ because it is clear and safer than the old C style `(double)x`.
