---
title: "PHP Practice Questions with Answers"
sidebar_position: 50
---

# PHP Practice Questions with Answers

Try each question first. Then compare with the answer.

**1. Print "Hello, World!".**

```php
<?php echo "Hello, World!";
```

**2. Add two numbers stored in variables.**

```php
<?php
$a = 5; $b = 7;
echo $a + $b;
```

**3. Check if a number is even or odd.**

```php
<?php
$n = 9;
echo ($n % 2 == 0) ? "Even" : "Odd";
```

**4. Print numbers 1 to 10 with a loop.**

```php
<?php
for ($i = 1; $i <= 10; $i++) echo $i . " ";
```

**5. Find the largest number in an array.**

```php
<?php
echo max([4, 9, 2, 7]);
```

**6. Reverse a string.**

```php
<?php
echo strrev("PHP");
```

**7. Check if a word is a palindrome.**

```php
<?php
$w = "madam";
echo ($w === strrev($w)) ? "Palindrome" : "Not palindrome";
```

**8. Make a function that returns the factorial of a number.**

```php
<?php
function fact(int $n): int {
    return $n <= 1 ? 1 : $n * fact($n - 1);
}
echo fact(5);   // 120
```

**9. Print a multiplication table of 7.**

```php
<?php
for ($i = 1; $i <= 10; $i++) echo "7 x $i = " . 7 * $i . "<br>";
```

**10. Count the words in a sentence.**

```php
<?php
echo str_word_count("PHP is fun to learn");   // 5
```

**11. Sort an associative array by value.**

```php
<?php
$m = ["Ali" => 80, "Sara" => 92, "Hina" => 75];
arsort($m);
print_r($m);
```

**12. Make a class `Rectangle` with a method that returns its area.**

```php
<?php
class Rectangle {
    public function __construct(private float $w, private float $h) {}
    public function area(): float { return $this->w * $this->h; }
}
echo (new Rectangle(3, 4))->area();   // 12
```

**13. Make a form that shows the name sent by the user, safely.**

```php
<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    echo "Hello " . htmlspecialchars($_POST["name"] ?? "");
}
?>
<form method="post"><input name="name"><button>Send</button></form>
```

**14. Save a message to a file.**

```php
<?php
file_put_contents("log.txt", "Visited at " . date("H:i:s") . "\n", FILE_APPEND);
```

**15. Read all students from MySQL and print them.**

```php
<?php
$rows = $pdo->query("SELECT name, marks FROM students")->fetchAll();
foreach ($rows as $r) echo $r["name"] . ": " . $r["marks"] . "<br>";
```

**16. Count how many times a visitor opened a page (session).**

```php
<?php
session_start();
$_SESSION["visits"] = ($_SESSION["visits"] ?? 0) + 1;
echo "You visited " . $_SESSION["visits"] . " times";
```

## Project ideas

1. A to-do list with MySQL.
2. A student result system.
3. A contact form that saves messages in a database.
4. A simple blog with login and comments.
5. A JSON API for products.
