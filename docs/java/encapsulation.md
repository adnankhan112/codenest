---
title: Java Encapsulation
sidebar_position: 25
---

# Java Encapsulation

Encapsulation means hiding the data of a class and giving controlled access through **getters** and **setters**.

```java
public class Person {
    private int age;

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        if (age >= 0) {
            this.age = age;
        }
    }
}

Person p = new Person();
p.setAge(20);
System.out.println(p.getAge());   // 20
p.setAge(-5);                     // ignored
```

Benefits: you can check values, change the inside later and protect your data.
