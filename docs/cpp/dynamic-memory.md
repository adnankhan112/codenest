---
title: C++ Dynamic Memory
sidebar_position: 17.5
---

# C++ Dynamic Memory

Memory created with `new` lives until you delete it.

```cpp
int *p = new int(5);
cout << *p << endl;
delete p;

int n = 4;
int *arr = new int[n];
for (int i = 0; i < n; i++) arr[i] = i * 10;
delete[] arr;
```

## Rules

- Every `new` needs a matching `delete`.
- Every `new[]` needs a matching `delete[]`.
- Never use a pointer after you delete it.

Modern C++ prefers `vector` and smart pointers, so you rarely manage memory by hand.
