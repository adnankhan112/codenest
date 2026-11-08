---
title: C++ Header Files and Multi-File Projects
sidebar_position: 27.5
---

# C++ Header Files and Multi-File Projects

**student.h**

```cpp
#ifndef STUDENT_H
#define STUDENT_H

#include <string>

class Student {
    std::string name;
public:
    Student(std::string n);
    std::string getName() const;
};

#endif
```

**student.cpp**

```cpp
#include "student.h"

Student::Student(std::string n) : name(n) {}
std::string Student::getName() const { return name; }
```

**main.cpp**

```cpp
#include <iostream>
#include "student.h"

int main() {
    Student s("Ali");
    std::cout << s.getName() << std::endl;
}
```

Compile everything:

```
g++ main.cpp student.cpp -o app
```

Put declarations in `.h` files and definitions in `.cpp` files.
