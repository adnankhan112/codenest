---
title: JavaScript Async and Fetch
sidebar_position: 22
---

# JavaScript Async and Fetch

Some tasks, such as loading data from a server, take time. JavaScript handles them asynchronously.

## setTimeout

```javascript
setTimeout(() => console.log("After 2 seconds"), 2000);
```

## Promises and async/await

```javascript
async function loadUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user = await response.json();
    console.log(user.name);
  } catch (error) {
    console.log("Something went wrong", error);
  }
}

loadUser();
```

`await` pauses the function until the result is ready, without freezing the page.
