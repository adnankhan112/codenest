---
title: "Bootstrap Navbar"
sidebar_position: 15
---

# Bootstrap Navbar

## Theory

A **navbar** is the menu at the top of a website. Bootstrap navbars are responsive: on small screens they collapse into a button (the "hamburger" menu) that opens and closes the menu.

This needs the Bootstrap JavaScript file.

## Practical

```html
<nav class="navbar navbar-expand-lg bg-dark navbar-dark">
  <div class="container">
    <a class="navbar-brand" href="#">CodeNest</a>

    <button class="navbar-toggler" type="button"
            data-bs-toggle="collapse" data-bs-target="#menu"
            aria-controls="menu" aria-expanded="false" aria-label="Toggle menu">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="menu">
      <ul class="navbar-nav me-auto">
        <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Tutorials</a></li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Languages</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">HTML</a></li>
            <li><a class="dropdown-item" href="#">Python</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search">
        <button class="btn btn-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
```

- `navbar-expand-lg`: the full menu shows from the large size. Below it, the menu collapses.
- `sticky-top` or `fixed-top` keeps the navbar at the top while scrolling.
