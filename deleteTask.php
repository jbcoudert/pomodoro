<?php
    // ini_set('display_errors', 1);
    // ini_set('display_startup_errors', 1);
    // error_reporting(E_ALL);
?>

<?php 

    $db = new PDO('mysql:host=localhost;dbname=pomodoro', "root", "plop");
    $req = $db->query("DELETE FROM taches WHERE taches.id = ".$_POST["id"]);

?>