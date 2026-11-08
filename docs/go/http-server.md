---
title: "Go HTTP Server"
sidebar_position: 33
---

# Go HTTP Server

## Theory

Go has a powerful web server in its standard library, so you can build websites and APIs **without any outside package**.

A **handler** is a function that receives a request and writes a response.

## Practical

```go
package main

import (
    "encoding/json"
    "fmt"
    "log"
    "net/http"
)

func home(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintln(w, "Welcome to Go!")
}

func hello(w http.ResponseWriter, r *http.Request) {
    name := r.URL.Query().Get("name")
    if name == "" {
        name = "friend"
    }
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(map[string]string{"message": "Hello, " + name})
}

func main() {
    http.HandleFunc("/", home)
    http.HandleFunc("/hello", hello)

    fmt.Println("Server running at http://localhost:8080")
    log.Fatal(http.ListenAndServe(":8080", nil))
}
```

Run it with `go run main.go` and visit `http://localhost:8080/hello?name=Ali`.
