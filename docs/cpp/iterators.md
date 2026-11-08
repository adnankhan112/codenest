---
title: C++ Iterators
sidebar_position: 23.6
---

# C++ Iterators

An iterator points to an item inside a container.

```cpp
vector<int> v = {10, 20, 30};

for (vector<int>::iterator it = v.begin(); it != v.end(); ++it) {
    cout << *it << " ";
}

for (auto it = v.begin(); it != v.end(); ++it) {
    *it += 1;                 // change the item
}
```

- `begin()` points to the first item.
- `end()` points just after the last item.
- `*it` gives the item.
- `++it` moves to the next item.

A range-based loop is shorter: `for (int x : v)`.
