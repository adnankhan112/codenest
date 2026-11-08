---
title: JavaScript JSON
sidebar_position: 19
---

# JavaScript JSON

JSON (JavaScript Object Notation) is a text format for exchanging data.

```javascript
const person = { name: "Ali", age: 20 };

const text = JSON.stringify(person); // object to string
console.log(text); // {"name":"Ali","age":20}

const obj = JSON.parse(text);        // string to object
console.log(obj.name); // Ali
```

## Rules

- Keys must be in double quotes.
- Strings must use double quotes.
- No comments or trailing commas.
