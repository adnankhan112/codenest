---
title: C++ Templates
sidebar_position: 22.9
---

# C++ Templates

Templates let you write code once for many types.

## Function template

```cpp
template <typename T>
T biggest(T a, T b) {
    return (a > b) ? a : b;
}

cout << biggest(3, 7) << endl;        // 7
cout << biggest(2.5, 1.5) << endl;    // 2.5
cout << biggest<string>("a", "b") << endl;
```

## Class template

```cpp
template <typename T>
class Box {
    T value;
public:
    Box(T v) : value(v) {}
    T get() const { return value; }
};

Box<int> a(5);
Box<string> b("hello");
```

The STL containers, such as `vector<int>`, are class templates.
