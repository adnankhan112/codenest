---
title: "PHP Date and Time"
sidebar_position: 29
---

# PHP Date and Time

```php
<?php
echo date("d-m-Y");             // 05-11-2026
echo date("Y-m-d H:i:s");       // 2026-11-05 14:30:00
echo date("l");                 // Thursday

date_default_timezone_set("Asia/Karachi");

$ts = strtotime("2026-12-25");
echo date("d M Y", $ts);
echo strtotime("+1 week");

// DateTime class
$now = new DateTime();
$birth = new DateTime("2000-05-20");
$diff = $now->diff($birth);
echo $diff->y . " years";

$tomorrow = (new DateTime())->modify("+1 day");
echo $tomorrow->format("d-m-Y");
```

| Code | Meaning |
| --- | --- |
| `d` | Day (01 to 31) |
| `m` | Month (01 to 12) |
| `Y` | Year (2026) |
| `H` | Hour (24 hour) |
| `i` | Minutes |
| `s` | Seconds |
| `l` | Day name |
