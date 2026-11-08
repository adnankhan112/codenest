---
title: "TypeScript Access Modifiers"
sidebar_position: 20
---

# TypeScript Access Modifiers

## Theory

Access modifiers control **who can use** a property or method:

- `public`: everyone (the default)
- `private`: only inside the same class
- `protected`: inside the class and its child classes
- `readonly`: can be set once and never changed

This is called **encapsulation**: hiding the inside of a class.

## Practical

```typescript
class BankAccount {
  public owner: string;
  private balance: number = 0;
  readonly id: number;

  constructor(owner: string, id: number) {
    this.owner = owner;
    this.id = id;
  }

  deposit(amount: number): void {
    if (amount > 0) this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

const acc = new BankAccount("Ali", 1);
acc.deposit(500);
console.log(acc.getBalance());
// console.log(acc.balance);   // Error: private
// acc.id = 5;                 // Error: readonly
```
