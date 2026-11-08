---
title: "Go defer, panic and recover"
sidebar_position: 17
---

# Go defer, panic and recover

## Theory

- `defer` delays a function call until the surrounding function ends. It is perfect for cleaning up, such as closing files.
- `panic` stops the program with a serious error.
- `recover` catches a panic, so the program can continue.

For normal errors, Go prefers returning an `error` value. Use `panic` only for situations that should never happen.

## Practical

```go
package main

import "fmt"

func main() {
    defer fmt.Println("3. Runs last")
    fmt.Println("1. Start")
    fmt.Println("2. Middle")

    for i := 1; i <= 3; i++ {
        defer fmt.Println("deferred", i)     // runs in reverse: 3, 2, 1
    }

    safe()
    fmt.Println("Program continues")
}

func safe() {
    defer func() {
        if r := recover(); r != nil {
            fmt.Println("Recovered from:", r)
        }
    }()
    panic("something went wrong")
}
```
