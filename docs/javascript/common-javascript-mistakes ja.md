---
title: "Common JavaScript Mistakes"
sidebar_position: 94
---

# Common JavaScript Mistakes

## Theory

Everyone makes mistakes when learning JavaScript. The good news is that most mistakes repeat. If you know them, you can avoid them. For each mistake below you will see the wrong code, the right code, and the reason.

### Mistake 1: Using == instead of ===

```javascript
console.log(0 == "");    // true  (surprise!)
console.log(0 === "");   // false

console.log("5" == 5);   // true
console.log("5" === 5);  // false
```

**Why:** Two equal signs change the type before comparing, which gives strange results. Three equal signs compare the value and the type. Always use `===` and `!==`.

### Mistake 2: Using var

```javascript
// Wrong
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // prints 3, 3, 3
}

// Right
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // prints 0, 1, 2
}
```

**Why:** `var` is shared across the whole function, while `let` belongs only to its own block. Use `const` by default and `let` when the value changes.

### Mistake 3: Forgetting that fetch does not fail on 404

```javascript
// Wrong: a 404 or 500 answer is not caught
const response = await fetch("/api/data");
const data = await response.json();

// Right
const response = await fetch("/api/data");
if (!response.ok) {
  throw new Error(`Request failed: ${response.status}`);
}
const data = await response.json();
```

**Why:** `fetch` throws an error only when the network fails. A server answer with an error status is still a normal answer, so you must check `response.ok`.

### Mistake 4: Forgetting await

```javascript
// Wrong
const response = fetch("https://jsonplaceholder.typicode.com/todos/1");
console.log(response); // Promise, not the data

// Right
const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
```

**Why:** An async task returns a promise. Without `await`, you get the promise itself and not the result.

### Mistake 5: Running the script before the page is ready

```html
<!-- Wrong: the button does not exist yet when the script runs -->
<script src="app.js"></script>
<button id="myButton">Click</button>
```

```html
<!-- Right -->
<script src="app.js" defer></script>
```

**Why:** The browser reads the HTML from top to bottom. A script with `defer` runs after the HTML is ready, so `querySelector` can find your elements. You will otherwise see the error `Cannot read properties of null`.

### Mistake 6: Showing user text with innerHTML

```javascript
// Wrong: harmful code typed by a visitor can run
element.innerHTML = userText;

// Right
element.textContent = userText;
```

**Why:** `innerHTML` reads text as HTML code. If a visitor types a harmful script, it may run on your page. This danger is called XSS. `textContent` shows the text as plain text only.

### Mistake 7: Sorting numbers without a compare function

```javascript
console.log([10, 9, 1].sort());                // [1, 10, 9]  (wrong order)
console.log([10, 9, 1].sort((a, b) => a - b)); // [1, 9, 10]  (right)
```

**Why:** By default, `sort` compares items as text. For numbers, give it a compare function.

### Mistake 8: Comparing objects and arrays

```javascript
console.log([1, 2] === [1, 2]);    // false
console.log({ a: 1 } === { a: 1 }); // false
```

**Why:** Objects and arrays are compared by their place in memory, not by what is inside. Two separate objects are never equal, even if they look the same.

### Mistake 9: Forgetting return in an arrow function with curly brackets

```javascript
// Wrong: returns undefined
const double = (n) => { n * 2 };

// Right
const double2 = (n) => n * 2;
const double3 = (n) => { return n * 2; };
```

**Why:** If you use curly brackets, you must write `return` yourself.

### Mistake 10: Changing the original array by accident

```javascript
const original = [3, 1, 2];

// Wrong: sort changes the original array
const sorted = original.sort();

// Right: make a copy first
const sortedCopy = [...original].sort();
```

**Why:** Methods like `sort`, `push`, `splice`, and `reverse` change the original array. Copy it first with the spread operator `...` if you want to keep the original.

### Mistake 11: Decimal math

```javascript
console.log(0.1 + 0.2); // 0.30000000000000004
```

**Why:** Computers keep decimals in a way that is not always exact. For money, count in the smallest unit (for example, paisa or cents) as whole numbers, or round the result with `toFixed(2)`.

### Mistake 12: Using this inside the wrong function

```javascript
const counter = {
  count: 0,
  start() {
    // Wrong: a normal function inside has its own "this"
    setTimeout(function () {
      this.count++; // not the counter object
    }, 100);

    // Right: an arrow function keeps "this" from outside
    setTimeout(() => {
      this.count++;
    }, 100);
  },
};
```

**Why:** A normal function gets its own `this`, but an arrow function uses the `this` of the place where it was written.

## Practical

### Exercise: find and fix the bugs

This code has four mistakes from the list above. Find them before you open the answer.

```javascript
var scores = [40, 100, 9];
var highest = scores.sort()[scores.length - 1];

document.querySelector("#result").innerHTML = "Highest: " + highest;

if (highest == "100") {
  console.log("Perfect score");
}
```

<details>
<summary>Show answer</summary>

The mistakes are: `var` instead of `const`, `sort()` with no compare function (and it changes the original array), `innerHTML` instead of `textContent`, and `==` instead of `===`.

```javascript
const scores = [40, 100, 9];
const highest = [...scores].sort((a, b) => a - b)[scores.length - 1];

document.querySelector("#result").textContent = `Highest: ${highest}`;

if (highest === 100) {
  console.log("Perfect score");
}
```

A simpler way to find the highest number is `Math.max(...scores)`.

</details>

### Your turn

1. Put the fixed code in a file together with an HTML paragraph that has `id="result"`.
2. Add a `defer` attribute to the script tag, so the paragraph is found.
3. Change the scores and check the result.
4. Write down three mistakes from this page that you have made before.

## Summary

- Use `===`, `const`, and `let`. Do not use `==` or `var`.
- Check `response.ok` after `fetch`, and do not forget `await`.
- Load scripts with `defer`.
- Use `textContent` for text from visitors, not `innerHTML`.
- Give `sort` a compare function for numbers, and copy arrays before changing them.
- Remember that objects are compared by place in memory, and that decimals can be slightly inexact.
