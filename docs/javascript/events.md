---
title: JavaScript Events
sidebar_position: 16
---

# JavaScript Events

Events are things that happen on a page, such as a click or a key press.

```html
<button id="btn">Click me</button>
<p id="msg"></p>

<script>
  const btn = document.getElementById("btn");
  btn.addEventListener("click", function () {
    document.getElementById("msg").textContent = "Button clicked!";
  });
</script>
```

## Common events

| Event | When it happens |
| --- | --- |
| `click` | An element is clicked |
| `input` | The value of an input changes |
| `submit` | A form is submitted |
| `keydown` | A key is pressed |
| `mouseover` | The mouse moves over an element |
| `DOMContentLoaded` | The HTML has loaded |
