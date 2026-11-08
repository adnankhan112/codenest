---
title: C++ Static Members and Friends
sidebar_position: 20.8
---

# C++ Static Members and Friends

## Static members

A static member belongs to the class, not to a single object.

```cpp
class Student {
public:
    static int count;
    Student() { count++; }
};

int Student::count = 0;

int main() {
    Student a, b, c;
    cout << Student::count << endl;   // 3
}
```

## Friend functions

A friend function can read the private data of a class.

```cpp
class Box {
private:
    int size = 5;
    friend void show(const Box &b);
};

void show(const Box &b) {
    cout << b.size << endl;
}
```
