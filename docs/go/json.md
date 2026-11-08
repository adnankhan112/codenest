---
title: "Go JSON"
sidebar_position: 31
---

# Go JSON

## Theory

**JSON** is a common text format for sending data. Go's `encoding/json` package turns structs into JSON (**marshal**) and JSON into structs (**unmarshal**).

**Struct tags** (the text in backticks) control the JSON names.

## Practical

```go
package main

import (
    "encoding/json"
    "fmt"
)

type Student struct {
    Name   string   `json:"name"`
    Age    int      `json:"age"`
    Skills []string `json:"skills"`
    Email  string   `json:"email,omitempty"`   // skipped when empty
}

func main() {
    s := Student{Name: "Ali", Age: 20, Skills: []string{"Go", "SQL"}}

    data, err := json.Marshal(s)
    if err != nil {
        fmt.Println(err)
        return
    }
    fmt.Println(string(data))

    pretty, _ := json.MarshalIndent(s, "", "  ")
    fmt.Println(string(pretty))

    var back Student
    err = json.Unmarshal([]byte(`{"name":"Sara","age":22}`), &back)
    fmt.Println(back, err)

    var anything map[string]interface{}
    json.Unmarshal([]byte(`{"a":1,"b":"x"}`), &anything)
    fmt.Println(anything["b"])
}
```

Only fields that start with a capital letter are converted.
