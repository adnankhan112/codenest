---
title: JavaScript Classes
sidebar_position: 21
---

# JavaScript Classes

```javascript
class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  isPassed() {
    return this.marks >= 50;
  }
}

const s = new Student("Ali", 72);
console.log(s.name);       // Ali
console.log(s.isPassed()); // true
```

## Inheritance

```javascript
class Teacher extends Student {
  constructor(name, subject) {
    super(name, 100);
    this.subject = subject;
  }
}
```
