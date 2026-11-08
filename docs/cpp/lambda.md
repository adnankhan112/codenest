---
title: C++ Lambda Expressions
sidebar_position: 18.8
---

# C++ Lambda Expressions

A lambda is a small function you write right where you need it.

```cpp
auto add = [](int a, int b) { return a + b; };
cout << add(2, 3) << endl;   // 5
```

## Capturing variables

```cpp
int factor = 3;
auto times = [factor](int x) { return x * factor; };    // copy
auto change = [&factor]() { factor++; };                // reference
```

## With algorithms

```cpp
#include <algorithm>
#include <vector>

vector<int> v = {5, 2, 8, 1};
sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
```
