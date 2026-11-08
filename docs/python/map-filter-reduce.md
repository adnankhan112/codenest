---
title: Python map, filter and reduce
sidebar_position: 21.5
---

# Python map, filter and reduce

```python
from functools import reduce

nums = [1, 2, 3, 4, 5]

doubled = list(map(lambda n: n * 2, nums))        # [2, 4, 6, 8, 10]
evens = list(filter(lambda n: n % 2 == 0, nums))  # [2, 4]
total = reduce(lambda a, b: a + b, nums)          # 15
```

## Useful built-in functions

```python
print(sum(nums))                    # 15
print(any(n > 4 for n in nums))     # True
print(all(n > 0 for n in nums))     # True
print(sorted(nums, reverse=True))   # [5, 4, 3, 2, 1]
print(list(zip([1, 2], ["a", "b"])))  # [(1, 'a'), (2, 'b')]
```

List comprehensions are often easier to read than `map` and `filter`.
