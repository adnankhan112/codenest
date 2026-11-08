---
title: JavaScript Functions
sidebar_position: 14
---

# JavaScript Functions

A function is a block of code that you can run many times.

```javascript
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5
```

## Arrow functions

```javascript
const multiply = (a, b) => a * b;
console.log(multiply(4, 5)); // 20
```

## Default parameters

```javascript
function greet(name = "friend") {
  return `Hello, ${name}!`;
}
console.log(greet());      // Hello, friend!
console.log(greet("Ali")); // Hello, Ali!
```

## Callbacks

```javascript
function run(callback) {
  callback();
}
run(() => console.log("Done"));
```
