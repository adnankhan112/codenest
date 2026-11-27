---
title: "Common C++ Mistakes"
sidebar_position: 94
---

# Common C++ Mistakes

Everyone makes mistakes when learning C++. The good news is that most mistakes repeat. If you know them, you can avoid them. For each mistake below you will see the wrong code, the right code, and the reason.

Some mistakes in C++ give no error at all. The program may seem to work, and then fail later. This is called **undefined behavior**. Always compile with `-Wall -Wextra` and read every warning.

## Mistake 1: Using = instead of ==

```cpp
// Wrong
if (score = 100) {
    std::cout << "Perfect\n";
}

// Right
if (score == 100) {
    std::cout << "Perfect\n";
}
```

**Why:** A single `=` gives the value 100 to `score`, and the condition is then always true. Two equal signs `==` compare. The compiler warns you when you use `-Wall`.

## Mistake 2: Dividing two integers

```cpp
// Wrong
double average = 5 / 2;
std::cout << average << "\n";   // 2

// Right
double average = 5 / 2.0;
std::cout << average << "\n";   // 2.5
```

**Why:** When both numbers are `int`, the result is also an `int`, and the decimal part is cut off. Make at least one of the numbers a `double`.

## Mistake 3: Using a variable that has no value

```cpp
// Wrong
int total;
total += 10;       // total had a random value

// Right
int total = 0;
total += 10;
```

**Why:** A local variable of a basic type does not start at zero. It holds whatever was in that memory before. Always give a value when you make a variable.

## Mistake 4: Going outside a vector

```cpp
// Wrong
std::vector<int> numbers = {10, 20, 30};
std::cout << numbers[3] << "\n";   // no error shown, but place 3 does not exist

// Right
std::cout << numbers.at(2) << "\n";   // 30

try {
    std::cout << numbers.at(3) << "\n";
} catch (const std::out_of_range &error) {
    std::cout << "Out of range\n";
}
```

**Why:** A vector with 3 items has the places 0, 1, and 2. The operator `[]` does not check the place, so it reads memory that is not yours. The function `at()` checks, and throws an error that you can catch.

## Mistake 5: Mixing signed and unsigned numbers

```cpp
// Wrong
std::vector<int> items;
for (int i = 0; i <= items.size() - 1; i++) {   // size() - 1 on an empty vector
    // ...
}

// Right
for (const auto &item : items) {
    // ...
}
```

**Why:** `size()` gives an unsigned number. For an empty vector, `size() - 1` does not become -1. It becomes a very huge number, and the loop runs far too long. A range-based `for` loop avoids the problem.

## Mistake 6: Using new without delete

```cpp
// Wrong
int *numbers = new int[100];
// ... use numbers ...
// the program leaves without delete[]

// Right
std::vector<int> numbers(100);
// ... use numbers ...
// the memory is freed by itself
```

**Why:** Memory from `new` stays taken until you call `delete`. If you forget, the program has a memory leak. Use `std::vector` or a smart pointer such as `std::make_unique`, and you never need to remember.

## Mistake 7: Returning a reference to a local variable

```cpp
// Wrong
const std::string &make_name() {
    std::string name = "Ali";
    return name;   // name disappears when the function ends
}

// Right
std::string make_name() {
    std::string name = "Ali";
    return name;
}
```

**Why:** A local variable lives only while its function runs. A reference to it is not safe after the function ends. Return the value itself. Modern C++ does this without slow copying.

## Mistake 8: Copying big objects by value

```cpp
// Wrong
void print_name(std::string name) {   // makes a full copy
    std::cout << name << "\n";
}

// Right
void print_name(const std::string &name) {   // no copy
    std::cout << name << "\n";
}
```

**Why:** When you give a big object to a function by value, C++ copies it. Use a `const` reference when the function only reads it.

## Mistake 9: Changing a vector while looping over it

```cpp
// Wrong
std::vector<int> numbers = {1, 2, 3};
for (int n : numbers) {
    if (n == 2) {
        numbers.push_back(4);   // can break the loop
    }
}

// Right
std::vector<int> extra;
for (int n : numbers) {
    if (n == 2) {
        extra.push_back(4);
    }
}
numbers.insert(numbers.end(), extra.begin(), extra.end());
```

**Why:** Adding an item can move the vector in memory, and the loop then uses a place that is not valid any more. Collect the changes first and apply them after the loop.

## Mistake 10: A base class without a virtual destructor

```cpp
// Wrong
class Animal {
public:
    virtual void speak() const {}
    // no virtual destructor
};

// Right
class Animal {
public:
    virtual void speak() const {}
    virtual ~Animal() = default;
};
```

**Why:** If you delete a child object through a base pointer, and the destructor is not `virtual`, only the base part is cleaned. This is undefined behavior. A class that has virtual functions needs a virtual destructor.

## Mistake 11: Object slicing

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

// Wrong: the Dog is copied into an Animal and loses its Dog part
void talk(Animal animal) {
    animal.speak();       // prints: Some sound
}

// Right: use a reference
void talk(const Animal &animal) {
    animal.speak();       // prints: Woof, when you give it a Dog
}
```

**Why:** When you pass a child object by value to a base class parameter, only the base part is copied. The child's behavior is lost. Pass by reference or by pointer.

## Mistake 12: Reading a map with square brackets

```cpp
// Wrong
std::map<std::string, int> ages = {{"Ali", 20}};
if (ages["Omar"] == 0) {          // this ADDS "Omar" with the value 0
    std::cout << "No Omar\n";
}
std::cout << ages.size() << "\n"; // 2

// Right
auto found = ages.find("Omar");
if (found == ages.end()) {
    std::cout << "No Omar\n";
}
std::cout << ages.size() << "\n"; // 1
```

**Why:** The operator `[]` on a map makes a new item with a default value when the key is missing. To only look, use `find()`.

## Exercise: find and fix the bugs

This program has four mistakes from the list above. Find them before you open the answer.

```cpp
#include <iostream>
#include <vector>

int main() {
    std::vector<int> numbers = {10, 20, 30};
    int total;

    for (int i = 0; i <= numbers.size(); i++) {
        total += numbers[i];
    }

    double average = total / 3;
    std::cout << "Total: " << total << ", average: " << average << "\n";
    return 0;
}
```

<details>
<summary>Show answer</summary>

The mistakes are: `total` has no starting value, the loop goes to `<=` and reads outside the vector, the loop compares a signed `int` with the unsigned `size()`, and `total / 3` is an integer division.

```cpp
#include <iostream>
#include <vector>

int main() {
    std::vector<int> numbers = {10, 20, 30};
    int total = 0;

    for (int n : numbers) {
        total += n;
    }

    double average = static_cast<double>(total) / numbers.size();
    std::cout << "Total: " << total << ", average: " << average << "\n";
    return 0;
}
```

The output is:

```text
Total: 60, average: 20
```

</details>

## Try it yourself

1. Put the fixed code in a file named `fixed.cpp` and compile it with `g++ -std=c++17 -Wall -Wextra fixed.cpp -o fixed`.
2. Compile the wrong version too, and read the warnings that the compiler gives.
3. Write down three mistakes from this page that you have made before.

## Quick summary

- Use `==` to compare, and `=` only to give a value.
- Divide with at least one `double` to keep the decimals.
- Always give a variable a starting value.
- Use `at()` or a range-based `for`, and be careful with `size() - 1`.
- Use `std::vector` and smart pointers instead of `new` and `delete`.
- Do not return a reference to a local variable.
- Pass big objects by `const` reference, and pass base class objects by reference.
- Give a base class a `virtual` destructor.
- Use `find()` to look in a map, not `[]`.
