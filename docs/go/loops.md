---
title: "Go Loops"
sidebar_position: 10
---

# Go Loops

## Theory

Go has only one loop keyword: `for`. It can work in different ways: like a classic `for`, like a `while`, as an endless loop, or with `range` to go through a list.

`break` stops a loop and `continue` skips to the next round.

## Practical

```go
package main

import "fmt"

func main() {
    for i := 1; i <= 3; i++ {
        fmt.Println(i)
    }

    n := 1
    for n <= 3 {                 // like while
        n++
    }

    count := 0
    for {                        // endless loop
        count++
        if count == 3 {
            break
        }
    }

    fruits := []string{"Apple", "Banana", "Mango"}
    for index, fruit := range fruits {
        fmt.Println(index, fruit)
    }

    for _, f := range fruits {   // _ ignores the index
        fmt.Println(f)
    }

    for i := 1; i <= 5; i++ {
        if i == 2 {
            continue
        }
        fmt.Print(i, " ")
    }
}
```
