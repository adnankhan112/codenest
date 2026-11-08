---
title: C++ STL Algorithms
sidebar_position: 23.8
---

# C++ STL Algorithms

```cpp
#include <algorithm>
#include <numeric>
#include <vector>

vector<int> v = {5, 2, 8, 1, 9};

sort(v.begin(), v.end());                       // 1 2 5 8 9
reverse(v.begin(), v.end());                    // 9 8 5 2 1

auto it = find(v.begin(), v.end(), 5);
if (it != v.end()) cout << "Found" << endl;

cout << count(v.begin(), v.end(), 2) << endl;   // 1
cout << *max_element(v.begin(), v.end()) << endl;   // 9
cout << accumulate(v.begin(), v.end(), 0) << endl;  // sum: 25

sort(v.begin(), v.end());
cout << binary_search(v.begin(), v.end(), 8) << endl;   // 1
```

Always use these ready-made algorithms instead of writing your own loops when they fit your problem.
