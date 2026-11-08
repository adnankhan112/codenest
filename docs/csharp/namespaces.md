---
title: C# Namespaces
sidebar_position: 30
---

# C# Namespaces

A namespace groups related classes and stops name clashes.

```csharp
namespace Shop.Models
{
    class Product
    {
        public string Name;
    }
}

namespace Shop.App
{
    using Shop.Models;

    class Program
    {
        static void Main()
        {
            var p = new Product { Name = "Pen" };
            Console.WriteLine(p.Name);
        }
    }
}
```

## File scoped namespace (C# 10)

```csharp
namespace Shop.Models;

class Customer { }
```
