---
title: "PHP REST API"
sidebar_position: 46
---

# PHP REST API

An API sends data (usually JSON) instead of web pages.

```php
<?php
header("Content-Type: application/json");

$method = $_SERVER["REQUEST_METHOD"];

switch ($method) {
    case "GET":
        $stmt = $pdo->query("SELECT id, name, marks FROM students");
        echo json_encode($stmt->fetchAll());
        break;

    case "POST":
        $data = json_decode(file_get_contents("php://input"), true);
        $stmt = $pdo->prepare("INSERT INTO students (name, marks) VALUES (?, ?)");
        $stmt->execute([$data["name"], $data["marks"]]);
        http_response_code(201);
        echo json_encode(["id" => $pdo->lastInsertId()]);
        break;

    default:
        http_response_code(405);
        echo json_encode(["error" => "Method not allowed"]);
}
```

## HTTP methods

| Method | Use |
| --- | --- |
| GET | Read data |
| POST | Create data |
| PUT or PATCH | Update data |
| DELETE | Remove data |

## Status codes

`200` OK, `201` created, `400` bad request, `401` not logged in, `404` not found, `500` server error.
