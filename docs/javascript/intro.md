---
title: JavaScript Introduction
sidebar_position: 1
---

# JavaScript Introduction

JavaScript is the programming language of the web. HTML gives structure, CSS gives style, and JavaScript gives behavior: it makes pages interactive.

## What can JavaScript do?

- Change HTML content and styles
- React to clicks, typing and other events
- Validate forms
- Fetch data from servers
- Build full web applications and games

## First example

```html
<button onclick="alert('Hello!')">Click me</button>

<p id="demo">Original text</p>
<script>
  document.getElementById("demo").innerHTML = "Changed by JavaScript";
</script>
```
