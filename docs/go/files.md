---
title: "Go File Handling"
sidebar_position: 30
---

# Go File Handling

## Theory

The `os` package reads and writes files. Always check the error, and close the file when you are done (usually with `defer`).

## Practical

```go
package main

import (
    "bufio"
    "fmt"
    "os"
)

func main() {
    // Quick write and read
    err := os.WriteFile("notes.txt", []byte("Hello file\nSecond line\n"), 0644)
    if err != nil {
        fmt.Println(err)
        return
    }

    data, err := os.ReadFile("notes.txt")
    if err != nil {
        fmt.Println(err)
        return
    }
    fmt.Println(string(data))

    // Read line by line
    f, err := os.Open("notes.txt")
    if err != nil {
        fmt.Println(err)
        return
    }
    defer f.Close()

    scanner := bufio.NewScanner(f)
    for scanner.Scan() {
        fmt.Println(scanner.Text())
    }

    // Append
    af, _ := os.OpenFile("notes.txt", os.O_APPEND|os.O_WRONLY, 0644)
    af.WriteString("Third line\n")
    af.Close()

    os.Remove("notes.txt")
}
```
