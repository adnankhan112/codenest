---
title: "Go Goroutines"
sidebar_position: 26
---

# Go Goroutines

## Theory

A **goroutine** is a very light "worker" that runs at the same time as other code. You start one by writing the word `go` before a function call.

Goroutines are what make Go special. You can run thousands of them easily.

**Concurrency** means doing many things in overlapping time. **Parallelism** means really running at the same moment on many CPU cores. Go can do both.

## Practical

```go
package main

import (
    "fmt"
    "sync"
    "time"
)

func say(text string) {
    for i := 1; i <= 3; i++ {
        fmt.Println(text, i)
        time.Sleep(100 * time.Millisecond)
    }
}

func main() {
    go say("goroutine")        // runs at the same time
    say("main")

    // Wait for many goroutines with WaitGroup
    var wg sync.WaitGroup
    for i := 1; i <= 3; i++ {
        wg.Add(1)
        go func(id int) {
            defer wg.Done()
            fmt.Println("worker", id)
        }(i)
    }
    wg.Wait()
}
```

If `main` ends, all goroutines stop. That is why we wait with `WaitGroup`.
