---
title: HTML Forms
sidebar_position: 17
---

# HTML Forms

Forms collect input from users. They are made with the `form` element.

```html
<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">

  <label for="email">Email:</label>
  <input type="email" id="email" name="email">

  <button type="submit">Send</button>
</form>
```

## Form attributes

- `action`: where the data is sent.
- `method`: how it is sent. `get` puts data in the address, `post` sends it in the request body.

## Other form elements

```html
<textarea name="message" rows="4" cols="30"></textarea>

<select name="country">
  <option value="pk">Pakistan</option>
  <option value="us">United States</option>
</select>
```

## Tip

Always connect a `label` to its input using `for` and `id`. This makes forms easier to use and more accessible.
