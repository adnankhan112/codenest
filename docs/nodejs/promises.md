---
title: "Node.js Promises"
sidebar_position: 15
---

# Node.js Promises

A promise stands for a result that will arrive later. It can be **pending**, **fulfilled** or **rejected**.

```javascript
function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) resolve({ id, name: "Ali" });
      else reject(new Error("Invalid id"));
    }, 500);
  });
}

getUser(1)
  .then((user) => {
    console.log(user.name);
    return user.id;
  })
  .catch((err) => console.error(err.message))
  .finally(() => console.log("Done"));

Promise.all([getUser(1), getUser(2)]).then((users) => console.log(users.length));
Promise.race([getUser(1), getUser(2)]);          // first one to finish
Promise.allSettled([getUser(1), getUser(-1)]);   // waits for all, never fails
```
