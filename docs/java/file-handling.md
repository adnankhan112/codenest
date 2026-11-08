---
title: Java File Handling
sidebar_position: 43
---

# Java File Handling

```java
import java.io.*;
import java.nio.file.*;
import java.util.List;

public class Main {
    public static void main(String[] args) throws IOException {
        // Write
        Files.writeString(Path.of("notes.txt"), "Hello file\n");

        // Append
        Files.writeString(Path.of("notes.txt"), "Second line\n", StandardOpenOption.APPEND);

        // Read all lines
        List<String> lines = Files.readAllLines(Path.of("notes.txt"));
        for (String line : lines) {
            System.out.println(line);
        }

        // Check and delete
        File f = new File("notes.txt");
        System.out.println(f.exists());
        f.delete();
    }
}
```

## try-with-resources

```java
try (BufferedReader br = new BufferedReader(new FileReader("notes.txt"))) {
    String line;
    while ((line = br.readLine()) != null) {
        System.out.println(line);
    }
}
```

The file closes automatically when the block ends.
