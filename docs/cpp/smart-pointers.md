---
title: C++ Smart Pointers
sidebar_position: 25.5
---

# C++ Smart Pointers

Smart pointers delete memory for you automatically.

```cpp
#include <memory>

unique_ptr<int> a = make_unique<int>(5);
cout << *a << endl;
// deleted automatically when a goes out of scope

shared_ptr<string> b = make_shared<string>("Hello");
shared_ptr<string> c = b;             // two owners
cout << b.use_count() << endl;        // 2
```

| Type | Meaning |
| --- | --- |
| `unique_ptr` | One owner only |
| `shared_ptr` | Many owners, deleted when the last one is gone |
| `weak_ptr` | Watches a `shared_ptr` without owning it |

Use smart pointers instead of raw `new` and `delete`.
