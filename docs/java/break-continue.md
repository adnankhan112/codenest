---
title: Java break and continue
sidebar_position: 16
---

# Java break and continue

```java
for (int i = 1; i <= 10; i++) {
    if (i == 3) continue;     // skip 3
    if (i == 7) break;        // stop at 7
    System.out.print(i + " ");
}
```

Output: `1 2 4 5 6`

## Labeled break

```java
outer:
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        if (i * j == 4) break outer;   // leaves both loops
        System.out.println(i + "," + j);
    }
}
```
