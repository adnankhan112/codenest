---
title: "JavaScript Exercises and Quiz"
sidebar_position: 91
---

# JavaScript Exercises and Quiz

## Theory

### How to practice

Reading is not enough to learn programming. You must write code yourself. Follow these simple rules:

- Type the code with your own hands. Do not only copy and paste.
- Try the exercise first. Open the answer only after you have tried.
- If you get an error, read the message slowly. It usually tells you the line number.
- Use the browser Console (press F12) to test your code.

Each chapter of the JavaScript tutorial ends with a small exercise like the ones below. At the end of this page there is a quiz.

## Practical

### Chapter 1: Variables and text

**Task:** Make a `const` called `course` with the value `"JavaScript"` and a `let` called `lessons` with the value `0`. Add 1 to `lessons`. Print: `You finished 1 lesson of JavaScript`.

<details>
<summary>Show answer</summary>

```javascript
const course = "JavaScript";
let lessons = 0;
lessons = lessons + 1;
console.log(`You finished ${lessons} lesson of ${course}`);
```

</details>

### Chapter 2: Functions

**Task:** Write an arrow function `isAdult` that takes an age and returns `true` if the age is 18 or more, otherwise `false`.

<details>
<summary>Show answer</summary>

```javascript
const isAdult = (age) => age >= 18;

console.log(isAdult(20)); // true
console.log(isAdult(15)); // false
```

</details>

### Chapter 3: Arrays

**Task:** You have `const prices = [120, 80, 45, 200];`. Use array methods to make a new array of prices above 50, then find the total of that new array.

<details>
<summary>Show answer</summary>

```javascript
const prices = [120, 80, 45, 200];
const expensive = prices.filter((price) => price > 50);
const total = expensive.reduce((sum, price) => sum + price, 0);

console.log(expensive); // [120, 80, 200]
console.log(total);     // 400
```

</details>

### Chapter 4: Objects

**Task:** Make an object `student` with `name`, `age`, and `city`. Use destructuring to take out `name` and `city`. Then make a new object that is a copy of `student` with `age` changed to 21.

<details>
<summary>Show answer</summary>

```javascript
const student = { name: "Sara", age: 20, city: "Karachi" };
const { name, city } = student;
const older = { ...student, age: 21 };

console.log(name, city);
console.log(older);
```

</details>

### Chapter 5: The DOM and events

**Task:** Make a page with a button and a paragraph. When the button is clicked, the paragraph text must change to `You clicked the button`.

<details>
<summary>Show answer</summary>

```html
<button id="myButton" type="button">Click me</button>
<p id="message">Waiting...</p>

<script>
  const button = document.querySelector("#myButton");
  const message = document.querySelector("#message");

  button.addEventListener("click", () => {
    message.textContent = "You clicked the button";
  });
</script>
```

</details>

### Chapter 6: Async and fetch

**Task:** Use `fetch` to get `https://jsonplaceholder.typicode.com/todos/1` and print its `title` in the Console. Handle errors.

<details>
<summary>Show answer</summary>

```javascript
const loadTodo = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }
    const todo = await response.json();
    console.log(todo.title);
  } catch (error) {
    console.error(error);
  }
};

loadTodo();
```

</details>

## Quiz

Choose your answer first, then click "Show answer".

**1. Which keyword should you use for a value that will not be assigned again?**

- A) `var`
- B) `let`
- C) `const`

<details>
<summary>Show answer</summary>

**C) `const`.** It protects the value from being replaced by mistake.

</details>

**2. What is the result of `"5" === 5`?**

- A) `true`
- B) `false`
- C) An error

<details>
<summary>Show answer</summary>

**B) `false`.** The three equal signs check the value and the type. One is text and the other is a number.

</details>

**3. What does `user.profile?.email` do when `profile` is `null`?**

- A) It shows an error
- B) It returns `undefined` without an error
- C) It returns an empty text

<details>
<summary>Show answer</summary>

**B) It returns `undefined` without an error.** The `?.` stops safely when a value is missing.

</details>

**4. Which array method makes a new array with only the items that pass a test?**

- A) `map`
- B) `filter`
- C) `reduce`

<details>
<summary>Show answer</summary>

**B) `filter`.** `map` changes every item, and `reduce` combines all items into one value.

</details>

**5. If a server answers with status 404, does `fetch` throw an error by itself?**

- A) Yes, always
- B) No, you must check `response.ok`
- C) Only on mobile phones

<details>
<summary>Show answer</summary>

**B) No, you must check `response.ok`.** `fetch` throws an error only when the network fails.

</details>

**6. What does the `defer` attribute do on a script tag?**

- A) It stops the script from running
- B) It loads the script while the page is read, and runs it after the HTML is ready
- C) It makes the script run twice

<details>
<summary>Show answer</summary>

**B)** The script downloads without blocking the page and runs after the HTML is ready.

</details>

**7. Which is the safer way to show text typed by a visitor on your page?**

- A) `element.innerHTML = text`
- B) `element.textContent = text`
- C) `document.write(text)`

<details>
<summary>Show answer</summary>

**B) `textContent`.** It shows the text as plain text, so no harmful code can run.

</details>

**8. What is the result of `[10, 9, 1].sort()`?**

- A) `[1, 9, 10]`
- B) `[10, 9, 1]`
- C) `[1, 10, 9]`

<details>
<summary>Show answer</summary>

**C) `[1, 10, 9]`.** By default, `sort` compares items as text. To sort numbers, use `sort((a, b) => a - b)`.

</details>

## Summary

- Type the code yourself and try before you open the answer.
- Each chapter has a small exercise, and the quiz checks the main ideas.
- Read error messages slowly. They tell you what and where.
- If you got 6 or more answers right, you are ready for the next chapter.
