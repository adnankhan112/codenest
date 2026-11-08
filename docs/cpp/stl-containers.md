---
title: C++ STL Containers
sidebar_position: 23.3
---

# C++ STL Containers

| Container | Header | Use |
| --- | --- | --- |
| `vector` | `vector` | Resizable array |
| `list` | `list` | Doubly linked list |
| `deque` | `deque` | Add or remove at both ends |
| `set` | `set` | Unique, sorted items |
| `map` | `map` | Key and value, sorted by key |
| `unordered_map` | `unordered_map` | Key and value, very fast lookup |
| `stack` | `stack` | Last in, first out |
| `queue` | `queue` | First in, first out |

```cpp
#include <set>
#include <stack>
#include <queue>

set<int> s = {3, 1, 3, 2};          // 1 2 3
s.insert(5);

stack<int> st;
st.push(1); st.push(2);
cout << st.top() << endl;           // 2
st.pop();

queue<string> q;
q.push("A"); q.push("B");
cout << q.front() << endl;          // A
q.pop();
```
