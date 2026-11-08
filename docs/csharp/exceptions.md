---
title: C# Exceptions
sidebar_position: 34
---

# C# Exceptions

```csharp
try
{
    int[] a = new int[3];
    Console.WriteLine(a[5]);
}
catch (IndexOutOfRangeException e)
{
    Console.WriteLine("Bad index");
}
catch (Exception e)
{
    Console.WriteLine("Error: " + e.Message);
}
finally
{
    Console.WriteLine("Always runs");
}
```

## throw

```csharp
static void SetAge(int age)
{
    if (age < 0)
        throw new ArgumentException("Age cannot be negative");
}
```

## Custom exception

```csharp
class MyException : Exception
{
    public MyException(string message) : base(message) { }
}
```
