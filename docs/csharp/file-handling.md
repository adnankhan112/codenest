---
title: C# File Handling
sidebar_position: 35
---

# C# File Handling

```csharp
using System.IO;

File.WriteAllText("notes.txt", "Hello file\n");
File.AppendAllText("notes.txt", "Second line\n");

string all = File.ReadAllText("notes.txt");
string[] lines = File.ReadAllLines("notes.txt");

Console.WriteLine(File.Exists("notes.txt"));
File.Delete("notes.txt");

// using StreamWriter and StreamReader
using (var w = new StreamWriter("data.txt"))
{
    w.WriteLine("Line one");
}

using (var r = new StreamReader("data.txt"))
{
    string line;
    while ((line = r.ReadLine()) != null)
    {
        Console.WriteLine(line);
    }
}
```

The `using` block closes the file automatically.
