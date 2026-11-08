---
title: HTML Classes and IDs
sidebar_position: 16
---

# HTML Classes and IDs

Classes and IDs let you select elements for styling with CSS or for control with JavaScript.

## The class attribute

Many elements can share the same class.

```html
<p class="note">First note</p>
<p class="note">Second note</p>

<style>
  .note { color: green; }
</style>
```

## The id attribute

An id must be **unique** in the page. It identifies one element.

```html
<h1 id="main-title">Welcome</h1>

<style>
  #main-title { color: red; }
</style>
```

## Differences

| | class | id |
| --- | --- | --- |
| How many elements | Many | One |
| CSS selector | `.name` | `#name` |
| Can be used in links | No | Yes, as `#name` |
