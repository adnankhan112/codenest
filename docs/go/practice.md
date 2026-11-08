---
title: "Go Practice Questions with Answers"
sidebar_position: 38
---

# Go Practice Questions with Answers

## Theory

Try every question yourself first. Then compare with the answer.

## Practical

**1. Print "Hello, World!".**

```go
fmt.Println("Hello, World!")
```

**2. Add two numbers read from variables.**

```go
a, b := 5, 7
fmt.Println(a + b)
```

**3. Check if a number is even or odd.**

```go
n := 9
if n%2 == 0 {
    fmt.Println("Even")
} else {
    fmt.Println("Odd")
}
```

**4. Print the numbers from 1 to 10.**

```go
for i := 1; i <= 10; i++ {
    fmt.Print(i, " ")
}
```

**5. Find the largest number in a slice.**

```go
nums := []int{4, 9, 2, 7}
max := nums[0]
for _, n := range nums {
    if n > max {
        max = n
    }
}
fmt.Println(max)
```

**6. Write a function that returns the factorial of a number.**

```go
func factorial(n int) int {
    if n <= 1 {
        return 1
    }
    return n * factorial(n-1)
}
```

**7. Count how many times each word appears in a text.**

```go
counts := map[string]int{}
for _, w := range strings.Fields("go is fun and go is fast") {
    counts[w]++
}
fmt.Println(counts)
```

**8. Reverse a string (it may contain Urdu letters).**

```go
func reverse(s string) string {
    r := []rune(s)
    for i, j := 0, len(r)-1; i < j; i, j = i+1, j-1 {
        r[i], r[j] = r[j], r[i]
    }
    return string(r)
}
```

**9. Make a struct `Rectangle` with a method `Area`.**

```go
type Rectangle struct{ W, H float64 }

func (r Rectangle) Area() float64 { return r.W * r.H }
```

**10. Make an interface `Shape` and two types that use it.**

```go
type Shape interface{ Area() float64 }
type Circle struct{ R float64 }
type Square struct{ S float64 }
func (c Circle) Area() float64 { return 3.14159 * c.R * c.R }
func (s Square) Area() float64 { return s.S * s.S }
```

**11. Write a function that returns a result and an error.**

```go
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("division by zero")
    }
    return a / b, nil
}
```

**12. Start 3 goroutines and wait for them to finish.**

```go
var wg sync.WaitGroup
for i := 1; i <= 3; i++ {
    wg.Add(1)
    go func(id int) {
        defer wg.Done()
        fmt.Println("worker", id)
    }(i)
}
wg.Wait()
```

**13. Send 5 numbers through a channel and print them.**

```go
ch := make(chan int)
go func() {
    for i := 1; i <= 5; i++ {
        ch <- i
    }
    close(ch)
}()
for n := range ch {
    fmt.Println(n)
}
```

**14. Convert a struct to JSON.**

```go
type User struct {
    Name string `json:"name"`
}
data, _ := json.Marshal(User{Name: "Ali"})
fmt.Println(string(data))
```

## Project ideas

1. A command line calculator.
2. A URL checker that tests many websites at the same time with goroutines.
3. A REST API with a database.
4. A simple chat server.
