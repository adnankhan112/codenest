---
title: C# Access Modifiers
sidebar_position: 22
---

# C# Access Modifiers

| Modifier | Who can use it |
| --- | --- |
| `public` | Everyone |
| `private` | Only the same class (the default for members) |
| `protected` | The class and its child classes |
| `internal` | The same project |
| `protected internal` | Same project or child classes |

```csharp
class Account
{
    private double balance;      // hidden
    public string Owner;         // open
}
```
