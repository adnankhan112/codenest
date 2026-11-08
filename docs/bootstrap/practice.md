---
title: "Bootstrap Practice Questions with Answers"
sidebar_position: 28
---

# Bootstrap Practice Questions with Answers

## Theory

Try every question yourself first. Then compare with the answer.

## Practical

**1. Make a blue button that says "Buy now".**

```html
<button class="btn btn-primary">Buy now</button>
```

**2. Make a page with a centered, fixed width container.**

```html
<div class="container text-center">Hello</div>
```

**3. Make three equal columns.**

```html
<div class="row">
  <div class="col">1</div>
  <div class="col">2</div>
  <div class="col">3</div>
</div>
```

**4. Make columns that show 1 per row on phones and 3 per row on computers.**

```html
<div class="row">
  <div class="col-12 col-lg-4">A</div>
  <div class="col-12 col-lg-4">B</div>
  <div class="col-12 col-lg-4">C</div>
</div>
```

**5. Add a red alert with the message "Error!".**

```html
<div class="alert alert-danger">Error!</div>
```

**6. Make a text with a yellow background, with space around it.**

```html
<p class="bg-warning p-3">Important</p>
```

**7. Center an item both horizontally and vertically using flexbox.**

```html
<div class="d-flex justify-content-center align-items-center" style="height: 200px;">
  <span>Centered</span>
</div>
```

**8. Make a striped table with a dark header.**

```html
<table class="table table-striped">
  <thead class="table-dark">
    <tr><th>Name</th><th>Marks</th></tr>
  </thead>
  <tbody>
    <tr><td>Ali</td><td>85</td></tr>
  </tbody>
</table>
```

**9. Make a login form with email, password and a button.**

```html
<form>
  <input type="email" class="form-control mb-2" placeholder="Email">
  <input type="password" class="form-control mb-2" placeholder="Password">
  <button class="btn btn-success w-100">Login</button>
</form>
```

**10. Make a card with an image, title and button.**

```html
<div class="card" style="width: 18rem;">
  <img src="photo.jpg" class="card-img-top" alt="">
  <div class="card-body">
    <h5 class="card-title">Title</h5>
    <a href="#" class="btn btn-primary">Open</a>
  </div>
</div>
```

**11. Hide a paragraph on phones and show it on computers.**

```html
<p class="d-none d-md-block">Only on bigger screens</p>
```

**12. Make a round profile picture.**

```html
<img src="me.jpg" class="rounded-circle" width="100" alt="Me">
```

**13. Open a modal with a button.**

```html
<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#m">Open</button>
<div class="modal fade" id="m"><div class="modal-dialog"><div class="modal-content">
  <div class="modal-body">Hello!</div>
</div></div></div>
```

**14. Add a progress bar at 60 percent.**

```html
<div class="progress">
  <div class="progress-bar" style="width: 60%">60%</div>
</div>
```

## Project ideas

1. A personal portfolio page.
2. A restaurant menu page.
3. An online course page with a pricing table.
4. A dashboard with cards, a table and a sidebar.
