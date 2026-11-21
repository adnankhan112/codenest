---
title: "Modern JavaScript"
sidebar_position: 90
---

# Modern JavaScript

## Theory

### JavaScript is a living language

JavaScript is the language that makes a web page interactive. Its official rules are called **ECMAScript**. A new version of these rules is published every year, so the language keeps growing. The big update in 2015 is called **ES6** (or ES2015). Most people use the word "modern JavaScript" for ES6 and everything after it.

:::tip
Before you use a new feature, search for it on [MDN Web Docs](https://developer.mozilla.org) and check its browser support table.
:::

### Use let and const, not var

Old code used `var`. It has confusing rules, so modern code uses two other keywords.

- `const` is for a value that will not be assigned again. Use it by default.
- `let` is for a value that will change.

```javascript
const siteName = "CodeNest";
let visitors = 0;
visitors = visitors + 1;
```

If you try to give a new value to a `const`, JavaScript shows an error. This helps you find mistakes early.

### Template literals

Use backticks to put values inside text. This is easier than joining text with `+`.

```javascript
const name = "Ali";
const message = `Hello, ${name}! Welcome to CodeNest.`;
console.log(message);
```

### Arrow functions

An arrow function is a short way to write a function.

```javascript
// Old way
function add(a, b) {
  return a + b;
}

// Modern way
const addModern = (a, b) => a + b;
```

When the body is only one expression, you can skip the curly brackets and the word `return`.

### Default parameters

A parameter can have a default value that is used when nothing is given.

```javascript
const greet = (name = "friend") => `Hello, ${name}!`;

console.log(greet());       // Hello, friend!
console.log(greet("Sara")); // Hello, Sara!
```

### Destructuring

Destructuring takes values out of an object or an array in one line.

```javascript
const user = { name: "Ali", age: 20, city: "Lahore" };
const { name, city } = user;

const colors = ["red", "green", "blue"];
const [first, second] = colors;
```

### Spread and rest

Three dots `...` have two jobs. **Spread** copies values out. **Rest** collects many values into one array.

```javascript
const a = [1, 2];
const b = [...a, 3, 4];          // [1, 2, 3, 4]

const user = { name: "Ali" };
const updated = { ...user, age: 21 }; // a new object

const sum = (...numbers) => numbers.reduce((total, n) => total + n, 0);
console.log(sum(1, 2, 3));       // 6
```

### Optional chaining and nullish coalescing

`?.` stops safely if a value is missing, so your code does not crash. `??` gives a backup value only when the left side is `null` or `undefined`.

```javascript
const user = { profile: null };

console.log(user.profile?.email);        // undefined (no error)
console.log(user.profile?.email ?? "No email"); // No email
```

### Array methods you will use every day

| Method | What it does |
| --- | --- |
| `map` | Makes a new array by changing every item |
| `filter` | Makes a new array with only the items that pass a test |
| `find` | Returns the first item that passes a test |
| `some` and `every` | Check if some or all items pass a test |
| `reduce` | Combines all items into one value |

```javascript
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((n) => n * 2);       // [2, 4, 6, 8, 10]
const evens = numbers.filter((n) => n % 2 === 0); // [2, 4]
const firstBig = numbers.find((n) => n > 3);     // 4
const total = numbers.reduce((sum, n) => sum + n, 0); // 15
```

### Modules

A module is a JavaScript file that shares its code with other files using `export` and `import`.

```javascript
// math.js
export const add = (a, b) => a + b;

// app.js
import { add } from "./math.js";
console.log(add(2, 3));
```

In HTML, load a module file like this:

```html
<script type="module" src="app.js"></script>
```

### Promises and async/await

Some tasks take time, such as getting data from a server. JavaScript does not wait. It gives you a **promise**, which means "the result will come later". The words `async` and `await` let you write this in a simple, top-to-bottom way.

```javascript
const getTodo = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }
    const todo = await response.json();
    console.log(todo.title);
  } catch (error) {
    console.error("Something went wrong:", error);
  }
};

getTodo();
```

### Finding elements and listening to events

```javascript
const button = document.querySelector("#saveButton");

button.addEventListener("click", () => {
  console.log("Button was clicked");
});
```

`querySelector` finds the first element that matches a CSS selector. `addEventListener` runs your function when something happens.

### Old things you should stop using

| Old (do not use) | Modern replacement |
| --- | --- |
| `var` | `let` and `const` |
| `==` and `!=` | `===` and `!==` |
| `document.write()` | `textContent` or `createElement` |
| `onclick="..."` inside HTML | `addEventListener` |
| Joining text with `+` | Template literals |
| Callbacks inside callbacks | `async` and `await` |
| `XMLHttpRequest` | `fetch` |

## Practical

### Exercise: update an old script

Here is a script written in the old style.

```javascript
var names = ["ali", "sara", "omar"];
var result = [];
for (var i = 0; i < names.length; i++) {
  result.push("Hello, " + names[i].toUpperCase() + "!");
}
console.log(result);
```

Here is the modern version:

```javascript
const names = ["ali", "sara", "omar"];
const result = names.map((name) => `Hello, ${name.toUpperCase()}!`);
console.log(result);
```

### Your turn

1. Create a file named `modern.js` and a file named `index.html` that loads it with `<script type="module" src="modern.js"></script>`.
2. Copy the modern version into `modern.js`. Open `index.html` in your browser and press F12 to see the result in the Console.
3. Add a new name to the list and check the result again.
4. Use `filter` to keep only the names that have more than 3 letters.

## Summary

- JavaScript is updated every year. Modern JavaScript means ES6 and newer.
- Use `const` by default, `let` when the value changes, and never `var`.
- Use template literals, arrow functions, destructuring, and spread to write short, clear code.
- Use `map`, `filter`, `find`, and `reduce` instead of long loops.
- Use `async` and `await` with `fetch`, and always check `response.ok`.
- Use `===` and `addEventListener`. Check MDN before using a new feature.
