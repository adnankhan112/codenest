---
title: "Bootstrap Images and Tables"
sidebar_position: 12
---

# Bootstrap Images and Tables

## Theory

Bootstrap makes images **responsive** (they never get wider than their box) and gives tables a clean style with striped rows, borders and hover effects.

## Practical

```html
<img src="photo.jpg" class="img-fluid" alt="Responsive image">
<img src="photo.jpg" class="img-thumbnail" alt="Thumbnail">
<img src="photo.jpg" class="rounded" width="150" alt="Rounded">

<div class="table-responsive">
  <table class="table table-striped table-hover table-bordered">
    <thead class="table-dark">
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Marks</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Ali</td>
        <td>85</td>
      </tr>
      <tr class="table-success">
        <td>2</td>
        <td>Sara</td>
        <td>92</td>
      </tr>
    </tbody>
  </table>
</div>
```

`.table-responsive` adds a side scroll on small screens, so a wide table never breaks the page.
