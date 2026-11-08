---
title: "Go Variadic Functions and Closures"
sidebar_position: 16
---

# Go Variadic Functions and Closures

## Theory

- A **variadic function** accepts any number of arguments. You write `...` before the type.
- An **anonymous function** has no name. You can store it in a variable.
- A **closure** is a function that remembers the variables around it, even after the outer function has finished.

## Practical

```go
package main

import "fmt"

func sum(numbers ...int) int {
    total := 0
    for _, n := range numbers {
        total += n
    }
    return total
}

func counter() func() int {
    count := 0
    return func() int {          // remembers count
        count++
        return count
    }
}

func main() {
    fmt.Println(sum(1, 2, 3, 4))
    nums := []int{5, 6}
    fmt.Println(sum(nums...))            // pass a slice

    hello := func(name string) {
        fmt.Println("Hello,", name)
    }
    hello("Ali")

    next := counter()
    fmt.Println(next(), next(), next())  // 1 2 3

    func() {
        fmt.Println("Runs at once")
    }()
}
```
