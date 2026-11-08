---
title: C++ Variable Scope
sidebar_position: 18.3
---

# C++ Variable Scope

```cpp
int globalValue = 1;           // visible in the whole file

void show() {
    int local = 2;             // visible only inside show
    cout << globalValue << local << endl;
}

int main() {
    {
        int inner = 3;         // visible only in this block
    }
    // inner does not exist here
    return 0;
}
```

## static local variable

```cpp
void counter() {
    static int count = 0;
    count++;
    cout << count << endl;
}
```

Each call prints a higher number, because a static variable keeps its value.

## Scope operator

```cpp
int x = 10;
int main() {
    int x = 5;
    cout << x << " " << ::x << endl;   // 5 10
}
```
