---
title: "Go Time and Random Numbers"
sidebar_position: 32
---

# Go Time and Random Numbers

## Theory

The `time` package works with dates, times and waiting. Go formats dates with a special reference date: **Mon Jan 2 15:04:05 2006**. You write the layout using those exact numbers.

The `math/rand` package makes random numbers.

## Practical

```go
package main

import (
    "fmt"
    "math/rand"
    "time"
)

func main() {
    now := time.Now()
    fmt.Println(now)
    fmt.Println(now.Format("02-01-2006 15:04"))
    fmt.Println(now.Year(), now.Month(), now.Day(), now.Weekday())

    tomorrow := now.Add(24 * time.Hour)
    fmt.Println(tomorrow.Sub(now))

    t, _ := time.Parse("2006-01-02", "2026-12-25")
    fmt.Println(t)

    start := time.Now()
    time.Sleep(200 * time.Millisecond)
    fmt.Println("took", time.Since(start))

    fmt.Println(rand.Intn(6) + 1)            // dice: 1 to 6
    items := []string{"a", "b", "c"}
    rand.Shuffle(len(items), func(i, j int) { items[i], items[j] = items[j], items[i] })
    fmt.Println(items)
}
```
