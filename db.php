<?php

$conn = new mysqli("localhost", "root", "", "scholarsync");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

?>