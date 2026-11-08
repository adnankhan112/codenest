---
title: C# Nullable Types and DateTime
sidebar_position: 40
---

# C# Nullable Types and DateTime

## Nullable

```csharp
int? score = null;
Console.WriteLine(score.HasValue);        // false
score = 90;
Console.WriteLine(score.Value);

string? note = null;
Console.WriteLine(note ?? "No note");
```

## DateTime

```csharp
DateTime now = DateTime.Now;
Console.WriteLine(now.Year);
Console.WriteLine(now.ToString("dd-MM-yyyy HH:mm"));

DateTime tomorrow = now.AddDays(1);
DateTime birth = new DateTime(2000, 5, 20);
TimeSpan age = now - birth;
Console.WriteLine(age.Days / 365);
```
