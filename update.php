<?php

include 'db.php';

$id = $_POST['id'];
$usn = $_POST['usn'];
$name = $_POST['name'];
$email = $_POST['email'];
$course = $_POST['course'];

$sql = "UPDATE students 
SET 
    usn='$usn',
    name='$name',
    email='$email',
    course='$course'
WHERE id='$id'";

if ($conn->query($sql) === TRUE) {
    echo "success";
} else {
    echo "error";
}

?>