<?php
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
?>


<?php 

$db = new PDO('mysql:host=localhost;dbname=pomodoro', "root", "plop");

$taskTitle = $db->query("SELECT name FROM taches");
foreach ($taskTitle as $row) {
    $titleArray[] = $row['name']; 
}
$deleteTask = $db->query("SELECT id FROM taches");
foreach ($deleteTask as $row) {
    $delete[] = $row["id"];
}
header('Content-Type: application/json');
echo json_encode($titleArray);


?>
