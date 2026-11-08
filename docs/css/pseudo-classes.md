---
title: CSS Pseudo-classes
sidebar_position: 24
---

# CSS Pseudo-classes

A pseudo-class selects an element in a special state.

```css
button:hover { background-color: navy; }
input:focus { border-color: blue; }
li:first-child { font-weight: bold; }
li:last-child { color: gray; }
li:nth-child(odd) { background: #eee; }
input:disabled { opacity: 0.5; }
```

| Pseudo-class | Selects |
| --- | --- |
| `:hover` | When the mouse is over it |
| `:focus` | When it has keyboard focus |
| `:first-child` | The first child element |
| `:nth-child(n)` | The nth child |
| `:not(x)` | Elements that do not match x |
