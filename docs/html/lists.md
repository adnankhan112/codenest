---
title: HTML Lists
sidebar_position: 13
---

# HTML Lists

HTML supports three kinds of lists.

## Unordered list

```html
<ul>
  <li>Apples</li>
  <li>Bananas</li>
  <li>Oranges</li>
</ul>
```

## Ordered list

```html
<ol>
  <li>Open the editor</li>
  <li>Write the code</li>
  <li>Save the file</li>
</ol>
```

You can change the numbering with the `type` attribute (`1`, `A`, `a`, `I`, `i`) and the starting number with `start`.

## Description list

```html
<dl>
  <dt>HTML</dt>
  <dd>The structure of a web page</dd>
  <dt>CSS</dt>
  <dd>The style of a web page</dd>
</dl>
```

## Nested lists

```html
<ul>
  <li>Fruits
    <ul>
      <li>Apple</li>
      <li>Mango</li>
    </ul>
  </li>
  <li>Vegetables</li>
</ul>
```
