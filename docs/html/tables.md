---
title: HTML Tables
sidebar_position: 14
---

# HTML Tables

Tables show data in rows and columns.

```html
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Ali</td>
    <td>20</td>
  </tr>
  <tr>
    <td>Sara</td>
    <td>22</td>
  </tr>
</table>
```

## Table elements

| Element | Purpose |
| --- | --- |
| `table` | The whole table. |
| `tr` | A table row. |
| `th` | A header cell (bold and centered by default). |
| `td` | A data cell. |
| `caption` | The table title. |
| `thead`, `tbody`, `tfoot` | Group the header, body and footer rows. |

## Merging cells

```html
<td colspan="2">This cell spans two columns</td>
<td rowspan="2">This cell spans two rows</td>
```

## Adding borders

Tables have no borders by default. Use CSS:

```html
<style>
  table, th, td { border: 1px solid black; border-collapse: collapse; }
</style>
```
