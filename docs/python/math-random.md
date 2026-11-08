---
title: Python math and random Modules
sidebar_position: 24.3
---

# Python math and random Modules

## math

```python
import math

print(math.sqrt(49))     # 7.0
print(math.ceil(4.2))    # 5
print(math.floor(4.8))   # 4
print(math.pow(2, 3))    # 8.0
print(math.factorial(5)) # 120
print(math.pi)
print(math.gcd(12, 18))  # 6
```

## random

```python
import random

print(random.randint(1, 10))          # whole number from 1 to 10
print(random.random())                # between 0 and 1
print(random.choice(["a", "b", "c"]))
cards = [1, 2, 3, 4, 5]
random.shuffle(cards)
print(random.sample(cards, 2))        # 2 different items
```
