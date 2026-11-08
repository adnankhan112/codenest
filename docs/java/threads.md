---
title: Java Threads
sidebar_position: 48
---

# Java Threads

A thread lets your program do many tasks at the same time.

```java
class MyTask extends Thread {
    public void run() {
        for (int i = 1; i <= 3; i++) {
            System.out.println(getName() + " " + i);
        }
    }
}

public class Main {
    public static void main(String[] args) throws InterruptedException {
        MyTask t1 = new MyTask();
        Thread t2 = new Thread(() -> System.out.println("Lambda thread"));

        t1.start();
        t2.start();
        t1.join();      // wait for t1 to finish
    }
}
```

## Shared data and synchronized

```java
class Counter {
    private int c = 0;
    synchronized void add() { c++; }    // only one thread at a time
}
```

## ExecutorService

```java
import java.util.concurrent.*;

ExecutorService pool = Executors.newFixedThreadPool(2);
pool.submit(() -> System.out.println("Task"));
pool.shutdown();
```
