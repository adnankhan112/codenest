---
title: JavaScript Objects
sidebar_position: 11
---

# JavaScript Objects

Objects store related data as key and value pairs.

```javascript
const person = {
  name: "Ali",
  age: 20,
  greet() {
    return "Hi, I am " + this.name;
  }
};

console.log(person.name);       // dot notation
console.log(person["age"]);     // bracket notation
console.log(person.greet());

person.city = "Islamabad";      // add a property
delete person.age;              // remove a property
```

## Looping over an object

```javascript
for (let key in person) {
  console.log(key, person[key]);
}
console.log(Object.keys(person));
```

## Destructuring

```javascript
const { name, city } = person;
```
