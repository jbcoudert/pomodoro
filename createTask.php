<?php
    // ini_set('display_errors', 1);
    // ini_set('display_startup_errors', 1);
    // error_reporting(E_ALL);
?>


<?php 

$db = new PDO('mysql:host=localhost;dbname=pomodoro', "root", "plop");

$createTask = $db->query("INSERT INTO taches (temps, status, name) VALUES (NOW(), 'A faire' , '".$_POST['title']."')");
var_dump($createTask)
?>
