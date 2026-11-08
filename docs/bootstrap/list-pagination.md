---
title: "Bootstrap List Group, Pagination and Breadcrumb"
sidebar_position: 18
---

# Bootstrap List Group, Pagination and Breadcrumb

## Theory

- A **list group** shows a list of items in a neat box.
- **Pagination** lets users move between pages of results.
- A **breadcrumb** shows where the user is in the website, such as Home, then Tutorials, then Python.

## Practical

```html
<ul class="list-group">
  <li class="list-group-item active">Python</li>
  <li class="list-group-item">JavaScript</li>
  <li class="list-group-item d-flex justify-content-between">
    Java <span class="badge bg-primary rounded-pill">52</span>
  </li>
</ul>

<nav>
  <ul class="pagination">
    <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item active"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Tutorials</a></li>
    <li class="breadcrumb-item active">Python</li>
  </ol>
</nav>
```
