<?php
include "db.php";

header('Content-Type: text/plain');

$username = trim($_POST['username'] ?? '');
$password = trim($_POST['password'] ?? '');

$sql = "SELECT * FROM users 
        WHERE username='$username' 
        AND password='$password'";

$result = $conn->query($sql);

if ($result && $result->num_rows > 0) {
    echo "success";
    exit;
} else {
    echo "invalid";
    exit;
}
?>