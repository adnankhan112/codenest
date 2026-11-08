---
title: Python Testing and Logging
sidebar_position: 27.9
---

# Python Testing and Logging

## Testing with unittest

```python
import unittest

def add(a, b):
    return a + b

class TestAdd(unittest.TestCase):
    def test_numbers(self):
        self.assertEqual(add(2, 3), 5)

    def test_negative(self):
        self.assertEqual(add(-1, 1), 0)

if __name__ == "__main__":
    unittest.main()
```

## Logging

```python
import logging

logging.basicConfig(level=logging.INFO)
logging.debug("Hidden at INFO level")
logging.info("Program started")
logging.warning("Disk is almost full")
logging.error("Something failed")
```

Use logging instead of `print` for real applications.
