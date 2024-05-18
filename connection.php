<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "trial_fetch";

try {
    $connection = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $th) {
    echo "Connection failed: " . $th->getMessage();
}
?>