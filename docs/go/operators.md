---
title: "Go Operators"
sidebar_position: 7
---

# Go Operators

## Theory

Operators perform actions on values: arithmetic (`+ - * / %`), comparison (`== != > < >= <=`), logical (`&& || !`) and assignment (`= += -=`).

Dividing two integers in Go gives an integer (the decimal part is dropped).

## Practical

```go
package main

import "fmt"

func main() {
    a, b := 10, 3

    fmt.Println(a+b, a-b, a*b)
    fmt.Println(a/b)                   // 3
    fmt.Println(float64(a) / float64(b))   // 3.3333333333333335
    fmt.Println(a % b)                 // 1

    fmt.Println(a > b, a == b, a != b)
    fmt.Println(a > 5 && b < 5)        // true
    fmt.Println(a > 50 || b == 3)      // true
    fmt.Println(!(a > 5))              // false

    a += 5
    a++
    fmt.Println(a)

    // Bitwise: & | ^ << >>
    fmt.Println(5&3, 5|3, 1<<3)
}
```
