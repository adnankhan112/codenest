---
title: "C++ Exercises and Quiz"
sidebar_position: 91
---

# C++ Exercises and Quiz

Reading is not enough to learn programming. You must write code yourself.

- Type the code with your own hands. Do not only copy and paste.
- Try the exercise first. Open the answer only after you have tried.
- If the compiler shows many errors, read the first one first. It often causes the others.
- Compile with `g++ -std=c++17 -Wall -Wextra file.cpp -o program` and read every warning.

Each chapter of the C++ tutorial ends with a small exercise like the ones below. At the end of this page there is a quiz.

## Exercises

### Chapter 1: Variables and output

**Task:** Make an `int` called `lessons` with the value 1 and a `double` called `price` with the value 49.5. Print: `Lessons: 1, price: 49.5`.

<details>
<summary>Show answer</summary>

```cpp
#include <iostream>

int main() {
    int lessons = 1;
    double price = 49.5;

    std::cout << "Lessons: " << lessons << ", price: " << price << "\n";
    return 0;
}
```

</details>

### Chapter 2: If and else

**Task:** Check if a number is positive, negative, or zero.

<details>
<summary>Show answer</summary>

```cpp
#include <iostream>

int main() {
    int number = -4;

    if (number > 0) {
        std::cout << "Positive\n";
    } else if (number < 0) {
        std::cout << "Negative\n";
    } else {
        std::cout << "Zero\n";
    }
    return 0;
}
```

</details>

### Chapter 3: Loops

**Task:** Print the numbers from 1 to 5 and their sum.

<details>
<summary>Show answer</summary>

```cpp
#include <iostream>

int main() {
    int sum = 0;

    for (int i = 1; i <= 5; i++) {
        std::cout << i << "\n";
        sum += i;
    }
    std::cout << "Sum: " << sum << "\n";
    return 0;
}
```

The sum is 15.

</details>

### Chapter 4: Vectors

**Task:** Make a vector of five numbers and print the biggest one.

<details>
<summary>Show answer</summary>

```cpp
#include <algorithm>
#include <iostream>
#include <vector>

int main() {
    std::vector<int> numbers = {12, 7, 30, 4, 18};

    int biggest = *std::max_element(numbers.begin(), numbers.end());

    std::cout << "Biggest: " << biggest << "\n";
    return 0;
}
```

</details>

### Chapter 5: Functions

**Task:** Write a function `square` that returns the square of an `int`, and call it from `main`.

<details>
<summary>Show answer</summary>

```cpp
#include <iostream>

int square(int n) {
    return n * n;
}

int main() {
    std::cout << square(6) << "\n";
    return 0;
}
```

The output is 36.

</details>

### Chapter 6: References

**Task:** Write a function `add_one` that adds 1 to an `int` using a reference.

<details>
<summary>Show answer</summary>

```cpp
#include <iostream>

void add_one(int &value) {
    value = value + 1;
}

int main() {
    int score = 9;
    add_one(score);
    std::cout << score << "\n";
    return 0;
}
```

The output is 10. The `&` in `int &value` means that the function works on the real variable, not on a copy.

</details>

### Chapter 7: Strings

**Task:** Count how many letters `a` are in the text `"banana"`.

<details>
<summary>Show answer</summary>

```cpp
#include <iostream>
#include <string>

int main() {
    std::string text = "banana";
    int count = 0;

    for (char letter : text) {
        if (letter == 'a') {
            count++;
        }
    }
    std::cout << count << "\n";
    return 0;
}
```

The output is 3.

</details>

### Chapter 8: Classes

**Task:** Make a class `Student` with a name and marks, and a method that prints them.

<details>
<summary>Show answer</summary>

```cpp
#include <iostream>
#include <string>
#include <utility>

class Student {
public:
    Student(std::string name, int marks) : name_(std::move(name)), marks_(marks) {}

    void print() const {
        std::cout << name_ << " has " << marks_ << " marks\n";
    }

private:
    std::string name_;
    int marks_;
};

int main() {
    Student ali("Ali", 85);
    ali.print();
    return 0;
}
```

The output is `Ali has 85 marks`.

</details>

## Quiz

Choose your answer first, then click "Show answer".

**1. Which header do you need for `std::cout`?**

- A) `<stdio.h>`
- B) `<iostream>`
- C) `<string>`

<details>
<summary>Show answer</summary>

**B) `<iostream>`.** It gives you `std::cout` and `std::cin`.

</details>

**2. What is the result of `7 / 2` when both numbers are `int`?**

- A) `3.5`
- B) `4`
- C) `3`

<details>
<summary>Show answer</summary>

**C) `3`.** Dividing two integers gives an integer. For `3.5`, write `7 / 2.0`.

</details>

**3. What does `auto x = 5;` make `x`?**

- A) An `int`
- B) A `double`
- C) A `string`

<details>
<summary>Show answer</summary>

**A) An `int`.** The compiler finds the type from the value `5`.

</details>

**4. Which is the modern way to write a null pointer?**

- A) `NULL`
- B) `0`
- C) `nullptr`

<details>
<summary>Show answer</summary>

**C) `nullptr`.** It is safer than `NULL` and `0`.

</details>

**5. What is the first place of a `std::vector`?**

- A) 0
- B) 1
- C) -1

<details>
<summary>Show answer</summary>

**A) 0.** A vector with 5 items has the places 0 to 4.

</details>

**6. What does `int &value` mean in a function parameter?**

- A) The function gets a copy
- B) The function works on the real variable
- C) The value must be negative

<details>
<summary>Show answer</summary>

**B)** A reference gives the function the real variable, so a change inside the function changes the original.

</details>

**7. Which is better for a single owner of an object that you made with `new`?**

- A) A raw pointer and `delete`
- B) `std::unique_ptr`
- C) A global variable

<details>
<summary>Show answer</summary>

**B) `std::unique_ptr`.** It frees the memory by itself, so you cannot forget it.

</details>

**8. How do you compare two `std::string` values?**

- A) `a == b`
- B) `strcmp(a, b)`
- C) `a.same(b)`

<details>
<summary>Show answer</summary>

**A) `a == b`.** In C++ the `==` sign works for `std::string`. In plain C text you must use `strcmp`.

</details>

## Quick summary

- Type the code yourself and try before you open the answer.
- Compile with warnings and read them.
- If you got 6 or more answers right, you are ready for the next chapter.
