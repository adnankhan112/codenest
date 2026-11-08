---
title: "Go Interfaces"
sidebar_position: 21
---

# Go Interfaces

## Theory

An **interface** is a list of methods. Any type that has those methods **automatically** follows the interface. You do not write `implements`.

Interfaces let you write code that works with many different types, such as many shapes that all have an `Area` method.

## Practical

```go
package main

import (
    "fmt"
    "math"
)

type Shape interface {
    Area() float64
}

type Circle struct{ R float64 }
type Square struct{ Side float64 }

func (c Circle) Area() float64 { return math.Pi * c.R * c.R }
func (s Square) Area() float64 { return s.Side * s.Side }

func printArea(s Shape) {
    fmt.Printf("Area: %.2f\n", s.Area())
}

func main() {
    shapes := []Shape{Circle{2}, Square{3}}
    for _, s := range shapes {
        printArea(s)
    }

    // empty interface: any value
    var anything interface{} = 42
    if n, ok := anything.(int); ok {          // type assertion
        fmt.Println("It is an int:", n)
    }

    switch v := anything.(type) {              // type switch
    case string:
        fmt.Println("text", v)
    case int:
        fmt.Println("number", v)
    }
}
```
