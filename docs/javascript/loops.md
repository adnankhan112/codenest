---
title: JavaScript Loops
sidebar_position: 13
---

# JavaScript Loops

## for loop

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

## while loop

```javascript
let n = 1;
while (n <= 3) {
  console.log(n);
  n++;
}
```

## for...of (arrays)

```javascript
const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log(color);
}
```

## break and continue

```javascript
for (let i = 1; i <= 10; i++) {
  if (i === 3) continue; // skip 3
  if (i === 6) break;    // stop at 6
  console.log(i);
}
```
