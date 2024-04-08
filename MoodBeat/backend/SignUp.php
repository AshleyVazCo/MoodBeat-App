<?php

// Connect to MySQL database
$hostname = "127.0.0.1";
$dbusername = "zNJ0xGujle";
$dbpassword = "RrVz8JeG2y";
$database = "dbzNJ0xGujle";

$mysqli = new mysqli($hostname, $dbusername, $dbpassword, $database);

// Check connection
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

header('Access-Control-Allow-Origin: *');
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
   
}