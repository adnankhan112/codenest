---
title: "Go Pointers"
sidebar_position: 18
---

# Go Pointers

## Theory

A **pointer** stores the **memory address** of a value, instead of the value itself. With a pointer, a function can change the original variable.

- `&x` gives the address of `x`.
- `*p` gives the value that pointer `p` points to.

Go has no pointer arithmetic, so pointers are safe.

## Practical

```go
package main

import "fmt"

func addOne(n *int) {
    *n = *n + 1
}

func main() {
    x := 10
    p := &x

    fmt.Println(x)       // 10
    fmt.Println(p)       // an address like 0xc000012345
    fmt.Println(*p)      // 10

    *p = 20
    fmt.Println(x)       // 20

    addOne(&x)
    fmt.Println(x)       // 21

    n := new(int)        // pointer to a new int (zero value)
    *n = 5
    fmt.Println(*n)
}
```

Without a pointer, a function only gets a **copy** of the value.
