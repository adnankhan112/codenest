---
title: C# Data Types
sidebar_position: 7
---

# C# Data Types

| Type | Size | Example |
| --- | --- | --- |
| `int` | 4 bytes | `100` |
| `long` | 8 bytes | `10000000000L` |
| `float` | 4 bytes | `3.14f` |
| `double` | 8 bytes | `3.14159` |
| `decimal` | 16 bytes | `19.99m` |
| `char` | 2 bytes | `'A'` |
| `bool` | 1 bit | `true` |
| `string` | varies | `"Hello"` |

```csharp
Console.WriteLine(int.MaxValue);
Console.WriteLine(sizeof(double));
```

Use `decimal` for money, because it avoids small rounding errors.
