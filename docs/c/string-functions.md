---
title: C String Functions
sidebar_position: 16.5
---

# C String Functions

```c
#include <stdio.h>
#include <string.h>
#include <ctype.h>

int main() {
    char s[50] = "Hello";

    printf("%zu\n", strlen(s));          // 5
    strcat(s, " C");                     // Hello C
    printf("%d\n", strcmp("a", "b"));    // negative number

    char *p = strchr(s, 'l');            // first 'l'
    printf("%s\n", p);                   // llo C

    for (int i = 0; s[i]; i++) {
        s[i] = toupper(s[i]);
    }
    printf("%s\n", s);                   // HELLO C

    char line[50];
    fgets(line, sizeof(line), stdin);    // read a full line
    return 0;
}
```

| Function | Purpose |
| --- | --- |
| `strlen` | Length |
| `strcpy`, `strncpy` | Copy |
| `strcat` | Join |
| `strcmp` | Compare |
| `strstr` | Find a part |
| `toupper`, `tolower` | Change case |
| `isdigit`, `isalpha` | Check a character |
