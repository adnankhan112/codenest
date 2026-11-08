---
title: C++ break, continue and Nested Loops
sidebar_position: 14.5
---

# C++ break, continue and Nested Loops

```cpp
for (int i = 1; i <= 10; i++) {
    if (i == 3) continue;    // skip 3
    if (i == 7) break;       // stop at 7
    cout << i << " ";
}
```

Output: `1 2 4 5 6`

## Nested loops

```cpp
for (int row = 1; row <= 3; row++) {
    for (int col = 1; col <= row; col++) {
        cout << "* ";
    }
    cout << endl;
}
```

Output:

```
* 
* * 
* * * 
```
