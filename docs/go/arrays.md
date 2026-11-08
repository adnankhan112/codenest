---
title: "Go Arrays"
sidebar_position: 11
---

# Go Arrays

## Theory

An **array** is a fixed-size list of values of the same type. The size is part of the type: an array of 3 numbers is a different type from an array of 4 numbers.

Because the size cannot change, Go programmers use **slices** most of the time.

## Practical

```go
package main

import "fmt"

func main() {
    var nums [3]int
    nums[0] = 10
    nums[1] = 20

    colors := [3]string{"red", "green", "blue"}
    auto := [...]int{1, 2, 3, 4}         // size is counted for you

    fmt.Println(nums, colors, len(auto))

    for i, c := range colors {
        fmt.Println(i, c)
    }

    grid := [2][3]int{{1, 2, 3}, {4, 5, 6}}
    fmt.Println(grid[1][2])              // 6
}
```
