---
title: JavaScript HTML DOM
sidebar_position: 17
---

# JavaScript HTML DOM

The DOM (Document Object Model) lets JavaScript read and change the page.

## Selecting elements

```javascript
const title = document.getElementById("title");
const items = document.querySelectorAll(".item");
const first = document.querySelector("p");
```

## Changing content and style

```javascript
title.textContent = "New title";
title.style.color = "red";
title.classList.add("highlight");
title.classList.toggle("active");
```

## Creating elements

```javascript
const li = document.createElement("li");
li.textContent = "New item";
document.querySelector("ul").appendChild(li);
```

## Removing elements

```javascript
li.remove();
```
