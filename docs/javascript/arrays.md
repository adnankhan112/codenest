---
title: JavaScript Arrays
sidebar_position: 10
---

# JavaScript Arrays

```javascript
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]);      // Apple
console.log(fruits.length);  // 3

fruits.push("Orange");       // add to the end
fruits.pop();                // remove from the end
fruits.unshift("Kiwi");      // add to the start
fruits.shift();              // remove from the start
```

## Useful methods

```javascript
let nums = [1, 2, 3, 4, 5];

nums.forEach(n => console.log(n));
let doubled = nums.map(n => n * 2);       // [2, 4, 6, 8, 10]
let even = nums.filter(n => n % 2 === 0); // [2, 4]
let sum = nums.reduce((total, n) => total + n, 0); // 15
console.log(nums.includes(3));            // true
console.log(nums.indexOf(4));             // 3
```
