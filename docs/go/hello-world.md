---
title: "Go Hello World and Syntax"
sidebar_position: 3
---

# Go Hello World and Syntax

## Theory

Every Go file starts with a **package** name. A program that you can run must be in `package main` and must have a function called `main`. That is the place where the program starts.

Go uses curly braces for blocks. Semicolons are not needed, because Go adds them for you.

## Practical

```go
package main

import (
    "fmt"
    "math"
)

func main() {
    fmt.Println("Hello")
    fmt.Println("Square root of 16 is", math.Sqrt(16))
}
```

Rules:

- `import` brings in other packages.
- A name that starts with a **capital letter** (like `Println`) can be used from other packages. A small letter means private.
- Go refuses to compile if you import something and do not use it, or if you declare a variable and do not use it.
- Use `gofmt` (or `go fmt`) to format your code in the standard style.

## Comments

```go
// single line comment

/* multi
   line comment */
```
