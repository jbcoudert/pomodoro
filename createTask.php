<?php
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
?>


<?php 

$db = new PDO('mysql:host=localhost;dbname=pomodoro', "root", "plop");

date("Y-m-d H:i:s");

$createTask = $db->query("INSERT INTO taches (`id`, `temps`, `status`) VALUES (NULL, date('Y-m-d H:i:s') , 'Fait');");


?>