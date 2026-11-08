---
title: "Go Packages and Modules"
sidebar_position: 24
---

# Go Packages and Modules

## Theory

A **package** is a folder of Go files that share the same package name. It groups related code. A **module** is a whole project, with a `go.mod` file, that can contain many packages.

Names that begin with a **capital letter** are exported (public). Names with a small letter are private to the package.

## Practical

Folder layout:

```
myapp/
  go.mod
  main.go
  mathutil/
    mathutil.go
```

**mathutil/mathutil.go**

```go
package mathutil

func Add(a, b int) int {       // capital A: exported
    return a + b
}

func secret() int {            // small s: private
    return 42
}
```

**main.go**

```go
package main

import (
    "fmt"
    "myapp/mathutil"
)

func main() {
    fmt.Println(mathutil.Add(2, 3))
}
```

Install an outside package:

```
go get github.com/google/uuid
go mod tidy
```
