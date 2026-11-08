---
title: "Go Type Conversion"
sidebar_position: 6
---

# Go Type Conversion

## Theory

Go never changes types automatically. If you want to mix types, you must **convert** them yourself with `Type(value)`. This stops hidden bugs.

For text and numbers, use the `strconv` package.

## Practical

```go
package main

import (
    "fmt"
    "strconv"
)

func main() {
    var i int = 10
    var f float64 = float64(i) * 1.5
    var back int = int(f)               // cuts the decimal part

    n, err := strconv.Atoi("42")        // text to int
    if err != nil {
        fmt.Println("Not a number")
    }

    s := strconv.Itoa(100)              // int to text
    d, _ := strconv.ParseFloat("3.14", 64)

    fmt.Println(f, back, n, s, d)
}
```
