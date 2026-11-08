---
title: "Node.js Callbacks"
sidebar_position: 14
---

# Node.js Callbacks

A callback is a function you give to another function. It runs when the work is done.

```javascript
function getUser(id, callback) {
  setTimeout(() => {
    callback(null, { id, name: "Ali" });
  }, 1000);
}

getUser(1, (err, user) => {
  if (err) return console.error(err);
  console.log(user.name);
});
```

Node callbacks follow the pattern: **the first argument is the error**.

## Callback hell

Many callbacks inside each other are hard to read:

```javascript
getUser(1, (e, user) => {
  getOrders(user.id, (e, orders) => {
    getItems(orders[0].id, (e, items) => {
      console.log(items);
    });
  });
});
```

Promises and `async/await` fix this problem.
