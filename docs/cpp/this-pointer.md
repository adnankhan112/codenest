---
title: C++ Member Functions and the this Pointer
sidebar_position: 19.5
---

# C++ Member Functions and the this Pointer

```cpp
class Rectangle {
private:
    int width, height;

public:
    Rectangle(int width, int height) {
        this->width = width;       // this points to the current object
        this->height = height;
    }

    int area() const;              // declared inside the class
};

int Rectangle::area() const {      // defined outside the class
    return width * height;
}

Rectangle r(3, 4);
cout << r.area() << endl;   // 12
```

- `this` is a pointer to the object that called the function.
- `const` after a function means it does not change the object.
- `ClassName::function` is used to define a function outside the class.
