---
title: "Bootstrap Modals"
sidebar_position: 19
---

# Bootstrap Modals

## Theory

A **modal** is a popup window that appears above the page. It is used for messages, forms and confirmations. A button opens it, and the user closes it with a button or by clicking outside.

Bootstrap does this with `data-bs-` attributes. You do not need to write JavaScript.

## Practical

```html
<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
  Open modal
</button>

<div class="modal fade" id="myModal" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Delete lesson?</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <p>This action cannot be undone.</p>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button class="btn btn-danger">Delete</button>
      </div>
    </div>
  </div>
</div>
```

Sizes: add `modal-sm`, `modal-lg` or `modal-xl` to `modal-dialog`.
