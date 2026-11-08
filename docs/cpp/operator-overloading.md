---
title: C++ Operator Overloading
sidebar_position: 22.6
---

# C++ Operator Overloading

You can give operators a meaning for your own classes.

```cpp
class Point {
public:
    int x, y;
    Point(int x, int y) : x(x), y(y) {}

    Point operator+(const Point &o) const {
        return Point(x + o.x, y + o.y);
    }

    bool operator==(const Point &o) const {
        return x == o.x && y == o.y;
    }
};

Point a(1, 2), b(3, 4);
Point c = a + b;
cout << c.x << ", " << c.y << endl;   // 4, 6
cout << (a == b) << endl;             // 0
```

## Printing with the output operator

```cpp
ostream &operator<<(ostream &os, const Point &p) {
    return os << "(" << p.x << ", " << p.y << ")";
}
cout << c << endl;
```
