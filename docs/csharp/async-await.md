---
title: C# async and await
sidebar_position: 39
---

# C# async and await

`async` and `await` let your program wait for slow work (such as the internet) without freezing.

```csharp
using System.Threading.Tasks;

static async Task<string> LoadDataAsync()
{
    await Task.Delay(2000);          // pretend to wait 2 seconds
    return "Data loaded";
}

static async Task Main()
{
    Console.WriteLine("Start");
    string result = await LoadDataAsync();
    Console.WriteLine(result);
}
```

## Running tasks together

```csharp
var t1 = Task.Run(() => 1 + 1);
var t2 = Task.Run(() => 2 + 2);
int[] results = await Task.WhenAll(t1, t2);
```

## HttpClient

```csharp
using var client = new HttpClient();
string html = await client.GetStringAsync("https://example.com");
```
