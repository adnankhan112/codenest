---
title: Python Encapsulation
sidebar_position: 23.3
---

# Python Encapsulation

Encapsulation means keeping data safe inside a class and giving controlled access to it.

```python
class Account:
    def __init__(self, balance):
        self._balance = balance      # one underscore: "please do not touch"
        self.__pin = 1234            # two underscores: name is hidden

    @property
    def balance(self):
        return self._balance

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Amount must be positive")
        self._balance += amount

acc = Account(100)
acc.deposit(50)
print(acc.balance)     # 150
```

- A `@property` lets you read a value like an attribute.
- Python does not force privacy. The underscore is a convention that other programmers respect.
