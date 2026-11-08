---
title: C++ Abstract Classes and Interfaces
sidebar_position: 22.3
---

# C++ Abstract Classes and Interfaces

An abstract class has at least one **pure virtual function**. You cannot create an object of it.

```cpp
class Shape {
public:
    virtual double area() const = 0;     // pure virtual
    virtual ~Shape() {}
};

class Circle : public Shape {
    double r;
public:
    Circle(double r) : r(r) {}
    double area() const override { return 3.14159 * r * r; }
};

class Square : public Shape {
    double s;
public:
    Square(double s) : s(s) {}
    double area() const override { return s * s; }
};

Shape *list[] = { new Circle(2), new Square(3) };
for (Shape *p : list) {
    cout << p->area() << endl;
    delete p;
}
```

Each child class must provide its own `area`.
