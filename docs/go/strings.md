---
title: "Go Strings and Runes"
sidebar_position: 14
---

# Go Strings and Runes

## Theory

A **string** is a read-only list of bytes. Go text uses **UTF-8**, so one letter can use more than one byte (for example Urdu letters).

A **rune** is one real character. Use `[]rune(text)` when you need to work with characters, not bytes.

The `strings` package has many helpers.

## Practical

```go
package main

import (
    "fmt"
    "strings"
)

func main() {
    s := "Hello, Go"

    fmt.Println(len(s))
    fmt.Println(strings.ToUpper(s))
    fmt.Println(strings.Contains(s, "Go"))
    fmt.Println(strings.Replace(s, "Go", "World", 1))
    fmt.Println(strings.Split("a,b,c", ","))
    fmt.Println(strings.Join([]string{"a", "b"}, "-"))
    fmt.Println(strings.TrimSpace("  hi  "))
    fmt.Println(strings.HasPrefix(s, "He"))

    for i, r := range "اردو" {
        fmt.Println(i, string(r))
    }
    fmt.Println(len("اردو"), len([]rune("اردو")))   // 8 bytes, 4 characters

    var sb strings.Builder
    sb.WriteString("fast ")
    sb.WriteString("joining")
    fmt.Println(sb.String())
}
```
