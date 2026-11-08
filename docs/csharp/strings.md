---
title: C# Strings
sidebar_position: 11
---

# C# Strings

```csharp
string text = "Hello World";

Console.WriteLine(text.Length);              // 11
Console.WriteLine(text.ToUpper());
Console.WriteLine(text.ToLower());
Console.WriteLine(text.Substring(0, 5));     // Hello
Console.WriteLine(text.IndexOf("World"));    // 6
Console.WriteLine(text.Replace("World", "C#"));
Console.WriteLine(text.Contains("lo"));      // true
Console.WriteLine(text.StartsWith("He"));    // true
Console.WriteLine("  hi  ".Trim());

string[] parts = "a,b,c".Split(',');
string joined = string.Join("-", parts);     // a-b-c
```

## StringBuilder

```csharp
using System.Text;

var sb = new StringBuilder();
sb.Append("Hello").Append(" ").Append("World");
Console.WriteLine(sb.ToString());
```

Strings cannot be changed. Methods return a new string.
