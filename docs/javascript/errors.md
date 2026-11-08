---
title: JavaScript Errors
sidebar_position: 23
---

# JavaScript Errors

```javascript
try {
  let x = undefinedVariable; // causes an error
} catch (error) {
  console.log("Caught:", error.message);
} finally {
  console.log("This always runs");
}
```

## Throwing your own error

```javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}
```

## Debugging tips

- Use `console.log` to inspect values.
- Open the browser console with F12 and read the red error messages.
- Use the Sources tab to set breakpoints.
