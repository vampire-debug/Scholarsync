<?php
include "db.php";

$id = $_POST['id'];
$name = $_POST['name'];
$email = $_POST['email'];
$course = $_POST['course'];

$sql = "UPDATE students 
        SET name='$name', email='$email', course='$course' 
        WHERE id=$id";

$conn->query($sql);

echo "updated";
?>