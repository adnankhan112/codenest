---
title: C++ Recursion
sidebar_position: 18.5
---

# C++ Recursion

A recursive function calls itself and needs a base case.

```cpp
int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

int fib(int n) {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
}

cout << factorial(5) << endl;   // 120
cout << fib(7) << endl;         // 13
```

## Tower of Hanoi idea

```cpp
void hanoi(int n, char from, char to, char via) {
    if (n == 0) return;
    hanoi(n - 1, from, via, to);
    cout << "Move disk " << n << " from " << from << " to " << to << endl;
    hanoi(n - 1, via, to, from);
}
```
