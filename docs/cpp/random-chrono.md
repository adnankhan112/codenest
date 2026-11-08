---
title: C++ Random Numbers and Time
sidebar_position: 26.5
---

# C++ Random Numbers and Time

## Random numbers

```cpp
#include <random>

random_device rd;
mt19937 gen(rd());
uniform_int_distribution<int> dice(1, 6);

cout << dice(gen) << endl;
```

## Measuring time

```cpp
#include <chrono>

auto start = chrono::steady_clock::now();
for (int i = 0; i < 1000000; i++) {}
auto end = chrono::steady_clock::now();

auto ms = chrono::duration_cast<chrono::milliseconds>(end - start).count();
cout << ms << " ms" << endl;
```

## Current date

```cpp
#include <ctime>

time_t now = time(nullptr);
cout << ctime(&now);
```
