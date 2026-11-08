---
title: "Go Composition (Struct Embedding)"
sidebar_position: 22
---

# Go Composition (Struct Embedding)

## Theory

Go does not have inheritance. Instead it uses **composition**: you put one struct **inside** another. The outer struct then gets all the fields and methods of the inner one.

This idea is: "has a" instead of "is a".

## Practical

```go
package main

import "fmt"

type Person struct {
    Name string
    Age  int
}

func (p Person) Greet() string {
    return "Hi, I am " + p.Name
}

type Student struct {
    Person            // embedded
    School string
}

func main() {
    s := Student{
        Person: Person{Name: "Ali", Age: 20},
        School: "CodeNest School",
    }

    fmt.Println(s.Name)        // from Person
    fmt.Println(s.Greet())     // method from Person
    fmt.Println(s.School)
}
```
