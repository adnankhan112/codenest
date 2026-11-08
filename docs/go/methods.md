---
title: "Go Methods"
sidebar_position: 20
---

# Go Methods

## Theory

A **method** is a function that belongs to a type. You write a **receiver** between `func` and the name.

- A **value receiver** gets a copy.
- A **pointer receiver** (`*Type`) can change the original. Use it when the method must change data, or when the struct is big.

## Practical

```go
package main

import "fmt"

type Rectangle struct {
    Width, Height float64
}

func (r Rectangle) Area() float64 {          // value receiver
    return r.Width * r.Height
}

func (r *Rectangle) Scale(factor float64) {  // pointer receiver
    r.Width *= factor
    r.Height *= factor
}

type Celsius float64

func (c Celsius) ToFahrenheit() float64 {
    return float64(c)*9/5 + 32
}

func main() {
    r := Rectangle{3, 4}
    fmt.Println(r.Area())     // 12
    r.Scale(2)
    fmt.Println(r.Area())     // 48

    fmt.Println(Celsius(100).ToFahrenheit())
}
```
