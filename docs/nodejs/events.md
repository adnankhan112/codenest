---
title: "Node.js Events"
sidebar_position: 10
---

# Node.js Events

Node is built around events. The `EventEmitter` class lets you make your own events.

```javascript
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("order", (item, qty) => {
  console.log(`Order received: ${qty} x ${item}`);
});

emitter.once("start", () => console.log("Runs only one time"));

emitter.emit("order", "Pizza", 2);
emitter.emit("start");
emitter.emit("start");        // nothing happens
```

## In a class

```javascript
class Shop extends EventEmitter {
  buy(item) {
    this.emit("sold", item);
  }
}

const shop = new Shop();
shop.on("sold", (item) => console.log(item + " was sold"));
shop.buy("Book");
```
