<?php
    // ini_set('display_errors', 1);
    // ini_set('display_startup_errors', 1);
    // error_reporting(E_ALL);
?>


<?php 

$db = new PDO('mysql:host=localhost;dbname=pomodoro', "root", "plop");

$taskTitle = $db->query("SELECT id, name FROM taches");
foreach ($taskTitle as $row) {
    $titleArray[] =array('name' => $row['name'], 
                        'id' => $row["id"]);
}

header('Content-Type: application/json');
echo json_encode($titleArray);


?>
