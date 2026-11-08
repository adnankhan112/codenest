---
title: C++ Destructors
sidebar_position: 20.5
---

# C++ Destructors

A destructor runs automatically when an object is destroyed. It has the name of the class with a `~` in front.

```cpp
class Buffer {
private:
    int *data;

public:
    Buffer(int size) {
        data = new int[size];
        cout << "Created" << endl;
    }

    ~Buffer() {
        delete[] data;
        cout << "Destroyed" << endl;
    }
};

int main() {
    Buffer b(10);
    return 0;      // Destroyed is printed here
}
```

Use destructors to release resources such as memory, files and network connections. This idea is called **RAII**.
