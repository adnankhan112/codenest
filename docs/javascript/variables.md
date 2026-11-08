---
title: JavaScript Variables
sidebar_position: 5
---

# JavaScript Variables

Variables store data.

```javascript
let age = 20;
const country = "Pakistan";
var oldStyle = "avoid var";

age = 21;          // allowed
// country = "X";  // error: const cannot change
```

| Keyword | Can reassign | Scope |
| --- | --- | --- |
| `let` | Yes | Block |
| `const` | No | Block |
| `var` | Yes | Function (old style) |

Use `const` by default and `let` when the value must change.
