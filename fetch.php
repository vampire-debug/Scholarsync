<?php
include "db.php";

$page = isset($_GET['page']) ? $_GET['page'] : 1;
$limit = isset($_GET['limit']) ? $_GET['limit'] : 5;

$offset = ($page - 1) * $limit;

$sql = "SELECT * FROM students LIMIT $limit OFFSET $offset";
$result = $conn->query($sql);

$data = [];

while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

echo json_encode($data);
?>