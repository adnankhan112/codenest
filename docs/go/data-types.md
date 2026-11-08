---
title: "Go Data Types"
sidebar_position: 5
---

# Go Data Types

## Theory

Go has several basic types:

- **Whole numbers:** `int`, `int8`, `int16`, `int32`, `int64`, and `uint` (only positive).
- **Decimal numbers:** `float32`, `float64`.
- **Text:** `string`.
- **True or false:** `bool`.
- **Characters:** `rune` (one Unicode character) and `byte`.

## Practical

```go
package main

import "fmt"

func main() {
    var a int = 100
    var b float64 = 3.14
    var c string = "Hello"
    var d bool = true
    var e rune = 'A'
    var f byte = 65

    fmt.Println(a, b, c, d, e, f)
    fmt.Printf("%T %T %T %T\n", a, b, c, d)   // shows the types
}
```

Use `int` for whole numbers and `float64` for decimals in most programs.
