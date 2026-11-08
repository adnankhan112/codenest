---
title: "Go Context"
sidebar_position: 29
---

# Go Context

## Theory

A **context** carries a **deadline, a cancel signal** and values across goroutines and function calls. It is used to stop work that is no longer needed, for example when a user closes a web page.

## Practical

```go
package main

import (
    "context"
    "fmt"
    "time"
)

func work(ctx context.Context) {
    for {
        select {
        case <-ctx.Done():
            fmt.Println("stopped:", ctx.Err())
            return
        default:
            fmt.Println("working...")
            time.Sleep(300 * time.Millisecond)
        }
    }
}

func main() {
    ctx, cancel := context.WithTimeout(context.Background(), 1*time.Second)
    defer cancel()

    go work(ctx)
    time.Sleep(2 * time.Second)
}
```

Other helpers: `context.WithCancel` (stop by hand) and `context.WithValue` (carry a value).
