---
title: "Go Variables and Constants"
sidebar_position: 4
---

# Go Variables and Constants

## Theory

A **variable** stores a value. In Go every variable has a type. You can write the type, or let Go work it out.

A **constant** is a value that never changes.

The short form `:=` creates and sets a variable. It works only inside functions.

## Practical

```go
package main

import "fmt"

const Pi = 3.14159
const (
    Monday = 1
    Tuesday = 2
)

var company string = "CodeNest"      // can be used outside functions too

func main() {
    var age int = 20
    var name = "Ali"                 // type is guessed
    city := "Lahore"                 // short form
    a, b := 1, 2                     // many at once

    var count int                    // gets the zero value: 0
    var text string                  // zero value: ""
    var ok bool                      // zero value: false

    age = 21
    fmt.Println(name, age, city, a, b, count, text, ok, Pi)
}
```

Every type has a **zero value**: `0` for numbers, `""` for text, `false` for booleans and `nil` for pointers.
