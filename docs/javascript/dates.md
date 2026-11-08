---
title: JavaScript Dates
sidebar_position: 20
---

# JavaScript Dates

```javascript
const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth());   // 0 to 11 (0 is January)
console.log(now.getDate());
console.log(now.getHours());
console.log(now.toLocaleDateString());

const birthday = new Date("2000-05-20");
console.log(birthday.getDay()); // 0 is Sunday
```

## Difference between two dates

```javascript
const a = new Date("2026-01-01");
const b = new Date("2026-12-31");
const days = (b - a) / (1000 * 60 * 60 * 24);
console.log(days); // 364
```
