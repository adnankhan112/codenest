---
title: Java Packages and Imports
sidebar_position: 33
---

# Java Packages and Imports

A package groups related classes in a folder.

```java
package com.codenest.app;

import java.util.ArrayList;
import java.util.Scanner;
import java.util.*;          // everything in java.util

public class Main {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
    }
}
```

- The `package` line must be the first line of the file.
- The package name matches the folder path: `com/codenest/app`.
- `java.lang` (like `String` and `Math`) is imported automatically.
