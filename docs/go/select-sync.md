---
title: "Go select, Mutex and sync"
sidebar_position: 28
---

# Go select, Mutex and sync

## Theory

- `select` waits on **many channels** at once and runs the first one that is ready. It can also handle timeouts.
- A **race condition** happens when two goroutines change the same variable at the same time. A **Mutex** (mutual exclusion lock) lets only one goroutine in at a time.

## Practical

```go
package main

import (
    "fmt"
    "sync"
    "time"
)

type SafeCounter struct {
    mu    sync.Mutex
    count int
}

func (c *SafeCounter) Add() {
    c.mu.Lock()
    c.count++
    c.mu.Unlock()
}

func main() {
    a := make(chan string)
    b := make(chan string)

    go func() { time.Sleep(100 * time.Millisecond); a <- "from a" }()
    go func() { time.Sleep(300 * time.Millisecond); b <- "from b" }()

    for i := 0; i < 2; i++ {
        select {
        case msg := <-a:
            fmt.Println(msg)
        case msg := <-b:
            fmt.Println(msg)
        case <-time.After(1 * time.Second):
            fmt.Println("timeout")
        }
    }

    var wg sync.WaitGroup
    c := SafeCounter{}
    for i := 0; i < 100; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            c.Add()
        }()
    }
    wg.Wait()
    fmt.Println(c.count)       // always 100
}
```

Check for race problems with `go run -race main.go`.
