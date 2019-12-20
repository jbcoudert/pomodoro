<?php

// UPDATE `taches` SET `status` = 'Fait' WHERE `taches`.`id` = 43;
    $db = new PDO('mysql:host=localhost;dbname=pomodoro', "root", "plop");
    $req = $db->query("UPDATE taches SET status = 'Fait' WHERE taches.id =".$_POST["id"]);

?>