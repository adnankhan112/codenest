---
title: JavaScript If Else
sidebar_position: 12
---

# JavaScript If Else

```javascript
let marks = 75;

if (marks >= 80) {
  console.log("Grade A");
} else if (marks >= 60) {
  console.log("Grade B");
} else {
  console.log("Try again");
}
```

## Ternary operator

```javascript
let result = marks >= 50 ? "Pass" : "Fail";
```

## Switch

```javascript
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Another day");
}
```
