---
title: JavaScript Numbers and Math
sidebar_position: 9
---

# JavaScript Numbers and Math

```javascript
let price = 19.99;
console.log(price.toFixed(1));   // "20.0"
console.log(Number("42"));       // 42
console.log(parseInt("42px"));   // 42
console.log(parseFloat("3.14")); // 3.14
console.log(isNaN("abc"));       // true
```

## Math object

```javascript
console.log(Math.round(4.6));  // 5
console.log(Math.floor(4.9));  // 4
console.log(Math.ceil(4.1));   // 5
console.log(Math.max(1, 5, 3)); // 5
console.log(Math.sqrt(16));    // 4
console.log(Math.random());    // between 0 and 1
```

## Random whole number from 1 to 10

```javascript
let n = Math.floor(Math.random() * 10) + 1;
```
