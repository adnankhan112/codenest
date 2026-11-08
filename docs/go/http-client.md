---
title: "Go HTTP Client"
sidebar_position: 34
---

# Go HTTP Client

## Theory

A **client** is a program that sends requests to other servers. The `net/http` package can do this too, for example to get data from an API.

## Practical

```go
package main

import (
    "encoding/json"
    "fmt"
    "net/http"
    "time"
)

type Todo struct {
    ID        int    `json:"id"`
    Title     string `json:"title"`
    Completed bool   `json:"completed"`
}

func main() {
    client := http.Client{Timeout: 10 * time.Second}

    resp, err := client.Get("https://jsonplaceholder.typicode.com/todos/1")
    if err != nil {
        fmt.Println("Request failed:", err)
        return
    }
    defer resp.Body.Close()

    if resp.StatusCode != http.StatusOK {
        fmt.Println("Bad status:", resp.Status)
        return
    }

    var todo Todo
    if err := json.NewDecoder(resp.Body).Decode(&todo); err != nil {
        fmt.Println(err)
        return
    }
    fmt.Println(todo.Title)
}
```
