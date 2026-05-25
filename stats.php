<?php
include "db.php";

// total students
$total = $conn->query("SELECT COUNT(*) as total FROM students")->fetch_assoc();

// course count (simple grouping)
$courses = $conn->query("SELECT course, COUNT(*) as count FROM students GROUP BY course");

$data = [];

while($row = $courses->fetch_assoc()){
    $data[] = $row;
}

echo json_encode([
    "totalStudents" => $total['total'],
    "courses" => $data
]);
?>