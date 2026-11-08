---
title: "Go Slices"
sidebar_position: 12
---

# Go Slices

## Theory

A **slice** is a flexible list. Unlike an array, it can **grow and shrink**. A slice points to a part of an underlying array.

It has a **length** (`len`, how many items it has now) and a **capacity** (`cap`, how many it can hold before Go makes it bigger).

## Practical

```go
package main

import "fmt"

func main() {
    nums := []int{10, 20, 30}

    nums = append(nums, 40, 50)          // add items
    fmt.Println(nums, len(nums), cap(nums))

    fmt.Println(nums[1:3])               // [20 30]
    fmt.Println(nums[:2], nums[2:])

    s := make([]int, 3)                  // length 3, all zero
    s2 := make([]int, 0, 10)             // length 0, capacity 10

    copyOfNums := make([]int, len(nums))
    copy(copyOfNums, nums)

    // remove the item at index 1
    nums = append(nums[:1], nums[2:]...)
    fmt.Println(nums, s, s2, copyOfNums)
}
```

Warning: two slices can share the same data. Use `copy` when you need a separate copy.
