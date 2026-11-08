---
title: "PHP JSON"
sidebar_position: 31
---

# PHP JSON

```php
<?php
$data = ["name" => "Ali", "age" => 20, "skills" => ["PHP", "SQL"]];

$json = json_encode($data);
echo $json;     // {"name":"Ali","age":20,"skills":["PHP","SQL"]}

$array = json_decode($json, true);       // true gives an array
echo $array["name"];

$object = json_decode($json);            // gives an object
echo $object->name;

// Send JSON from an API page
header("Content-Type: application/json");
echo json_encode(["status" => "ok"]);
```

Use `json_last_error_msg()` to see why decoding failed.
