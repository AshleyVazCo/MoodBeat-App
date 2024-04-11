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
    $fullName = $_POST["full_name"];
    $username = $_POST["username"];
    $password = $_POST["password"];
    $confirmPassword = $_POST["confirm_password"];


    // Validate input
    if (empty($fullName) || empty($username) || empty($password) || empty($confirmPassword)) {

        echo json_encode(["error" => "Please fill in all fields"]);
        exit;
    }

    if ($password !== $confirmPassword) {
        echo json_encode(["error" => "Passwords do not match"]);
        exit;
    }

    // Check if user already exists
    $query = "SELECT * FROM users WHERE username = '$username'";
    $result = $mysqli->query($query);
    if ($result->num_rows > 0) {
        echo json_encode(["error" => "Username already exists"]);
        exit;
    }

    // Insert new user into database
    $query = "INSERT INTO users (full_name, username, password) VALUES ('$fullName', '$username', '$password')";
    if ($mysqli->query($query)) {
        echo json_encode(["message" => "User registered successfully"]);
    } else {
        echo json_encode(["error" => "Failed to register user"]);
    }
}
