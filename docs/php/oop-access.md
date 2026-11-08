---
title: "PHP Access Modifiers and Encapsulation"
sidebar_position: 34
---

# PHP Access Modifiers and Encapsulation

| Modifier | Who can use it |
| --- | --- |
| `public` | Everyone |
| `protected` | The class and child classes |
| `private` | Only the same class |

```php
<?php
class Account {
    private float $balance = 0;

    public function deposit(float $amount): void {
        if ($amount > 0) {
            $this->balance += $amount;
        }
    }

    public function getBalance(): float {
        return $this->balance;
    }
}

$a = new Account();
$a->deposit(100);
echo $a->getBalance();      // 100
// echo $a->balance;        // error: private
```

Keep data `private` and give access through methods. This is **encapsulation**.
