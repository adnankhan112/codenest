---
title: C# Lambda, Delegates and Events
sidebar_position: 36
---

# C# Lambda, Delegates and Events

## Lambda

```csharp
Func<int, int> square = x => x * x;
Console.WriteLine(square(5));              // 25

Action<string> hello = name => Console.WriteLine("Hi " + name);
hello("Ali");

Predicate<int> isEven = n => n % 2 == 0;
```

## Delegate

A delegate is a variable that holds a method.

```csharp
delegate int Operation(int a, int b);

Operation add = (a, b) => a + b;
Console.WriteLine(add(2, 3));
```

## Event

```csharp
class Button
{
    public event Action Clicked;
    public void Click() => Clicked?.Invoke();
}

var b = new Button();
b.Clicked += () => Console.WriteLine("Button clicked");
b.Click();
```
