---
title: "Go Input and Output (fmt)"
sidebar_position: 8
---

# Go Input and Output (fmt)

## Theory

The `fmt` package prints text and reads input. `Println` prints and goes to a new line. `Printf` prints with a **format**, where special codes such as `%d` are replaced by values.

To read a whole line with spaces, use `bufio`.

## Practical

```go
package main

import (
    "bufio"
    "fmt"
    "os"
    "strings"
)

func main() {
    name := "Ali"
    age := 20
    price := 9.5

    fmt.Println("Hello", name)
    fmt.Printf("Name: %s, Age: %d, Price: %.2f\n", name, age, price)
    fmt.Printf("%v %T\n", age, age)

    var city string
    fmt.Print("Enter your city: ")
    fmt.Scanln(&city)

    reader := bufio.NewReader(os.Stdin)
    fmt.Print("Enter your full name: ")
    full, _ := reader.ReadString('\n')
    full = strings.TrimSpace(full)

    fmt.Println("Hi,", full, "from", city)
}
```

| Code | Meaning |
| --- | --- |
| `%d` | Whole number |
| `%f` | Decimal number |
| `%s` | Text |
| `%v` | Any value |
| `%T` | The type |
| `%t` | true or false |
