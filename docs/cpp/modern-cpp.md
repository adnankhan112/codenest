---
title: "Modern C++"
sidebar_position: 90
---

# Modern C++

C++ is a powerful language that keeps growing. A new standard comes out about every three years: C++11, C++14, C++17, C++20, and C++23. When people say "modern C++", they mean C++11 and newer. Modern C++ is safer, shorter, and easier to read than the old style that many old books still teach.

:::tip
A compiler may not support every new feature. Check your compiler's page to see which standard it supports. The examples on this page work with C++17, and the ones marked C++20 need a newer compiler.
:::

## Compile and run

Check that you have the compiler `g++`:

```text
g++ --version
```

Compile with the standard and the warnings turned on:

```text
g++ -std=c++17 -Wall -Wextra hello.cpp -o hello
```

On Windows run the program with `.\hello.exe`. On Linux and Mac run it with `./hello`. The options `-Wall` and `-Wextra` show warnings, which often point to real bugs.

## A modern program

```cpp
#include <iostream>
#include <string>
#include <vector>

int main() {
    std::vector<std::string> names = {"Ali", "Sara", "Omar"};

    for (const auto &name : names) {
        std::cout << "Hello, " << name << "!\n";
    }
    return 0;
}
```

The output is:

```text
Hello, Ali!
Hello, Sara!
Hello, Omar!
```

## The modern habits

### auto: let the compiler find the type

```cpp
auto count = 10;        // int
auto price = 49.5;      // double
auto name = std::string("Ali");
```

Use `auto` when the type is clear or very long. Do not use it when it makes the code harder to read.

### Range-based for loop

```cpp
std::vector<int> numbers = {1, 2, 3};

for (int n : numbers) {
    std::cout << n << "\n";
}
```

Write `const auto &item` to avoid copying big items.

### nullptr, not NULL

```cpp
int *pointer = nullptr;
```

`nullptr` is a real null pointer, and it is safer than `NULL` or `0`.

### Use std::string and std::vector

Use `std::string` instead of `char` arrays, and `std::vector` instead of raw arrays. They grow by themselves, and they clean up their own memory.

```cpp
std::vector<int> scores;
scores.push_back(90);
scores.push_back(75);
std::cout << scores.size() << "\n";   // 2
```

### Smart pointers: no new and delete

Old code used `new` and `delete`, and it was easy to forget `delete`. A smart pointer cleans up for you.

```cpp
#include <memory>

auto student = std::make_unique<int>(20);
std::cout << *student << "\n";   // 20
// no delete needed, the memory is freed by itself
```

- `std::unique_ptr` is for one owner.
- `std::shared_ptr` is for many owners.

### Lambdas: small functions on the spot

```cpp
#include <algorithm>

std::vector<int> numbers = {5, 2, 9, 1};

std::sort(numbers.begin(), numbers.end(), [](int a, int b) {
    return a > b;
});
// numbers is now 9, 5, 2, 1
```

### Structured bindings (C++17)

```cpp
#include <map>

std::map<std::string, int> ages = {{"Ali", 20}, {"Sara", 22}};

for (const auto &[name, age] : ages) {
    std::cout << name << " is " << age << "\n";
}
```

### std::optional (C++17): a value that may be missing

```cpp
#include <optional>

std::optional<int> find_age(bool found) {
    if (found) {
        return 20;
    }
    return std::nullopt;
}

auto age = find_age(true);
if (age) {
    std::cout << *age << "\n";   // 20
}
```

### constexpr: values known when you compile

```cpp
constexpr int max_users = 100;
```

### enum class: safer lists of names

```cpp
enum class Color { Red, Green, Blue };

Color c = Color::Green;
```

The names do not leak into the rest of your code, and a `Color` does not turn into an `int` by accident.

### override: catch mistakes in child classes

```cpp
class Animal {
public:
    virtual void speak() const { std::cout << "Some sound\n"; }
    virtual ~Animal() = default;
};

class Dog : public Animal {
public:
    void speak() const override { std::cout << "Woof\n"; }
};
```

If the function in `Dog` does not really match the one in `Animal`, the compiler shows an error because of `override`.

### std::format (C++20)

```cpp
#include <format>

std::string text = std::format("{} is {} years old", "Ali", 20);
```

You need a compiler that supports C++20 for this. If yours does not, use `std::cout` or build the text with `std::string`.

## Old things you should stop using

| Old (do not use) | Modern replacement |
| --- | --- |
| `NULL` | `nullptr` |
| `new` and `delete` | `std::make_unique`, `std::vector`, and other containers |
| `char` arrays for text | `std::string` |
| Raw arrays | `std::vector` or `std::array` |
| `typedef` | `using` |
| `#define MAX 100` | `constexpr int max = 100;` |
| Index loops over a whole container | Range-based `for` |
| `using namespace std;` in header files | Write `std::` |
| Compiling without warnings | `-Wall -Wextra` |

## Try it yourself

1. Compile and run the modern program above with `g++ -std=c++17 -Wall -Wextra`.
2. Make a `std::vector<int>` of five numbers and print them with a range-based `for` loop.
3. Sort the numbers from big to small with `std::sort` and a lambda.
4. Make an `enum class` for three days and print which one you chose using an `if`.

## Quick summary

- Modern C++ means C++11 and newer. Compile with `-std=c++17 -Wall -Wextra`.
- Use `auto`, range-based `for`, `nullptr`, and `constexpr`.
- Use `std::string`, `std::vector`, and smart pointers, and avoid `new` and `delete`.
- Use lambdas, structured bindings, `std::optional`, and `enum class`.
- Write `override` on functions that replace a parent's function.
