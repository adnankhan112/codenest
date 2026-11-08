---
title: "Go If, Else and Switch"
sidebar_position: 9
---

# Go If, Else and Switch

## Theory

`if` runs code when a condition is true. Go does not need brackets around the condition, but the braces `{ }` are required.

`switch` chooses between many options. In Go, each case ends by itself, so you do not need `break`.

## Practical

```go
package main

import "fmt"

func main() {
    marks := 75

    if marks >= 80 {
        fmt.Println("Grade A")
    } else if marks >= 60 {
        fmt.Println("Grade B")
    } else {
        fmt.Println("Try again")
    }

    // if with a short statement
    if n := marks * 2; n > 100 {
        fmt.Println("Big", n)
    }

    day := 3
    switch day {
    case 1:
        fmt.Println("Monday")
    case 2, 3:
        fmt.Println("Tuesday or Wednesday")
    default:
        fmt.Println("Another day")
    }

    // switch without a value
    switch {
    case marks >= 90:
        fmt.Println("A")
    case marks >= 70:
        fmt.Println("B")
    default:
        fmt.Println("C")
    }
}
```
