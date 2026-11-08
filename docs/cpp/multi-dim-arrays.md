---
title: C++ Multi-Dimensional Arrays
sidebar_position: 15.5
---

# C++ Multi-Dimensional Arrays

```cpp
int matrix[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
};

for (int i = 0; i < 2; i++) {
    for (int j = 0; j < 3; j++) {
        cout << matrix[i][j] << " ";
    }
    cout << endl;
}
```

## A vector of vectors

```cpp
#include <vector>

vector<vector<int>> grid(3, vector<int>(4, 0));   // 3 rows, 4 columns of 0
grid[1][2] = 7;
```

Vectors of vectors can change size, which is often more useful than fixed arrays.
