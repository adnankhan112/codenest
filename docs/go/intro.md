---
title: "Go Introduction"
sidebar_position: 1
---

# Go Introduction

## Theory

**Go** (also called **Golang**) is a programming language made by Google in 2009. It is simple, very fast and is very good at doing **many tasks at the same time** (this is called concurrency).

Go programs are **compiled**. The compiler turns your code into one program file that runs directly on the computer, with no extra software needed.

Go is used for web servers, cloud tools (Docker and Kubernetes are written in Go), command line tools and network programs.

## Practical

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, Go!")
}
```

Why people like Go:

- Easy to read and learn.
- Compiles in seconds.
- Strong tools built in (formatting, testing).
- Great for servers that handle many users.
