<?php

include 'db.php';

$page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
$limit = isset($_GET['limit']) ? (int)$_GET['limit'] : 5;

$offset = ($page - 1) * $limit;

$sql = "SELECT * FROM students LIMIT $offset, $limit";

$result = $conn->query($sql);

$students = [];

while($row = $result->fetch_assoc()) {
    $students[] = $row;
}

echo json_encode($students);

?>