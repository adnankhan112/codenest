---
title: "Go Functions"
sidebar_position: 15
---

# Go Functions

## Theory

A **function** is a block of code with a name that you can run many times. In Go, you write the parameter types after the names, and the return type after the brackets.

A very special Go feature: a function can **return more than one value**.

## Practical

```go
package main

import "fmt"

func add(a int, b int) int {
    return a + b
}

func sameType(a, b int) int {        // short form when types match
    return a * b
}

func divide(a, b float64) (float64, error) {      // two return values
    if b == 0 {
        return 0, fmt.Errorf("cannot divide by zero")
    }
    return a / b, nil
}

func minMax(nums []int) (min, max int) {          // named results
    min, max = nums[0], nums[0]
    for _, n := range nums {
        if n < min { min = n }
        if n > max { max = n }
    }
    return
}

func main() {
    fmt.Println(add(2, 3))
    result, err := divide(10, 0)
    if err != nil {
        fmt.Println("Error:", err)
    }
    fmt.Println(result)
    fmt.Println(minMax([]int{4, 9, 1}))
}
```
