---
title: "PHP File Handling"
sidebar_position: 27
---

# PHP File Handling

```php
<?php
// Quick way
file_put_contents("notes.txt", "Hello file\n");
file_put_contents("notes.txt", "Second line\n", FILE_APPEND);
echo file_get_contents("notes.txt");

// Read line by line
$lines = file("notes.txt", FILE_IGNORE_NEW_LINES);
foreach ($lines as $line) {
    echo $line . "<br>";
}

// With fopen
$f = fopen("notes.txt", "r");
while (($line = fgets($f)) !== false) {
    echo $line;
}
fclose($f);

// Useful checks
var_dump(file_exists("notes.txt"));
echo filesize("notes.txt");
unlink("notes.txt");               // delete
mkdir("uploads");
```

| Mode | Meaning |
| --- | --- |
| `r` | Read |
| `w` | Write (erases the file) |
| `a` | Append |
