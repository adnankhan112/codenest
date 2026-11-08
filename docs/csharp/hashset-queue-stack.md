---
title: C# HashSet, Queue and Stack
sidebar_position: 33
---

# C# HashSet, Queue and Stack

```csharp
var set = new HashSet<int> { 3, 1, 3 };   // unique items: 3 and 1
set.Add(5);
Console.WriteLine(set.Contains(1));

var queue = new Queue<string>();          // first in, first out
queue.Enqueue("A");
queue.Enqueue("B");
Console.WriteLine(queue.Dequeue());       // A

var stack = new Stack<int>();             // last in, first out
stack.Push(1);
stack.Push(2);
Console.WriteLine(stack.Pop());           // 2
```
