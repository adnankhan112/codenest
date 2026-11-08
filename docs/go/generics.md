---
title: "Go Generics"
sidebar_position: 25
---

# Go Generics

## Theory

**Generics** (added in Go 1.18) let you write one function or type that works with **many types**. You put the type parameters in square brackets. A **constraint** says which types are allowed.

## Practical

```go
package main

import "fmt"

type Number interface {
    ~int | ~int64 | ~float64
}

func Sum[T Number](items []T) T {
    var total T
    for _, v := range items {
        total += v
    }
    return total
}

func Map[T, U any](items []T, f func(T) U) []U {
    result := make([]U, 0, len(items))
    for _, v := range items {
        result = append(result, f(v))
    }
    return result
}

type Stack[T any] struct {
    items []T
}

func (s *Stack[T]) Push(v T) { s.items = append(s.items, v) }

func (s *Stack[T]) Pop() (T, bool) {
    var zero T
    if len(s.items) == 0 {
        return zero, false
    }
    v := s.items[len(s.items)-1]
    s.items = s.items[:len(s.items)-1]
    return v, true
}

func main() {
    fmt.Println(Sum([]int{1, 2, 3}))
    fmt.Println(Sum([]float64{1.5, 2.5}))
    fmt.Println(Map([]int{1, 2, 3}, func(n int) string { return fmt.Sprint(n * n) }))

    s := &Stack[string]{}
    s.Push("a")
    v, _ := s.Pop()
    fmt.Println(v)
}
```
