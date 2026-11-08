---
title: "Go Structs"
sidebar_position: 19
---

# Go Structs

## Theory

A **struct** groups related values (called fields) into one type. Go has no classes, so structs are the main way to model things such as a student or a car.

## Practical

```go
package main

import "fmt"

type Student struct {
    Name  string
    Age   int
    Marks float64
}

func main() {
    s1 := Student{Name: "Ali", Age: 20, Marks: 85.5}
    s2 := Student{"Sara", 22, 92}

    s1.Age = 21
    fmt.Println(s1.Name, s1.Age)
    fmt.Println(s2)
    fmt.Printf("%+v\n", s1)        // prints field names too

    p := &s1                       // pointer to a struct
    p.Marks = 90                   // Go lets you write p.Marks

    // anonymous struct
    point := struct{ X, Y int }{3, 4}
    fmt.Println(point)

    // slice of structs
    students := []Student{s1, s2}
    for _, s := range students {
        fmt.Println(s.Name)
    }
}
```
