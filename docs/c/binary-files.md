---
title: C Binary Files
sidebar_position: 23.5
---

# C Binary Files

Binary files store raw bytes, so structures can be saved and loaded directly.

```c
#include <stdio.h>

struct Student {
    char name[30];
    int marks;
};

int main() {
    struct Student s = {"Ali", 85};

    FILE *f = fopen("data.bin", "wb");
    fwrite(&s, sizeof(s), 1, f);
    fclose(f);

    struct Student t;
    f = fopen("data.bin", "rb");
    fread(&t, sizeof(t), 1, f);
    fclose(f);

    printf("%s %d\n", t.name, t.marks);
    return 0;
}
```

## Moving inside a file

```c
fseek(f, 0, SEEK_END);     // go to the end
long size = ftell(f);      // current position
rewind(f);                 // go back to the start
```
