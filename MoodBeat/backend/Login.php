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
    if ($_POST["username"] === $users["username"] && $_POST["password"] === $users["password"]) {
        $username = $_POST["username"];
        $password = $_POST["password"];

        $query = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
        $result = $mysqli->query($query);

        if ($result->num_rows == 1) {
            $row = $result->fetch_assoc();
            echo json_encode($row);
        } else {
            echo json_encode(array("message" => "Invalid username or password"));
        }
    } else {
        echo json_encode(["error" => "Invalid request"]);
    }
}

// print_r($_GET);

// Need to write a method that will check if the user exists in the database and return the user's information to the front end

// if ($_SERVER["REQUEST_METHOD"] === "GET") {
//     $data = json_decode(file_get_contents('php://input'), true);
// $username = mysqli_real_escape_string($mysqli, $_GET["username"]);
// $password = mysqli_real_escape_string($mysqli, $_GET["password"]);
// $username = urldecode($_GET["username"]);
// $password = urldecode($_GET["password"]);

//     $query = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
//     $result = $mysqli->query($query);

//     if ($result->num_rows == 1) {
//         $row = $result->fetch_assoc();
//         echo json_encode($row);
//     } else {
//         echo json_encode(array("message" => "Invalid username or password"));
//     }
// } else {

//     echo json_encode(["error" => "Invalid request method"]);
// }

// if ($_SERVER["REQUEST_METHOD"] === "GET") {
//     $username = urldecode($_GET["username"]);
//     $password = urldecode($_GET["password"]);

//     $stmt = $mysqli->prepare("SELECT * FROM users WHERE username = ? AND password = ?");
//     $stmt->bind_param("ss", $username, $password);

//     $stmt->execute();

//     $result = $stmt->get_result();
// } else {
//     echo ["error" => "Invalid request method"];
// }

// Close connection
$mysqli->close();
