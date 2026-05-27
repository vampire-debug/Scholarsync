<?php

include 'db.php';

$usn = $_POST['usn'];
$name = $_POST['name'];
$email = $_POST['email'];
$course = $_POST['course'];

$sql = "INSERT INTO students (usn, name, email, course)
VALUES ('$usn', '$name', '$email', '$course')";

if ($conn->query($sql) === TRUE) {
    echo "success";
} else {
    echo $conn->error;
}
?>