---
title: "Go Channels"
sidebar_position: 27
---

# Go Channels

## Theory

A **channel** is a pipe that goroutines use to **send and receive values** safely. Go's motto: "Do not communicate by sharing memory; share memory by communicating."

- `ch <- value` sends a value.
- `value := <-ch` receives a value.
- An **unbuffered** channel waits until both sides are ready. A **buffered** channel has some room.

## Practical

```go
package main

import "fmt"

func square(n int, out chan int) {
    out <- n * n
}

func producer(ch chan<- int) {
    for i := 1; i <= 3; i++ {
        ch <- i
    }
    close(ch)                     // tell receivers: no more values
}

func main() {
    result := make(chan int)
    go square(5, result)
    fmt.Println(<-result)         // 25

    numbers := make(chan int, 3)  // buffered channel
    go producer(numbers)
    for n := range numbers {      // reads until the channel is closed
        fmt.Println("got", n)
    }
}
```
