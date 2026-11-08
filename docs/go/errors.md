---
title: "Go Error Handling"
sidebar_position: 23
---

# Go Error Handling

## Theory

In Go, an error is a normal value of type `error`. A function that can fail returns the error as its **last** result. The caller checks `if err != nil`.

This makes errors visible, and forces you to think about them.

## Practical

```go
package main

import (
    "errors"
    "fmt"
    "os"
)

var ErrNegative = errors.New("number is negative")

func sqrt(n float64) (float64, error) {
    if n < 0 {
        return 0, ErrNegative
    }
    return n, nil
}

type ValidationError struct {
    Field string
}

func (e ValidationError) Error() string {
    return "invalid field: " + e.Field
}

func main() {
    _, err := sqrt(-4)
    if err != nil {
        fmt.Println("Error:", err)
    }

    if errors.Is(err, ErrNegative) {
        fmt.Println("It is the negative error")
    }

    wrapped := fmt.Errorf("sqrt failed: %w", err)   // add context
    fmt.Println(wrapped)

    _, err = os.Open("missing.txt")
    if err != nil {
        fmt.Println(err)
    }

    var verr error = ValidationError{"email"}
    fmt.Println(verr)
}
```
