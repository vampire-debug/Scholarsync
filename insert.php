<?php
include "db.php";

$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$course = $_POST['course'] ?? '';

if ($name != "" && $email != "" && $course != "") {

    $sql = "INSERT INTO students (name, email, course)
    VALUES ('$name', '$email', '$course')";

    if ($conn->query($sql)) {
        echo "Inserted Successfully";
    } else {
        echo "Error: " . $conn->error;
    }

} else {
    echo "Missing data";
}
?>