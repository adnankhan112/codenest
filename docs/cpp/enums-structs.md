---
title: C++ Structs and Enums
sidebar_position: 27.2
---

# C++ Structs and Enums

## struct

A struct is like a class whose members are public by default.

```cpp
struct Student {
    string name;
    int marks;
};

Student s = {"Ali", 85};
cout << s.name << endl;
```

## enum class

```cpp
enum class Color { Red, Green, Blue };

Color c = Color::Green;
if (c == Color::Green) {
    cout << "Green" << endl;
}
```

`enum class` keeps names inside the enum, which avoids clashes and is safer than plain `enum`.
