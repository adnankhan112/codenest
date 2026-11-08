---
title: C# Loops
sidebar_position: 15
---

# C# Loops

## while

```csharp
int i = 1;
while (i <= 5)
{
    Console.WriteLine(i);
    i++;
}
```

## do while

```csharp
int n = 0;
do
{
    Console.WriteLine(n);
    n++;
} while (n < 3);
```

## for

```csharp
for (int k = 1; k <= 5; k++)
{
    Console.WriteLine(k);
}
```

## foreach

```csharp
string[] fruits = { "Apple", "Banana", "Mango" };
foreach (string f in fruits)
{
    Console.WriteLine(f);
}
```

## break and continue

```csharp
for (int x = 1; x <= 10; x++)
{
    if (x == 3) continue;    // skip 3
    if (x == 7) break;       // stop
    Console.Write(x + " ");
}
```
