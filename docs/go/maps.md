---
title: "Go Maps"
sidebar_position: 13
---

# Go Maps

## Theory

A **map** stores **key and value** pairs, like a dictionary. You find a value quickly by its key. Keys must be unique.

## Practical

```go
package main

import "fmt"

func main() {
    ages := map[string]int{
        "Ali":  20,
        "Sara": 22,
    }

    ages["Hina"] = 19
    fmt.Println(ages["Ali"])

    value, ok := ages["Zed"]        // ok tells if the key exists
    if !ok {
        fmt.Println("Zed not found", value)
    }

    delete(ages, "Sara")

    for name, age := range ages {
        fmt.Println(name, age)
    }

    scores := make(map[string]int)
    scores["math"] = 90
    fmt.Println(len(scores))
}
```

A missing key gives the zero value, so always use the `value, ok` form when you need to be sure.
