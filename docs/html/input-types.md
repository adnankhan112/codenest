---
title: HTML Input Types
sidebar_position: 18
---

# HTML Input Types

The `input` element changes its behavior with the `type` attribute.

```html
<input type="text">
<input type="password">
<input type="email">
<input type="number" min="1" max="10">
<input type="date">
<input type="color">
<input type="range" min="0" max="100">
<input type="file">
```

## Checkboxes and radio buttons

```html
<input type="checkbox" id="html" name="skills" value="html">
<label for="html">HTML</label>

<input type="radio" id="male" name="gender" value="male">
<label for="male">Male</label>
<input type="radio" id="female" name="gender" value="female">
<label for="female">Female</label>
```

Radio buttons with the same `name` belong to one group, so only one can be selected.

## Useful input attributes

| Attribute | Purpose |
| --- | --- |
| `placeholder` | Hint text shown inside the empty field. |
| `required` | The field must be filled before submitting. |
| `value` | The default value. |
| `readonly` | The value cannot be changed. |
| `disabled` | The field is turned off. |
| `maxlength` | Maximum number of characters. |
