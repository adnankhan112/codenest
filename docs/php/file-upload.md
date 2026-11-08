---
title: "PHP File Upload"
sidebar_position: 28
---

# PHP File Upload

```html
<form action="upload.php" method="post" enctype="multipart/form-data">
  <input type="file" name="photo">
  <button type="submit">Upload</button>
</form>
```

```php
<?php
if (isset($_FILES["photo"])) {
    $file = $_FILES["photo"];

    if ($file["error"] !== UPLOAD_ERR_OK) {
        die("Upload failed");
    }

    $allowed = ["image/jpeg", "image/png"];
    $type = mime_content_type($file["tmp_name"]);
    if (!in_array($type, $allowed)) {
        die("Only JPG and PNG are allowed");
    }

    if ($file["size"] > 2 * 1024 * 1024) {
        die("File is too big (max 2 MB)");
    }

    $ext = pathinfo($file["name"], PATHINFO_EXTENSION);
    $newName = uniqid("img_") . "." . $ext;
    move_uploaded_file($file["tmp_name"], "uploads/" . $newName);
    echo "Uploaded as " . $newName;
}
```

Always check the file type and size, and give the file a new name.
