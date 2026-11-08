---
title: JavaScript Form Validation
sidebar_position: 18
---

# JavaScript Form Validation

```html
<form id="form">
  <input type="email" id="email" placeholder="Email">
  <p id="error" style="color: red;"></p>
  <button type="submit">Send</button>
</form>

<script>
  document.getElementById("form").addEventListener("submit", function (e) {
    const email = document.getElementById("email").value.trim();
    if (email === "") {
      e.preventDefault(); // stop the form from sending
      document.getElementById("error").textContent = "Email is required";
    }
  });
</script>
```

`preventDefault()` stops the browser's default action. Always validate on the server too, because browser checks can be bypassed.
