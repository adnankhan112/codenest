---
title: C++ Namespaces
sidebar_position: 24.5
---

# C++ Namespaces

A namespace groups names so they do not clash.

```cpp
namespace math {
    int add(int a, int b) { return a + b; }
}

namespace text {
    string add(string a, string b) { return a + b; }
}

int main() {
    cout << math::add(1, 2) << endl;
    cout << text::add("a", "b") << endl;
}
```

## using

```cpp
using namespace std;          // everything from std
using std::cout;              // only cout
```

In big projects, avoid `using namespace std;` in header files.
