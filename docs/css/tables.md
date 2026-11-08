---
title: CSS Tables
sidebar_position: 17
---

# CSS Tables

```css
table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #2563eb;
  color: white;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #e0e7ff;
}
```

`border-collapse: collapse` merges the double borders into one.
