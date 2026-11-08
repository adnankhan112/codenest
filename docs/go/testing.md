---
title: "Go Testing"
sidebar_position: 35
---

# Go Testing

## Theory

Go has testing built in. A test file ends with `_test.go`. A test function starts with `Test` and takes `*testing.T`.

A **table-driven test** is a common style: you make a list of inputs and expected results, and loop over it.

## Practical

**mathutil.go**

```go
package main

func Add(a, b int) int {
    return a + b
}
```

**mathutil_test.go**

```go
package main

import "testing"

func TestAdd(t *testing.T) {
    got := Add(2, 3)
    if got != 5 {
        t.Errorf("Add(2, 3) = %d; want 5", got)
    }
}

func TestAddTable(t *testing.T) {
    tests := []struct {
        a, b, want int
    }{
        {1, 1, 2},
        {-1, 1, 0},
        {10, 5, 15},
    }
    for _, tc := range tests {
        if got := Add(tc.a, tc.b); got != tc.want {
            t.Errorf("Add(%d, %d) = %d; want %d", tc.a, tc.b, got, tc.want)
        }
    }
}

func BenchmarkAdd(b *testing.B) {
    for i := 0; i < b.N; i++ {
        Add(2, 3)
    }
}
```

Run:

```
go test
go test -v
go test -bench .
```
