---
title: C# Type Casting
sidebar_position: 8
---

# C# Type Casting

## Implicit (automatic)

```csharp
int a = 10;
double b = a;      // 10
```

## Explicit (manual)

```csharp
double price = 9.78;
int whole = (int)price;    // 9
```

## Convert and Parse

```csharp
int n = int.Parse("42");
double d = Convert.ToDouble("3.14");
string s = 100.ToString();

bool ok = int.TryParse("abc", out int result);   // false, no error
```

`TryParse` is safer, because it does not crash if the text is not a number.
