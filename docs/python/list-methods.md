---
title: Python List Methods
sidebar_position: 13.3
---

# Python List Methods

| Method | What it does |
| --- | --- |
| `append(x)` | Adds an item at the end |
| `insert(i, x)` | Adds an item at position i |
| `extend(list)` | Adds all items of another list |
| `remove(x)` | Removes the first x |
| `pop(i)` | Removes and returns the item at i |
| `clear()` | Removes everything |
| `index(x)` | Position of the first x |
| `count(x)` | How many times x appears |
| `sort()` | Sorts the list |
| `reverse()` | Reverses the list |
| `copy()` | Makes a copy |

```python
nums = [5, 2, 9, 2]
nums.sort()                 # [2, 2, 5, 9]
nums.sort(reverse=True)     # [9, 5, 2, 2]
print(nums.count(2))        # 2

more = [1, 2]
more.extend([3, 4])         # [1, 2, 3, 4]

print(sorted(nums))         # returns a new sorted list
```
