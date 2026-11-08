---
title: JavaScript Operators
sidebar_position: 7
---

# JavaScript Operators

## Arithmetic

```javascript
let a = 10, b = 3;
console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1 (remainder)
console.log(a ** b); // 1000 (power)
```

## Comparison

```javascript
console.log(5 == "5");  // true  (value only)
console.log(5 === "5"); // false (value and type)
console.log(5 !== 4);   // true
console.log(5 >= 3);    // true
```

Prefer `===` and `!==`.

## Logical

```javascript
console.log(true && false); // false
console.log(true || false); // true
console.log(!true);         // false
```
